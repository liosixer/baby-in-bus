const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: [path.resolve(__dirname, "./src/index.jsx")],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[hash:8].js"
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000"
            }
        ]
    },

    devtool: "inline-source-map",

    // 配置devServer
    devServer: {
        contentBase: './dist'
    },
}