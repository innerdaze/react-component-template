const path = require('path')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, 'dist', process.env.CORDOVA ? 'cordova' : 'web'),
    publicPath: process.env.CORDOVA ? '' : '/',
    libraryTarget: 'commonjs2'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/web/src/assets/fonts/')
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
  },
  externals: {
    react: 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: /src\/assets\/fonts/,
        loader: 'file-loader?name=src/assets/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        CORDOVA: JSON.stringify(process.env.CORDOVA || false)
      }
    })
  ]
}
