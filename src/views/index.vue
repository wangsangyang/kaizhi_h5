<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-btn" @click="link">
        <div class="bg1">
            <div class="bg2">
                <img src="../assets/images/btn1.png">
            </div>
        </div>
    </section>

    <div class="animate wave">
    <div class="w1"></div>
    <div class="w2"></div>
    <div class="w3"></div>
    <div class="w4"></div>
    </div>


</div>
</template>

<style lang="less" scoped>
@-webkit-keyframes opac{
    from {
        opacity: 1;
        width:0;
        height:0;
        top:50%;
        left:50%;
    }
    to {
        opacity : 0;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }
}

.animate .w2{
    -webkit-animation-delay:1s;
}
.animate .w3{
    -webkit-animation-delay:2s;
}
.animate .w4{
    -webkit-animation-delay:3s;
}
.wave{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.wave *{
    border:1px solid #fff;
    position:absolute;
    border-radius:50%;
    -webkit-animation:opac 4s infinite;
}
</style>

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
    border-radius: 50%;
    background-color: rgba(148, 75, 171, .4);
    box-shadow: 0 0 10px rgba(148, 75, 171);
    .bg1{
        border-radius: 50%; 
        background-color: rgba(244, 49, 98, .4);
        width: 90px;
        height: 90px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }  
    .bg2{
        width: 60px;
        height: 60px;
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
        width: 68px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>

<script>
export default {
    name: 'index',
    methods: {
        link(){
            this.$router.push({name: 'welcome'});
        },
    }
}
</script>
