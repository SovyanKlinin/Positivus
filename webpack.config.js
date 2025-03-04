const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js',
        test: './src/js/test.js'
    },

    output: {
        filename: 'js/[name]bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    performance: {
        hints: false,
    },

    stats: {
        children: true,
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },

            {
                test: /\.(woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },

            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },

            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'templates/test.html',
            template: './src/templates/test.html',
            chunks: ['test'],
        }),

    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    mode: 'development',
};