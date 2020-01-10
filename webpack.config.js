const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    devServer: {
        historyApiFallback: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  'css-loader',
                  'sass-loader'
                ]
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, './public/index.html' ),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin()

    ]
};