const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin({
        patterns: [
            'src/index.html',
            {
              context: path.resolve(__dirname, 'src', 'assets'),
              from: '**/*',
            },
        ],
    }),
  ]
};
