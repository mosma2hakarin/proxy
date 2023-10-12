const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
  proxy.web(req, res, {
    target: 'https://cfx.re/join/l6keoo',
  });
});

server.listen(process.env.PORT || 3000);
