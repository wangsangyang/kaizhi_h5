'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://lumina.msldigital.cn/"', //测试地址
  appId: '"wx77d75be37ca9afb4"' //上传图片测试地址
})
