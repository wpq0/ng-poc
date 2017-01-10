const webpack = require('webpack');
const path = require('path');

const srcPath = path.resolve(__dirname, '../src');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css)$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(html)$/,
                use: ['raw-loader']
            },
            {
                test: /\.json$/,
                use: 'json-loader'
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
        extensions: ['.ts', '.js', '.json'],
        alias: {
            "source": path.resolve(__dirname, '../../source')
        }
    }
};