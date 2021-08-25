module.exports = {
    filenameHashing: false,
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://data.ntpc.gov.tw/api/',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,
                ws: true
            }
        }
    },
}