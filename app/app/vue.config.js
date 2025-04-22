const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    client: {
      webSocketURL: 'https://reimagined-space-barnacle-q7p5w75vvj4x24q9r-8080.app.github.dev/'
   }
  }
}