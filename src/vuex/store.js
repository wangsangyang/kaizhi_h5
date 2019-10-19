import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
Vue.use(Vuex)

const state = {
    showNav: false,//是否显示侧边导航
    //上车地点
    locationStart: {
        lng: '',//经度
        lat: '',//纬度
        address: '',//定位地址的文字描述
        city: '',
    },
    //下车地点
    locationEnd: {
        lng: '',//经度
        lat: '',//纬度
        address: '',//定位地址的文字描述
        city: '',
    },
    //乘车人
    rider: {
        phone: '',
        username: '',//乘车人姓名
    },
}

const mutations = {
    //设置是否显示侧边导航
    setShowNav (state, value) {
        console.log(value);
        state.showNav = value;
    },
    //设置上车地点
    setLocationStart (state, value) {
		console.log(value);
        state.locationStart = value;
    },
    //设置下车地点
    setLocationEnd (state, value) {
        console.log(value);
        state.locationEnd = value;
    },
    //设置乘车人信息
    setRider (state, value) {
        console.log(value);
        state.rider = value;
    },
}

const getters = {
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})
