const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
  proxy.web(req, res, {
    target: '78.46.39.20:10579',
  });
});

server.listen(process.env.PORT || 3000);
