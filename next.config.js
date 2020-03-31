const branch = process.env.NOW_GITHUB_COMMIT_REF ? process.env.NOW_GITHUB_COMMIT_REF : 'local';
const analyticsIdKey = `${branch.toUpperCase()}_ANALYTICS_ID`;

module.exports = {
  env: {
    ANALYTICS_ID: process.env[analyticsIdKey],
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
