const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.ts")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }, {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Boilerplate",
            template: path.resolve(__dirname, "./src/template.html"),
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ]
}