exports.config = {
  bundles: [
    { components: ['wr-compass'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  namespace: 'wr-compass',
  generateDistribution: true,
  generateWWW: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
