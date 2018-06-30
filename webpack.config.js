const path = require( 'path' );

const config = {
    entry: [
        'babel-polyfill',
        './app/index.js'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve( __dirname, 'build' )
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [ 'react', 'stage-0', [ 'es2015', 'es2016' ] ],
                    plugins: [
                        'babel-plugin-transform-class-properties'
                    ]
                },
                include: [
                    path.resolve( __dirname, 'app/' )
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: false,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
};

module.exports = function( env ) {
    const production = 'prod' === env;
    if ( production ) {
        config.devtool = 'source-map';
    }
    else {
        config.devtool = 'cheap-module-eval-source-map';
    }

    return config;
};
