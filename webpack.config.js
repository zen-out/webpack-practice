const path = require("path")

module.exports = {
    // where your app is 
    entry: "./src/index.js",
    output: {
        // your index.html file references this
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

}