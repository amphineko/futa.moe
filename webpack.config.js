const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devServer: {
        hot: true,
        watchFiles: ["./src/**/*"],
    },

    devtool: "inline-source-map",

    entry: {
        index: "./src/index.js",
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    output: {
        clean: true,
        filename: "assets/[name].[contenthash:8].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[name].[contenthash:8][ext]",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash:8].css",
        }),
    ],
}
