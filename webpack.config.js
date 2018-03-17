const path = require("path");

module.exports = {
  entry: {
    app: "./index.js",
    base: "./base.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production"
};
