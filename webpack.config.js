const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'logic.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',

    module: {
        rules:[{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-react', { targets: "defaults" }]
                ]
              }
            }
          }]
    },
};

