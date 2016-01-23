/**
 * Created by john on 2016/1/23.
 */
var path = require('path');
var webpack = require('webpack');
var node_module_dir = path.resolve(__dirname,'node_modules');

module.exports = {
    entry: {
        app: path.resolve(__dirname,'app/main.js'),
        // since react is installed as a node module , node_modules/react,
        // we can point to it directly, just like require('react')
        vendors: ['react']
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                // There is not need to run the loader through
                // vendors
                // 这里再也不需要通过任何第三方来加载
                exclude:[node_module_dir],
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
    ]
};