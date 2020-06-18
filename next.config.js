module.exports = {
  env: {
    ANALYTICS_ID: process.env.ANALYTICS_ID,
  },
  experimental: {
    async rewrites() {
      return [
        { source: '/', destination: '/' },
        { source: '/conocenos', destination: '/about' },
        { source: '/codigo-de-conducta', destination: '/coc' },
        { source: '/comunicaciones', destination: '/comuniques' },
        { source: '/comunidades', destination: '/communities' },
        { source: '/conocimiento', destination: '/knowledge' },
      ];
    },
    catchAllRouting: true,
  },
};
