const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/test-table-vue/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/variables.scss";',
      },
    },
  },
});
