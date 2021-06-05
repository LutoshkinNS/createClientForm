module.exports = {
  publicPath: '/create-client-form/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style.sass"',
      },
    },
  },
};
