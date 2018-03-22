import { resolve } from 'path'
const config = {}

// ----------- entry ------------
config.entry = './src/'

config.entry = {
  main: './src/index.js',
  app: './src/app.js',
}

// ----------- output ------------
config.output = {
  filename: 'bundle.js',
  path: './dist/',
}

// 多入口
config.output = {
  filename: '[name].js',
  path: resolve(__dirname, './dist'),
}

// ----------- mode -------------
config.mode = 'development'

// plugins: [
//   new webpack.NamedModulesPlugin(),
//   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
// ]

config.mode = 'production'
// plugins: [
//   new UglifyJsPlugin(/* ... */),
//   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
//   new webpack.optimize.ModuleConcatenationPlugin(),
//   new webpack.NoEmitOnErrorsPlugin()
// ]

// ----------- module -----------
// 配置文件方式
config.module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    }
  ]
}

// Inline 内联方式，可以覆盖配置中的所有加载器
import Styles from 'style-loader!css-loader?modules!./styles.css';

// Cli 方式
// webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

// 装载机可以被连接。它们被应用于资源管道。装载机链中的第一个装载机为下一个装载机返回一个值。在结束加载程序中，webpack希望返回JavaScript。
// 装载机可以是同步的或异步的。
// 装载机在Node.js中运行，并且可以在那里做所有可能的事情。
// 加载程序接受查询参数。这可以用来将配置传递给加载器。
// 装载机也可以配置一个options对象。
// 普通模块可以在除出口装载机正常main通过package.json与loader领域。
// 插件可以给装载机更多的功能。
// 加载器可以发出额外的任意文件。

// ------------- Plugins -------------
// 一个webpack 插件是一个具有apply属性的JavaScript对象。该apply属性由webpack编译器调用，可以访问整个编译生命周期。

const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log("The webpack build process is starting!!!")
    })
  }
}

// ------------ module resolution -------------
config.resolve = {
  modules: ['node_modules'],
  extensions: ['.js', '.jsx'],
  alias: {
    
  }
}