const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Change '/api' to match the base URL of your API
    createProxyMiddleware({
      target: 'https://trackingserver.onrender.com', // Change the target URL to match your server's URL
      changeOrigin: true,
    })
  );
};