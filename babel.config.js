const materialUITransformCore = [
  "babel-plugin-import",
  {
    libraryName: "@material-ui/core",
    libraryDirectory: "esm",
    camel2DashComponentName: false
  },
  "core"
]

const materialUITransformIcons = [
  "babel-plugin-import",
  {
    libraryName: "@material-ui/icons",
    libraryDirectory: "esm",
    camel2DashComponentName: false
  },
  "icons"
]

module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current'
          }
        }]
      ]
    },
    development: {
      plugins: [
        materialUITransformCore,
        materialUITransformIcons
      ]
    },
    production: {
      plugins: [
        materialUITransformCore,
        materialUITransformIcons
      ]
    }
  },
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    ["@babel/preset-typescript", {
      onlyRemoveTypeImports: true
    }]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
  ]
}
