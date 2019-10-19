export const util = {
	getUrlParameter (key) {
			let url = window.location.href
			// console.log(url);
			let parameter = url.split('?')[1]
			// console.log(parameter);
			let regKey = new RegExp(key, 'gi')
			if (regKey.test(url)) {
				let reg = new RegExp(key + '=([^&]*)(&|$)', 'gi')
				let value = parameter.match(reg)[0].replace('&', '').split('=')[1]
				// let value = parameter.match(reg)[0]
				// console.log(value);
				return value
			} else {
				console.log('没找到关键字：' + key)
				return false
			}
	},
	trim(str){
		　return str.replace(/(^\s*)|(\s*$)/g, "");
	}
}
