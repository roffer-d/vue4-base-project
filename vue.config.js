module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    productionSourceMap: false,
    devServer:{
        port: 8888,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/place": "/place"
                }
            },
            '/foo': {
                target: 'http://localhost:8080'
            }
        }
    }
}