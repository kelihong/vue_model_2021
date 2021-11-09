const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@api': resolve('src/api/models'),
                '@utils': resolve('src/utils'),
                '@style': resolve('src/assets/less')
            }
        }
    }
}