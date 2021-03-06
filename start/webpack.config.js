// var webpack=require('webpack');
var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var STYLE_PATH = path.resolve(ROOT_PATH, 'style');
module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,//不跳转
        // hot: true,
        inline: true,//实时刷新
        port: 3030,
        // progress: ture,
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: [
                    'style-loader', 'css-loader', 'less-loader'
                ],
                include: STYLE_PATH
            }
        ]
    },

    //添加我们的插件 会自动生成一个html文件
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
};
