module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
