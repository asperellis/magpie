var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader', exclude: [/node_modules/]},
            { 
                test: /\.css$/, 
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                        ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            require("postcss-import"),
                            require("postcss-mixins"),
                            require("postcss-nested"),
                            require("postcss-cssnext")
                        ],
                        },
                    }
                ]
            },
            { test: /\.(jpg|png)$/, use: 'file-loader?name=[name].[ext]', exclude: [/node_modules/]}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}