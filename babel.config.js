module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: false
    }]
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
