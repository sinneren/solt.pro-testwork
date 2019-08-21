const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const BUILD_NAME = 'build';

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, BUILD_NAME),
        compress: true,
        port: 3000
    },
    entry: { 
        index: './src/scss/main.scss' 
    },
    output: {
        path: path.resolve(__dirname, BUILD_NAME),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ 
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: false,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}