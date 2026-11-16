const http = require('http');
const net = require('net');

const TARGET_PORT = 3000;
const PROXY_PORT = 3001;

const server = http.createServer((req, res) => {
  const headers = { ...req.headers };
  headers.host = `localhost:${TARGET_PORT}`;

  const options = {
    hostname: '127.0.0.1',
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'text/html' });
    res.end(`<h3>Connecting to Dev Server on port ${TARGET_PORT}... (${err.message})</h3>`);
  });

  req.pipe(proxyReq, { end: true });
});

// Forward WebSocket for Next.js hot module reloading (HMR)
server.on('upgrade', (req, clientSocket, head) => {
  const serverSocket = net.connect(TARGET_PORT, '127.0.0.1', () => {
    const rawHeaders = Object.keys(req.headers)
      .map((key) => `${key}: ${req.headers[key]}`)
      .join('\r\n');

    serverSocket.write(
      `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n${rawHeaders}\r\n\r\n`
    );

    if (head && head.length) {
      serverSocket.write(head);
    }

    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });

  serverSocket.on('error', () => clientSocket.destroy());
  clientSocket.on('error', () => serverSocket.destroy());
});

server.listen(PROXY_PORT, () => {
  console.log(`Port proxy active: http://localhost:${PROXY_PORT} -> http://localhost:${TARGET_PORT} (Dual-stack IPv4/IPv6)`);
});

