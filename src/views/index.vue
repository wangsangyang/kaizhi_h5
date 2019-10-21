<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-btn" @click="link">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
        <img src="../assets/images/btn1.png">
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f6ff url(../assets/images/bg1.png) no-repeat center 60px; background-size: 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-btn{
    width: 112px;
    height: 112px;
    position: absolute;
    bottom: 147px;
    left: 50%;
    transform: translate(-50%, 0);
    .bg1{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -30px 0 0 -30px;
        border-radius: 50%;
        background-color: rgba(148, 75, 171, .6);
        box-shadow: 0 0 8px rgba(148, 75, 171);
        animation: wave2 1.8s ease-out infinite normal;
        -webkit-animation-delay: 0.8s;
    }  
    .bg2{
        width: 60px;
        height: 60px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -30px 0 0 -30px;
        border-radius: 50%; 
        background-color: rgba(244, 49, 98, .5);
        box-shadow: 0 0 8px rgba(244, 49, 98);
        animation: wave2 1.8s ease-out infinite normal;
    }
    .bg3{
        width: 60px;
        height: 60px;
        border-radius: 50%; 
        background: url(../assets/images/r1.png) no-repeat center center; 
        background-size: 100%; 
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    img{
        width: 60px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
@keyframes wave1{
    0%{ transform: scale(0.9); opacity: 1; }
    100%{ transform: scale(2); opacity: 0.1; }
}
@keyframes wave2{
    0%{ transform: scale(0.9); opacity: 1; }
    100%{ transform: scale(2); opacity: 0.1; }
}
</style>

<script>
export default {
    name: 'index',
    created(){
        this.init();
    },
    methods: {
        link(){
            this.$router.push({name: 'welcome'});
        },
        init(){
            let param = {
                url: 'http://lumina.msldigital.cn/index/api/authorization',
                data: {
                    code: this.$route.query.code
                }
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
