module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('slim')
      .test(/\.slm$/)
      .use('slm-loader')
      .loader('slm-loader')
      .tap(options => {
        return options
      })
      .end()
  },
}
