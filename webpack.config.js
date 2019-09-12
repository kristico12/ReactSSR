module.exports = (env, arg) => {
    return {
        entry: './client/src/index.js',
        output: {
            path: __dirname + '/client/public',
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }

            ]
        },
        // permite la recarga en caliente
        watch: true,
    }
};