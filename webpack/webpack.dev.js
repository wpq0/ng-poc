'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const UglifyWebpack = webpack.optimize.UglifyJsPlugin;
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const rootDir = path.resolve(__dirname, '..');
const srcPath = path.join(__dirname, "./src");

module.exports = {
    context: __dirname,
    target: 'web',
    entry: {
        app: [path.resolve(rootDir, 'src', 'bootstrap')],
        vendor: [path.resolve(rootDir, 'src', 'vendor')]
    },
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    },
    devtool: 'source-map',
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
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new UglifyWebpack({
            sourceMap: false,
            mangle: false
        }),
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    resolve: {
        modules: [
            "node_modules",
            srcPath
        ],
        extensions: [
            '.ts', '.js'
        ],
    }
};