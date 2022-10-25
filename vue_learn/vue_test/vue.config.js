const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 开启代理服务器, 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器, 方式二
  devServer: {
    proxy: {
      '/students': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/athz':''},
        ws: true,  //用于支持websocket
        // changeOrigin: false  //用于控制请求头中的host值
        changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,
        changeOrigin: true
      },
    }
  }
})