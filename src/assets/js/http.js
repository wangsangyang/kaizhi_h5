import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import router from '../../router/index'

import { Toast, Dialog } from 'cube-ui'
Vue.use(Toast)
Vue.use(Dialog)

// let url = process.env.API_URL;
//console.log(process.env.API_URL)

axios.defaults.baseURL = process.env.API_URL
axios.defaults.crossDomain = true;
//axios.defaults.withCredentials = true;//跨域cookie


let myloading;
let loading_params;
 
// response请求拦截   
axios.interceptors.request.use(config => {
		//console.log(config);
		//console.log(loading_params);
		if(loading_params.start){
				myloading = Toast.$create({
				    txt: loading_params.text,
				    mask: true
				}).show();
		}
		
		return config
}, error => {
		// 请求失败的处理
		console.log(error);
	  throw error
})


// response响应拦截
axios.interceptors.response.use(response => {
		if(!loading_params.end&&myloading){
				myloading.hide();
		}
    console.log(response);
    return response
}, error => {
		if(myloading){
				myloading.hide();
		}
		console.log(error);
		console.log(error.response);

		//console.log(JSON.stringify(error));
	  if(!error.response){
				Toast.$create({
		        type: 'error',
            txt: '未知错误',
            time: 5000,
				}).show();
	  		return error;
	  }
    if (error.response) {
	    	// 返回 401 ，说明未登录，则跳转到登录页面
	    	if (error.response.status == 400||error.response.status == 401) {
						Dialog.$create({
			        title: ''+error.response.status,
			        content: error.response.data.error_description,
			        icon: 'cubeic-close'
			      }).show()
    				return error.response
	    	}
    }
    return error.response
})


export default {
		install (Vue, options) {
				Vue.prototype.$http = function (params) {
						let { headers = {}, url = '', method = 'post', data = {}, loading = {} } = params
						//console.log(loading);
						loading_params = {...{start: true, end: false, text: 'loading...', mask: true}, ...loading};
						//console.log(headers);
						if (method == 'get') {
								return new Promise((resolve, reject) => {
										axios.get(url, {params: data}, {headers}).then(response => {
											resolve(response)
										}).catch(error => {
											reject(error)
											console.log(error)
											// throw new Error(error);
										})
								})
						} else {
								return new Promise((resolve, reject) => {
										// let data = qs.stringify(data);
										axios.post(url, data, {headers}).then(response => {
											resolve(response)
										}).catch(error => {
											reject(error)
											console.log(error)
											// throw new Error(error);
										})
								})
						}
				}
		}

}
