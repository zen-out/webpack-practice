const path = require("path")
module.exports = (env) => {
    console.log(env.production)
    return {
        // where your app is 
        entry: {
            index: "./app/index.js"
            // can split code into modules here, can make your app load significantly faster
            // index: {
            //     import: "./src/index.js",
            //     dependOn: "shared"

            // },
            // another: {
            //     import: "./src/another_module.js",
            //     dependOn: "shared"
            // },
            // shared: "lodash"
        },
        // if using multiple entrypoints, make sure you add this line
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        // helpful for finding errors
        // make sure to click on the error in the console
        devtool: "inline-source-map",
        // will enable live reload 
        devServer: {
            static: "./dist"
        },
        plugins: [
            new HandlebarsPlugin({
                entry: path.join(__dirname, "app", "*.handlebars"),
                output: path.join(__dirname, "dist", "[name].html"),
                components: path.join(__dirname, "")
            })
        ],
        output: {
            // your index.html file references this
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            // clean the dist file automatically
            clean: true,
            publicPath: "/"
        },
        module: {
            rules: [{
                    test: /\.css$/i,
                    // use include as much as possible
                    include: path.resolve(__dirname, "app"),
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.handlebars$/i,
                    loader: "handlebars-loader"
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
            ]
        }
    }

}