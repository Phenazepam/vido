module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/public_html/vidodo/'
  : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles.scss";`
      }
    }
}
}