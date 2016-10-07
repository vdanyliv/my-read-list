let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: './build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./app/index.html", to: "index.html" }
        ])
    ],
    resolve: {
        root: [
            path.resolve('./app')
        ]
    }
};