const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        })
    ],
    // ...
    entry: './src/index.js',
    // ...

    // ...
    output:
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // ...
    module:
    {
        rules:
        [
            {
                test: /\.css$/,
                use:
                [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    }
}
