const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// Resource for tutorial: https://youtu.be/IZGNcSuwBZs?si=YEwd35zqdwtKVfy9

module.exports = {
  // Setting mode of build: (production || development || none)
  mode: "development",
  // Creating entry point: (The point or file from where the bundling will start and this will be the top
  // most node inside the dependency graph).
  // 1.  __dirname is pointing to the current directory and resolve is creating the path for us.
  // 2.  To create multiple entry points we can make the entry key as object.
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  // Creating the path where we will get our build file:
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    // To avoid generating two bundles we can use clean
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // Setting up source maps using devtool:
  devtool: "source-map",
  // Configuring devServer:
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    // enable gzip compression
    compress: true,
    historyApiFallback: true,
  },
  // Setup loaders:
  module: {
    rules: [
      // Adding rules for CSS
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Adding rules to create code backward compatible
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // Adding rules for assets (In-build loaders)
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // HTML plugins: These are little more powerful then loaders and can be used for optimizations,
  // minifications etc of our production code.
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack config",
      filename: "index.html",
      template: "src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
