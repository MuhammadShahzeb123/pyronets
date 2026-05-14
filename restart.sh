#!/bin/bash

# =============================================================================
# Pyronets Server Restart Script
# =============================================================================
# This script handles:
#   1. Stop existing services
#   2. Build Next.js application
#   3. Start Next.js production server
#   4. Configure Nginx reverse proxy with HTTPS
# =============================================================================

set -e  # Exit on any error

# Configuration
PROJECT_DIR="/home/shahzeb/pyronets"
DOMAIN="pyronets.com"
PORT=3000
LOG_FILE="/tmp/pyronets.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# =============================================================================
# Step 1: Stop existing services
# =============================================================================
stop_services() {
    log_info "Stopping existing services..."

    # Stop Next.js
    if pgrep -f "next start" > /dev/null; then
        pkill -f "next start"
        log_info "Next.js stopped"
    else
        log_warn "No running Next.js instance found"
    fi

    # Stop any processes on port 3000
    if lsof -i :$PORT > /dev/null 2>&1; then
        lsof -i :$PORT | awk 'NR>1 {print $2}' | xargs -r kill -9
        log_info "Port $PORT cleared"
    fi

    sleep 2
}

# =============================================================================
# Step 2: Build Next.js application
# =============================================================================
build_app() {
    log_info "Building Next.js application..."

    cd "$PROJECT_DIR"

    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log_info "Installing dependencies..."
        npm install
    fi

    # Build the application
    npm run build

    if [ $? -eq 0 ]; then
        log_info "Build completed successfully"
    else
        log_error "Build failed!"
        exit 1
    fi
}

# =============================================================================
# Step 3: Start Next.js production server
# =============================================================================
start_server() {
    log_info "Starting Next.js production server..."

    cd "$PROJECT_DIR"

    # Start Next.js in background
    nohup npm run start > "$LOG_FILE" 2>&1 &
    NEXTJS_PID=$!

    # Wait for server to start
    log_info "Waiting for Next.js to start..."
    sleep 5

    # Check if server is running
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT | grep -q "200\|301\|302"; then
        log_info "Next.js server is running (PID: $NEXTJS_PID)"
    else
        log_error "Next.js failed to start. Check log: $LOG_FILE"
        exit 1
    fi
}

# =============================================================================
# Step 4: Configure Nginx with HTTPS
# =============================================================================
configure_nginx() {
    log_info "Configuring Nginx reverse proxy with HTTPS..."

    # Nginx config content
    nginx_config="
# Pyronets Nginx Configuration
# Auto-generated - DO NOT EDIT MANUALLY

upstream nextjs_app {
    server 127.0.0.1:$PORT;
    keepalive 64;
}

# HTTP to HTTPS redirect
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        return 301 https://\$host\$request_uri;
    }
}

# HTTPS configuration
server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;

    # SSL Certificates (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;

    # SSL Configuration
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS (optional - uncomment if ready)
    # add_header Strict-Transport-Security "max-age=63072000" always;

    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;

    # Security Headers
    add_header X-Frame-Options \"SAMEORIGIN\" always;
    add_header X-Content-Type-Options \"nosniff\" always;
    add_header X-XSS-Protection \"1; mode=block\" always;
    add_header Referrer-Policy \"strict-origin-when-cross-origin\" always;

    # Proxy headers
    proxy_http_version 1.1;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
    proxy_set_header X-Forwarded-Host \$host;

    # Cache static assets
    location /_next/static {
        proxy_pass http://nextjs_app;
        proxy_cache_valid 60m;
        add_header Cache-Control \"public, max-age=31536000, immutable\";
    }

    # Proxy all other requests to Next.js
    location / {
        proxy_pass http://nextjs_app;
        proxy_buffering off;
        proxy_redirect off;
        proxy_set_header Accept-Encoding '';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;

        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # WebSocket support (if needed)
    location /_next/ws {
        proxy_pass http://nextjs_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection \"upgrade\";
        proxy_read_timeout 86400;
    }
}
"

    # Write Nginx config
    echo "$nginx_config" | sudo tee /etc/nginx/sites-available/pyronets > /dev/null

    # Create symbolic link
    sudo ln -sf /etc/nginx/sites-available/pyronets /etc/nginx/sites-enabled/

    # Test Nginx config
    if sudo nginx -t; then
        log_info "Nginx configuration is valid"
    else
        log_error "Nginx configuration test failed!"
        exit 1
    fi

    # Reload Nginx
    sudo nginx -s reload
    log_info "Nginx reloaded successfully"
}

# =============================================================================
# Step 5: Verify all services
# =============================================================================
verify_services() {
    log_info "Verifying all services..."

    echo ""
    echo "========================================"
    echo "         Service Status Check          "
    echo "========================================"

    # Check Next.js
    NEXTJS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT)
    if [ "$NEXTJS_STATUS" = "200" ]; then
        echo -e "Next.js:        ${GREEN}Running (HTTP $NEXTJS_STATUS)${NC}"
    else
        echo -e "Next.js:        ${RED}Not responding${NC}"
    fi

    # Check Nginx
    NGINX_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN)
    if [ "$NGINX_STATUS" = "200" ]; then
        echo -e "Nginx (HTTPS):  ${GREEN}Running (HTTP $NGINX_STATUS)${NC}"
    else
        echo -e "Nginx (HTTPS):  ${YELLOW}Not responding (status: $NGINX_STATUS)${NC}"
    fi

    # Check Nginx process
    if pgrep nginx > /dev/null; then
        echo -e "Nginx Process:  ${GREEN}Active${NC}"
    else
        echo -e "Nginx Process:  ${RED}Not running${NC}"
    fi

    echo "========================================"
    echo ""
    echo "Log file: $LOG_FILE"
    echo "Domain: https://$DOMAIN"
    echo ""
    log_info "Done! Pyronets is now running."
}

# =============================================================================
# Main execution
# =============================================================================
main() {
    echo ""
    echo "========================================"
    echo "   Pyronets Server Restart Script       "
    echo "========================================"
    echo ""

    stop_services
    build_app
    start_server
    configure_nginx
    verify_services
}

# Run the script
main