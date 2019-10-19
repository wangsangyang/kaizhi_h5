<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-btn" @click="link">
        <div class="bg1">
            <div class="bg2">
                <img src="../assets/images/btn2.png">
            </div>
        </div>
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg2.png) no-repeat center 12px; background-size: 100%; }
.section-logo{ 
    padding: 32px 0 0;
    img{ width: 130px; margin: auto; }
}
.section-btn{
    width: 88px;
    height: 88px;
    position: absolute;
    top: 285px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    background-color: rgba(148, 75, 171, .4);
    box-shadow: 0 0 10px rgba(148, 75, 171);
    .bg1{
        border-radius: 50%; 
        background-color: rgba(244, 49, 98, .4);
        width: 70px;
        height: 70px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }  
    .bg2{
        width: 46px;
        height: 46px;
        border-radius: 50%; 
        background-color: rgba(210, 43, 62);
        box-shadow: 0 0 8px rgba(210, 43, 62, .6);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .bg3{
    }
    img{
        width: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>

<script>
export default {
    name: 'welcome',
    methods: {
        link(){
            this.$router.push({name: 'selectRole'});
        },
    }
}
</script>
