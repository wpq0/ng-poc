const webpack = require('webpack');
const helpers = require('./helpers');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpack = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyWebpack = webpack.optimize.UglifyJsPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = {
    host: HOST,
    port: PORT,
    ENV: ENV
};

module.exports = {
    context: __dirname,
    target: 'web',
    entry: {
        app: [helpers.root('src/bootstrap.ts')],
        vendor: [helpers.root('src/vendor.ts')]
    },
    devServer: {
        contentBase: helpers.root('dist'),
        host: METADATA.host,
        port: METADATA.port
    },
    devtool: 'source-map',
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
    output: {
        filename: '[name].bundle.js',
        path: helpers.root('dist')
    },
    plugins: [
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV)
            }
        }),
        new CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor']
        }),
        new CommonsChunkPlugin({
            name: 'app',
            chunks: ['app'],
            minChunks: module => /node_modules\//.test(module.resource)
        }),
        new CommonsChunkPlugin({
            name: ['vendor', 'app'].reverse()
        }),
        new UglifyWebpack({
            sourceMap: false,
            mangle: true
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: helpers.root('src/index.html')
        })
    ],
    resolve: {
        modules: [
            helpers.root("node_modules"),
            helpers.root("src")
        ],
        extensions: ['.ts', '.js', '.json']
    }
};