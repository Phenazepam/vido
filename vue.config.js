module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
  ? '/vidodo/'
  : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles.scss";`
      }
    }
}
}