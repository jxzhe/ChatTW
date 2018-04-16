const path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['babel-polyfill', 'components/Main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
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
            components: path.resolve(__dirname, 'src', 'components'),
            styles: path.resolve(__dirname, 'src', 'styles')
        }
    }
};