let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        './app/main.js'
    ],
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
            },
            {
            test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { 
                from: './app/index.html', to: 'index.html',                
            },
            { 
                from: './app/common/img', to: 'img/',                
            }
        ])
    ],
    resolve: {
        root: [
            path.resolve('./app')
        ]
    },
    devServer: {
        contentBase: './build/',
        historyApiFallback: true,
        hot: true,
        quiet: false,
        stats: {
          colors: true
        }
    }
};