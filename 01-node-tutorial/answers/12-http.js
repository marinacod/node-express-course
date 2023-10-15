const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our history');
    return;
  }
  res.end(`<h1>Oops</h1>`);
});

server.listen(3000);
