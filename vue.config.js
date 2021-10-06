module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/2021-threefood/' :
        '/',
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
    css: {
        loaderOptions: {
            sass: {
                prependData: `
               @import "@/assets/scss/style.scss";
            `
            }
        }
    }
}