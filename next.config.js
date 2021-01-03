module.exports = {
  env: {
    ANALYTICS_ID: process.env.ANALYTICS_ID,
  },
  async rewrites() {
    return [
      { source: '/', destination: '/' },
      { source: '/conocenos', destination: '/about' },
      { source: '/codigo-de-conducta', destination: '/coc' },
      { source: '/comunicaciones', destination: '/comuniques' },
      { source: '/comunidades', destination: '/communities' },
      { source: '/conocimiento', destination: '/knowledge' },
      { source: '/encuentros/proximo', destination: '/api/next-encuentros-codear' },
      { source: '/anuario/2020', destination: '/yearbook/2020' },
    ];
  },
  catchAllRouting: true,
};
