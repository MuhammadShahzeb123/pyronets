const { createServer } = require('https');
const http = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const httpsPort = parseInt(process.env.HTTPS_PORT, 10) || 443;
const httpPort = parseInt(process.env.HTTP_PORT, 10) || 80;

const app = next({ dev, hostname });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH || './ssl/key.pem'),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH || './ssl/cert.pem'),
};

app.prepare().then(() => {
  // HTTPS server
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(httpsPort, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://${hostname}:${httpsPort}`);
  });

  // HTTP server (redirect to HTTPS)
  http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}` });
    res.end();
  }).listen(httpPort, hostname, (err) => {
    if (err) throw err;
    console.log(`> HTTP redirect on http://${hostname}:${httpPort}`);
  });
});