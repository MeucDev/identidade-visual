module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://www.meuc.org.br/logo/'
    : '/',
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Manual de Identidade Visual - MEUC'
      return args
    })
  }
}
