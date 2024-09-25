module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://43.131.6.9/', // 后端服务器地址
          changeOrigin: true, // 改变请求的 origin
          pathRewrite: {
            '^/api': '' // 重写路径
          }
        }
      }
    }
  };