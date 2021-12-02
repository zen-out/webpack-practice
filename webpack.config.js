const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    // where your app is 
    entry: {
        // can split code into modules here, can make your app load significantly faster
        index: {
            import: "./src/index.js",
            dependOn: "shared"

        },
        another: {
            import: "./src/another_module.js",
            dependOn: "shared"
        },
        shared: "lodash"
    },
    // if using multiple entrypoints, make sure you add this line
    optimization: {
        runtimeChunk: "single"
    },
    // helpful for finding errors
    // make sure to click on the error in the console
    devtool: "inline-source-map",
    // will enable live reload 
    devServer: {
        static: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        // your index.html file references this
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        // clean the dist file automatically
        clean: true,
        publicPath: "/"
    },

}