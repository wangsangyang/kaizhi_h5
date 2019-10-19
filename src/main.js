// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
import http from './assets/js/http'
import 'babel-polyfill'
import 'lib-flexible/flexible'
import 'normalize.css'
import './assets/less/reset.less'
import Cube from 'cube-ui'

Vue.config.productionTip = false

Vue.use(http)
Vue.use(Cube)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
