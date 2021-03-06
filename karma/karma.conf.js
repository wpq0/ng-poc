module.exports = config => {
    config.set({
        autoWatch: true,
        browsers: ['PhantomJS'],
        files: [
            'karma.entry.js'
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 9876,
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'tfs'],
        tfsReporter: {
            outputDir: 'testresults',
            outputFile: 'testresults_${date}.xml'
        },
        singleRun: true,
        webpack: require('../config/webpack.test.js'),
        webpackServer: {
            noInfo: true
        }
    });
};