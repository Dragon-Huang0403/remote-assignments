const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundles.js"
    },
    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader'
        }]
    },
    devtool: "source-map" // Add this option for source mapping
};