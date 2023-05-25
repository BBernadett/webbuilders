const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './app.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './index.html', to: DIST_DIR }
            ]
        }), 
        new GhPagesWebpackPlugin({
            path: './public',
            options: {
                message: 'Update Home Page',
                user: {
                    name: 'BBernadett',
                    email: 'dettus.bb@gmail.com'
                }
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    devServer: {
        static: {
            directory: DIST_DIR
        },
    },
    mode: 'development',
}
