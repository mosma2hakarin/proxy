const http = require('http');
const httpProxy = require('http-proxy');

const server = http.createServer((req, res) => {
  const proxy = httpProxy.createProxyServer({});
  proxy.web(req, res, {
    target: 'http://149.18.63.85:30120',
  });
});

const port = 8080; // Porti në të cilin do të dëgjojë serveri yt proxy
server.listen(port, () => {
  console.log(`Proxy server është aktiv në portin ${port}`);
});
