// eslint-disable-next-line no-undef
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Mini Editor';
      return args;
    });
  },
};
