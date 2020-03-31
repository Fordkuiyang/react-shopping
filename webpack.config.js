const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// version > 3.0

const devMode = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'development',
  entry: {
    main: [path.join(__dirname, 'src/scripts/', 'main')],
    // todo: [path.join(__dirname, 'todo', 'index')],
    polyfills: './src/scripts/polyfills.js',
  },
  // watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "scripts/[name].[hash].js",
    chunkFilename: 'scripts/[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true, //会在打包好的bundle.js后面加上hash串
    }),
    //清楚 dist目录
    new CleanWebpackPlugin(),
    // 添加删除入口文件，vernder的hash id 保持不变
    new webpack.HashedModuleIdsPlugin(),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'styles/[name].css' : 'styles/[name].[hash].css',
      chunkFilename: devMode ? 'styles/[id].css' : 'styles/[id].[hash].css',
    }),

    // 添加process.env.NODE_ENV变量，在js使用 process.env.NODE_ENV !== 'development' &&　执行业务逻辑
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    //dev serve 热加载
    new webpack.HotModuleReplacementPlugin(),
    //提取css到单独的文件目录

  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
        // path.resolve(__dirname, 'todo')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/preset-env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }],
          "@babel/preset-react",
        ],
        plugins: ['@babel/plugin-transform-runtime', "@babel/plugin-transform-react-constant-elements"],
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      // include: [
      //   path.resolve(__dirname, 'src')
      // ],
      // exclude: [
      //   path.resolve(__dirname, 'node_modules')
      // ],
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?import=true',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require("autoprefixer") /*这里添加了 -webkit- 浏览器兼容*/
            ]
          }
        },

        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      // include: [
      //   path.resolve(__dirname, 'src')
      // ],
      // exclude: [
      //   path.resolve(__dirname, 'node_modules')
      // ],
      use: ['file-loader?name=assets/[name].[ext]&publicPath=/',],
    },
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  optimization: {
    /**
     * optimization.runtimeChunk选项将 runtime 代码拆分为一个单独的 chunk。
     * 将其设置为 single 来为所有 chunk 创建一个 runtime bundle：
     */
    runtimeChunk: 'single',
    /**
     * SplitChunksPlugin 可以用于将模块分离到单独的bundle 中
     */
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   name: "commons",
        //   chunks: "initial"
        // },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      }
    },
    minimizer: [
      new TerserJSPlugin({ sourceMap: true }),
      new OptimizeCSSAssetsPlugin({ sourceMap: true })
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join('./dist'),
    inline: true,
    hot: true, //dev serve 热加载
    // host: '0.0.0.0',
    port: 9090,
  }
};