<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <article class="article-content">
        <h3 class="title"><img src="../assets/images/bg-title3.png"></h3>
        <div class="content">
            <p>即使拥有非凡的职业成就，你仍旧保持开放、好奇的心态，当你仰望最高峰，一段MBA之旅会为你披荆斩棘，助你勇往直前。</p>
            <p>法国凯致商学院与上海交通大学合作的<b>国际在职MBA(Global-MBA)项目</b>旨在培养国际化的精英领袖；<b>欧亚工商管理博士(EA-DBA)项目</b>更是聚集三校教授，为全球企业领导者提供一个优秀和创意澎湃的学术氛围，以及一对一的悉心指导，是通往精英圈层的捷径。</p>
        </div>

        <section class="section-ewm">
            <div class="left">
                <a class="btn" @click="linkBack">问问小凯</a>
                <a class="btn" @click="linkShare">了解更多</a>
            </div>
            <div class="right">
                <img src="../assets/images/ewm.jpg">
                <span>长按识别二维码，开启测试</span>
            </div>
        </section>
    </article>

    <section class="section-person">
        <div class="nan">
            <img class="ren" src="../assets/images/nan1.png">
            <img class="tou" src="../assets/images/nan-tou-1.png">
            <img class="shou" src="../assets/images/nan-shou-1.png">
            <img class="gebo" src="../assets/images/nan-gebo-1.png">
        </div>
        <div class="nv">
            <img class="ren" src="../assets/images/nv1.png">
            <img class="tou" src="../assets/images/nv-tou-1.png">
            <img class="gebo" src="../assets/images/nv-gebo-1.png">
        </div>
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg11.jpg) no-repeat center 0; background-size: 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.article-content{
    background-color: #fff; 
    margin: 0 13px;
    padding: 0 30px 36px;
    border-radius: 6px;
    position: relative;
    top: 40px;
    .title{ 
        margin-bottom: -20px;
        img{
            width: 100%;
            position: relative;
            top: -30px;
        }
    }
    .content{
        font-size: 12px;
        color: #1f388d;
        line-height: 20px;
        p{ padding: 9px 0; }
        b{ font-weight: bold; }
    }
    .section-ewm{
        display: flex;
        margin-top: 12px;
        .left{
            width: 58%;
            padding-right: 24px;
            .btn{
                display: block;
                height: 34px;
                line-height: 34px;
                text-align: center;
                background-color: #2f3686;
                color: #fff;
                border-radius: 30px;
                margin-top: 14px;
                font-size: 16px;
                &:nth-child(2){ 
                    background-color: #d22b3f;
                }
                &:nth-child(3){ 
                    background-color: #e8f0fb;
                    color: #2f3686;
                }
            }
        }
        .right{
            flex: 1;
            margin-top: -6px;
            img{ 
                width: 100%;
                border: solid 3px #d1d7e9;
                border-radius: 2px;
            }
            span{
                display: block;
                padding-top: 8px;
                color: #2f3686;
                font-size: 9px;
                text-align: center;
            }
        }
    }
}
.section-person{
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    z-index: 2;
    margin: 0 13px;
    height: 146px;
    overflow: hidden;
    .nan{
        width: 43%;
        position: relative;
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
            top: 52px;
            right: 0px;
            animation: nan-shou .8s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
        .gebo{  
            width: 22%;
            position: absolute;
            top: 54px;
            right: 0px;
            animation: nan-gebo .8s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
    }
    .nv{
        width: 29.2%;
        padding: 10px 0 0;
        position: relative;
        .ren{ width: 100%; }
        .tou{  
            width: 55%;
            position: absolute;
            top: 12px;
            left: 36%;
            animation: nv-tou 1.2s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
        .gebo{  
            width: 26%;
            position: absolute;
            top: 55px;
            left: 1px;
            animation: nv-gebo 1.4s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
    }
}
@keyframes nan-tou{
    0%{ transform: skew(0)  rotate(0); }
    25%{ transform: skew(-1deg) rotate(1deg); }
    50%{ transform: skew(0) rotate(0); }
    75%{ transform: skew(1deg) rotate(-1deg); }
    100%{ transform: skew(0)  rotate(0); }
}
@keyframes nan-shou{
    0%{ transform: translate(0, 0) skew(0) rotate(0); }
    25%{ transform: translate(2px, 0) skew(-4deg) rotate(3deg); }
    50%{ transform: translate(0, 0) skew(0) rotate(0); }
    75%{ transform: translate(-1px, 0) skew(4deg) rotate(-2deg); }
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
    0%{ transform: skew(0)  rotate(0); }
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
    name: 'recommend1',
    data(){
        return {
            showDialog: false
        }
    },
    methods: {
        linkBack(){
            this.$router.push({name: 'selectRole'});
        },
        linkShare(){
            this.$router.push({name: 'share'});
        },
    }
}
</script>
