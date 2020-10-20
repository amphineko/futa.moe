const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),

    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

    entry: {
        index: './index.js'
    },

    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader?name=assets/[name].[contenthash:8].jpg',
                    // 'webp-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader?name=assets/[name].[contenthash:8].[ext]'
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'file-loader?name=[name].[contenthash:8].css',
                    'extract-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('cssnano')({ preset: 'default' }),
                                require('postcss-preset-env')()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}