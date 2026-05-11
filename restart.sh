#!/bin/bash

# Pyronets Server Restart Script

echo "=== Building Next.js app ==="
cd /home/shahzeb/pyronets
npm run build

echo ""
echo "=== Stopping existing Next.js process ==="
pkill -f "next start" 2>/dev/null || true
sleep 2

echo "=== Starting Next.js production server ==="
nohup npm run start > /tmp/nextjs.log 2>&1 &
sleep 3

echo "=== Restarting Nginx ==="
sudo nginx -t && sudo nginx -s reload

echo ""
echo "=== Services Status ==="
curl -s -o /dev/null -w "Next.js: %{http_code}\n" http://localhost:3000
curl -s -o /dev/null -w "Nginx: %{http_code}\n" https://pyronets.com

echo ""
echo "Log file: /tmp/nextjs.log"
echo "Done!"