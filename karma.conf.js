// Karma configuration
// Generated on Wed Jun 29 2016 23:33:27 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({
    frameworkds: ['mocha', 'chai'],
    basePath: '',

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack'
    ],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    concurrency: Infinity,
    plugins: []
  });
}
