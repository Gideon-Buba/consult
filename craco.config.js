// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          assets: path.resolve(__dirname, "assets"), // Adjust the alias path as needed
        },
      },
    },
  },
};
