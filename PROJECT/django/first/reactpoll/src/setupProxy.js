const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Change this to match the path you want to proxy
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000', // Your server's address
      changeOrigin: true,
    })
  );
};
