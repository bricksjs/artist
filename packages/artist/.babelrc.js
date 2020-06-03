const config = {
  "presets": [
    [
      "@babel/preset-env",
      {
        // "modules": false,
        "modules": 'commonjs',
      }
    ],
    [
      "@babel/preset-typescript"
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ]
}

module.exports = config
