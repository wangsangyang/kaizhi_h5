'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://testing-driver-app-api.dev.muztg.com/"', //测试地址
  UPLOAD_URL: '"https://testing-storage-api.dev.muztg.com/"' //上传图片测试地址
  //UPLOAD_URL: '"https://guoxiaod-storage-api.dev.muztg.com/"' //上传图片测试地址
})
