module.exports = {
      mode: "production"
    , entry: './src/index.ts'
    , output: {
        filename: './app.bundle.js'
    }
    , resolve:{
        extensions:['.ts','.js']
    }
    , module: {
        rules: [{
            test: /\.ts$/, loader:'ts-loader'
        }]
    }
};