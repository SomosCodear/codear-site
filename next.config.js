const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(withFonts({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/conocenos': { page: '/about' },
    };
  },
}));
