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

    <section class="section-person">
        <div class="nan">
            <img class="dialog" src="../assets/images/dialog-1.png">
            <img class="ren" src="../assets/images/nan1.png">
            <img class="tou" src="../assets/images/nan-tou-1.png">
            <img class="shou" src="../assets/images/nan-shou-1.png">
            <img class="gebo" src="../assets/images/nan-gebo-1.png">
        </div>
        <div class="nv">
            <img class="dialog" src="../assets/images/dialog-2.png">
            <img class="ren" src="../assets/images/nv1.png">
            <img class="tou" src="../assets/images/nv-tou-1.png">
            <img class="gebo" src="../assets/images/nv-gebo-1.png">
        </div>
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg2.png) no-repeat center 12px; background-size: 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
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
    img{
        width: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
.section-person{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    z-index: 2;
    margin: 0 13px;
    .dialog{
        position: absolute;
    }
    .nan{
        width: 52%;
        position: relative;
        left: 10px;
        .dialog{
            width: 94%;
            left: -14px;
            top: -54px;
            transform: scale(0);
            animation: nan-dialog .8s ease-in-out .6s forwards;
            animation-fill-mode: forwards;
        }
        .ren{ 
            width: 100%; 
            position: relative;
            z-index: 2;
         }
        .tou{  
            width: 30%;
            position: absolute;
            top: 0;
            left: 21%;
            animation: nan-tou .8s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
        .shou{  
            width: 20%;
            position: absolute;
            top: 60px;
            right: -1px;
            animation: nan-shou .8s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
        .gebo{  
            width: 22%;
            position: absolute;
            top: 60px;
            right: 0px;
            animation: nan-gebo .8s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
    }
    .nv{
        width: 36%;
        position: relative;
        right: 28px;
        .dialog{
            width: 140%;
            left: -20px;
            top: -50px;
            transform: scale(0);
            animation: nv-dialog .8s ease-in-out 1.6s forwards;
            animation-fill-mode: forwards;
        }
        .ren{ width: 100%; }
        .tou{  
            width: 55%;
            position: absolute;
            top: 2px;
            left: 37%;
            animation: nv-tou 1.2s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
        .gebo{  
            width: 26%;
            position: absolute;
            top: 58px;
            left: 0;
            animation: nv-gebo 1s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
    }
}
@keyframes nan-dialog{
    70%{ transform: scale(1.2); }
    100%{ transform: scale(1); }
}
@keyframes nv-dialog{
    70%{ transform: scale(1.2); }
    100%{ transform: scale(1); }
}
@keyframes nan-tou{
    0%{ transform: skew(0) rotate(0); }
    25%{ transform: skew(-1deg) rotate(1deg); }
    50%{ transform: skew(0) rotate(0); }
    75%{ transform: skew(1deg) rotate(-1deg); }
    100%{ transform: skew(0)  rotate(0); }
}
@keyframes nan-shou{
    0%{ transform: translate(0, 0) skew(0) rotate(0); }
    25%{ transform: translate(1px, 0) skew(-7deg) rotate(4deg); }
    50%{ transform: translate(0, 0) skew(0) rotate(0); }
    75%{ transform: translate(-1px, 0) skew(7deg) rotate(-4deg); }
    100%{ transform: translate(0, 0) skew(0) rotate(0); }
}
@keyframes nan-gebo{
    0%{ transform: skew(0); }
    25%{ transform: skew(-1.5deg); }
    50%{ transform: skew(0); }
    75%{ transform: skew(1.5deg); }
    100%{ transform: skew(0); }
}

@keyframes nv-tou{
    0%{ transform: skew(0) rotate(0); }
    25%{ transform: skew(-1deg) rotate(1deg); }
    50%{ transform: skew(0) rotate(0); }
    75%{ transform: skew(1deg) rotate(-1deg); }
    100%{ transform: skew(0)  rotate(0); }
}
@keyframes nv-gebo{
    0%{ transform: skew(0) translate(0, 0); }
    25%{ transform: skew(-6deg) rotate(2deg) translate(0, -1px); }
    50%{ transform: skew(0) translate(0, 0); }
    75%{ transform: skew(6deg) rotate(-2deg) translate(0, 1px); }
    100%{ transform: skew(0) translate(0, 0); }
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
