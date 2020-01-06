module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ]
    ],
    babelrcRoots: ['.', 'node_modules']
  }
}