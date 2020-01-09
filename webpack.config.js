const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // rules: [
        //     {
        //         test: /\.js$/,
        //         use: 'babel-loader',
        //     },
        //     {
        //         test: /\.css$/,
        //         use: ['style-loader', 'css-loader'],
        //     },
        //     {
        //         test: /\.(png|j?g|svg|gif)?$/,
        //         use: 'file-loader'
        //     }
        // ]

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
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, './public/index.html' ),
            filename: 'index.html'
        })
    ]
};