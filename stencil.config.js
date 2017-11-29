exports.config = {
  bundles: [
    { components: ['wr-compass'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  namespace: 'wr-compass',
  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
