const devConfig = require("./config.webpack.dev");

module.exports = {
  ...devConfig,
  mode: "production",
};
