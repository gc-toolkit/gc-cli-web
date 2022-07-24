const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  devServer:{
    proxy:"https://gc-toolkit.github.io/GPM-Index/"
  },

  publicPath: ''
})
