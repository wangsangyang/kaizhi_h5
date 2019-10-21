<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>


</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f6ff;}
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
</style>

<script>
export default {
    name: 'wxauth',
    created(){
        let appid = 'wxeef2881ab2c1785c';
        let origin = window.location.origin;
        let url = origin;
        let redirect_uri = encodeURIComponent(url);
        let scope = 'snsapi_userinfo';
        let state = 123;
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}#wechat_redirect`;
    },
    methods: {
        link(){
            this.$router.push({name: 'welcome'});
        },
        init(){
            let param = {
                url: 'index/api/authorization',
            };
            this.$http(param).then(response=>{
                if(response.data.code===10000){
                }
            }).catch(error=>{
                console.log(error);
            });
        },
    }
}
</script>
