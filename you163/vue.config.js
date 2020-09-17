module.exports = {
  devServer: {
    proxy: {
      '/luFei': {
        target: 'https://m.you.163.com/', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/luFei': ''
        }
      }
    }
  }
}
