const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `[name].[contenthash]-${Date.now()}.js`,
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            port: 3000,
            compress: true,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    include: path.resolve(__dirname, 'src'),
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.(ts|tsx|js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(txt|png|woff|woff2|eot|ttf|svg|jpe?g)$/, // to import images and fonts
                    loader: "url-loader",
                    options: { limit: false },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
              template: "public/index.html", // to import index.html file inside index.js
              templateParameters: {
                  PUBLIC_URL: '.',
              },
            }),
            new CopyPlugin({
                patterns: [
                    { from: "public/robots.txt", to: "robots.txt" },
                ],
            }),

        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    default: {
                        minChunks: 20,
                        reuseExistingChunk: true,
                        maxSize: 1
                    }
                },
            },
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx']
        },
    }
}
