 var path = require('path');

// module.exports = {
//     entry: [
//         'webpack/hot/dev-server',
//         'webpack-dev-server/client?http://localhost:8080',
//         path.resolve(__dirname,'app/main.js')
//     ],
//     output: {
//         path: path.resolve(__dirname,'build'),
// 	    filename: 'bundle.js'
//     },
//     module: {
//         loaders: [{
// 	       test: /\.js|jsx$/,
// 	       loader: 'babel'
// 	   }]
//     }
// };

 module.exports = {
     entry: [
         'webpack/hot/dev-server',
         'webpack-dev-server/client?http://localhost:8080',
         path.resolve(__dirname,'app/main.js')
     ],
     output: {
         path: path.resolve(__dirname,'build'),
         filename: 'bundle.js'
     },
     module: {
         loaders: [
             {
                test: /\.jsx?$/,
                loaders: ['react-hot','babel-loader'],
                include: path.join(__dirname, 'app')
                // 预处理设置已放入 .babelrc中，可以不用再config文件中声明预处理设置
                //query: {presets:['react','es2015']}
             },
             //{
             //    test: /\.css$/, //only .css file
             //    loader: 'style-loader!css-loader' //run both loaders
             //},
             // Less
             // loader is disposed from right to left
             {
                 test: /\.less$/,
                 loader: 'style-loader!css-loader!less-loader'
             },
             // 图片如果大于25kb的话会自动在它从书店 css文件中转换成 base64 字符串
             {
                 test: /\.(png|jpg)$/,
                 loader: 'url?limit=25000'
             },
             // 内联字体
             {
                 test: /\.(woff|svg)$/,
                 loader: 'url?limit=100000'
             }

         ]
     }
 };

//module.exports = config;