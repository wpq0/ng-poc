const path = require('path');
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const srcPath = path.resolve(__dirname, '../../abc');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|html)$/,
                use: ['raw-loader']
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                use: 'url?limit=10000'
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            srcPath
        ],
        extensions: [
            '.ts', '.js'
        ],
        alias: {
            "Dest": path.resolve(__dirname, '../../abc')
        }
    }
};