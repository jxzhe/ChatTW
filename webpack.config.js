const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['babel-polyfill', 'components/Main.js'],
        firebase: ['firebase', 'src/firebase.config.js'],
        fontawesome: [
            '@fortawesome/fontawesome',
            '@fortawesome/fontawesome-free-solid',
            '@fortawesome/fontawesome-free-regular',
            '@fortawesome/fontawesome-free-brands'
        ],
        bootstrap: [
            'jquery',
            'popper.js',
            'bootstrap/dist/css/bootstrap.min.css'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: 2
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            modules: false
                        }]

                    ],
                    plugins: ['transform-class-properties']
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src', 'components'),
            styles: path.resolve(__dirname, 'src', 'styles')
        }
    }
};