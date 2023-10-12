const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function (req, res) {
  proxy.web(req, res, {
    target: 'http://149.18.63.85:30120',
  });
});

server.listen(process.env.PORT || 3000);
