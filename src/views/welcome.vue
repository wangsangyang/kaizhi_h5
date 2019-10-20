<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-btn" @click="link">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
        <img src="../assets/images/btn2.png">
    </section>

    <section class="section-person">
        <img class="dialog dialog1" src="../assets/images/dialog-1.png">
        <img class="dialog dialog2" src="../assets/images/dialog-2.png">
        <div class="inner">
            <div class="nan">
                <img class="ren" src="../assets/images/nan1.png">
                <img class="tou" src="../assets/images/nan-tou-1.png">
                <i class="yan yan1"></i>
                <i class="yan yan2"></i>
                <img class="shou" src="../assets/images/nan-shou-1.png">
                <img class="gebo" src="../assets/images/nan-gebo-1.png">
            </div>
            <div class="nv">
                <img class="ren" src="../assets/images/nv1.png">
                <img class="tou" src="../assets/images/nv-tou-1.png">
                <i class="yan yan1"></i>
                <i class="yan yan2"></i>
                <img class="gebo" src="../assets/images/nv-gebo-1.png">
            </div>
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
    z-index: 99;
    top: 285px;
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
        width: 40px;
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
.section-person{
    position: absolute;
    bottom: 0;
    z-index: 2;
    margin: 0 13px;
    .inner{
        height: 170px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }
    .dialog{
        position: absolute;
    }
    .dialog1{
        width: 47%;
        left: 0;
        top: -54px;
        transform: scale(0);
        animation: nan-dialog .8s ease-in-out .6s forwards;
        animation-fill-mode: forwards;
    }
    .dialog2{
        width: 50%;
        right: 0;
        top: -46px;
        transform: scale(0);
        animation: nv-dialog .8s ease-in-out 1.6s forwards;
        animation-fill-mode: forwards;
    }
    .nan{
        width: 52%;
        position: relative;
        left: 10px;
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
        .yan{
            width: 5px;
            height: 4px;
            background-color: #2c191a;
            border-radius: 50%;
            position: absolute;
            animation: nan-yan 1.2s linear infinite normal;
            transform-origin: 0 bottom;
        }
        .yan1{
            top: 43px;
            left: 55px;
        }
        .yan2{
            top: 39px;
            left: 78px;
        }
    }
    .nv{
        width: 36%;
        position: relative;
        right: 28px;
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
        .yan{
            width: 6px;
            height: 6px;
            background-color: #2c191a;
            border-radius: 100%;
            position: absolute;
            animation: nv-yan 1.2s linear infinite normal;
            transform-origin: 0 bottom;
            &:after{
                content: '';
                display: block;
                position: absolute;
                top: -2px;
                left: 0;
                width: 1px;
                height: 3px;
                background-color: #2c191a;
                transform: rotate(-35deg);
            }
        }
        .yan1{
            top: 43px;
            left: 65px;
        }
        .yan2{
            top: 42px;
            left: 80px;
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
@keyframes nan-yan{
    15%{ height: 1px;  }
    16%{ height: 4px; }

    0%{ transform: translate(0, 0); }
    12.5%{ transform: translate(2px, 0); }
    25%{ transform: translate(0, 0); }
    50%{ transform: translate(-2px, 0);  }
    62.5%{ transform: translate(0, 0); }
    75%{ transform: translate(2px, 0); }
    100%{ transform: translate(0, 0); }
}
@keyframes nv-yan{
    15%{ height: 1px;  }
    16%{ height: 6px; }
}
@keyframes nan-tou{
    0%{ transform: skew(0) rotate(0); }
    25%{ transform: skew(-1deg) rotate(1deg); }
    50%{ transform: skew(0) rotate(0); }
    75%{ transform: skew(1deg) rotate(-1deg); }
    100%{ transform: skew(0) rotate(0); }
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
    100%{ transform: skew(0) rotate(0); }
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
