const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors'); // For handling CORS if needed

const app = express();
app.use(cors()); // Enable CORS if required

const proxy = httpProxy.createProxyServer({});
const target = process.env.TARGET_SERVER || 'http://149.18.63.85:30120';

// Error handling for the proxy
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.status(500).send('Proxy error');
});

// Proxy all requests to the target server
app.all('/*', (req, res) => {
  proxy.web(req, res, { target });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Proxy server is running on port ' + port);
});
