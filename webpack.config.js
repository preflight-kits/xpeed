const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pages = require("./configs/pages.json");

const entryPoints = {
  "global-scripts": "./src/scripts/global.js",
  "global-styles": "./src/styles/global.scss",
};

for (let [page, options] of Object.entries(pages)) {
  entryPoints[page] = `./pages/${page}/scripts/${page}.js`;
}

module.exports = {
  entry: entryPoints,
  output: {
    path: __dirname + "/assets/dist",
    filename: "js/[name].js",
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/global.css",
    }),
  ],
};
