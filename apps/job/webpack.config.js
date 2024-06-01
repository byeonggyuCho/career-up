module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],

  ignorePatterns: ["dist", ".eslintrc.js", "webpack.config.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
};
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;

const moduleScope = "@career-up";
const workspacePackages = Object.keys(deps).filter((key) =>
  key.startsWith(moduleScope)
);

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3004/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3004,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "job",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./injector": "./src/injector.tsx",
        "./fragment-recommend-jobs":
          "./src/fragments/recommend-jobs-container.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        ...workspacePackages.reduce(
          (re, packageName) => ({
            ...re,
            [packageName]: {
              singleton: true,
            },
          }),
          {}
        ),
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv({ path: "../../.env" }),
  ],
});
