const path = require("path");

module.exports = function () {
  const { nuxt, addPlugin } = this;
  const moduleOptions = nuxt.options.fetch || {};
  const options = {};

  // Default port
  const defaultPort =
    process.env.API_PORT ||
    moduleOptions.port ||
    process.env.PORT ||
    process.env.npm_package_config_nuxt_port ||
    (this.options.server && this.options.server.port) ||
    3000;

  // Default host
  let defaultHost =
    process.env.API_HOST ||
    moduleOptions.host ||
    process.env.HOST ||
    process.env.npm_package_config_nuxt_host ||
    (this.options.server && this.options.server.host) ||
    "localhost";

  /* istanbul ignore if */
  if (defaultHost === "0.0.0.0") {
    defaultHost = "localhost";
  }

  const prefix = process.env.API_PREFIX || options.prefix || "/";

  options.baseURL = `http://${defaultHost}:${defaultPort}${prefix}`;

  addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    fileName: "fetch.js",
    options,
  });
};
