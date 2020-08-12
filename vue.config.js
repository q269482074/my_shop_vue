module.exports = {
    //   publicPath : '/static/app',
    devServer: {
        proxy: {
            '/index': {
                target: 'http://www.lianxi.com',
                changeOrigin: true,
            },
            '/api2': {
                target: 'http://www.myshop.com',
                changeOrigin: true,
            },
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                //配置别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'plugin': '@/plugin'
            }
        }
    },
}