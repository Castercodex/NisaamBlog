const { createProxyMiddleware } = require("http-proxy-middleware");

const context = ["/article"];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: "https://localhost:7272",
    secure: false,
  });

  app.use(appProxy);
};
