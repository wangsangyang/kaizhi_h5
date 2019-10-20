<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-avatar">
        <div class="avatar"><img src=""></div>
        <div class="text">
            <h3>邝邝*Mia</h3>
            <span>职场超能力是 </span>
        </div>
    </section>

    <section class="section-wupin">
        <!--<img src="../assets/images/wupin1.png" style="margin-top: 8px;">-->
        <!--<img src="../assets/images/wupin2.png" style="margin: 16px 0 20px;">-->
        <!--<img src="../assets/images/wupin3.png" style="width:62%;margin: -14px 0 2px;">-->
        <img src="../assets/images/wupin4.png" style="width:54%;margin: 15px 0 2px;">
    </section>

    <section class="section-result-text">
        <h3>自信与果敢</h3>
        <div class="content"><p>你仿佛是个天生的leader，所有人都会自愿追随你，被你的魅力所折服。</p></div>
    </section>

    <section class="section-ewm">
        <div class="left">
            <span class="text">长按识别二维码<br>开启超能力测试 </span>
        </div>
        <div class="right">
            <img src="../assets/images/ewm.jpg">
            <span>长按识别二维码，开启测试</span>
        </div>
    </section>


    <section class="dialog" v-show="showDialog">
        <i class="mask"></i>
        <div class="content">
            <img class="bg1" src="../assets/images/bg10.png">
            <div class="text1">点击右上角“...”,<br>将测试结果分享给好友们，<br>一起探索职场超能力吧！</div>
            <a class="btn" @click="onCloseShare">关闭</a>
        </div>
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg9.jpg) no-repeat center 0; background-size: 100% 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-avatar{
    display: flex;
    align-items: center;
    padding: 20px 0 0 35px;
    .avatar{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: solid 0.032rem #d22b3f;
        background-color: #fff;
        overflow: hidden;
        img{ width: 100%; }
    }
    .text{
        color: #20378c;
        padding-left: 7px;
        h3{ font-size: 22px; padding-bottom: 4px; }
        span{ font-size: 12px; }
    }
}
.section-wupin{ 
    text-align: center;
    img{ display: inline-block; width: 190px; }
}
.section-result-text{
    margin: 2px 14px 0;
    background-color: #fff;
    border-radius: 4px;
    h3{ 
        width: 230px;
        height: 42px;
        line-height: 42px;
        margin: auto;
        text-align: center; 
        font-size: 17px;
        color: #fff;
        background: url(../assets/images/bg-title1.png) no-repeat center top;
        background-size: 100% 100%;
    }
    .content{
        font-size: 14px;
        color: #1f388d;
        padding: 26px 20px 26px 23px;
        line-height: 18px;
    }
}
.section-ewm{
    display: flex;
    padding: 0 33px 0 20px;
    .left{
        width: 62%;
        padding: 4px 18px 0 0;
        .btn{
            display: block;
            height: 34px;
            line-height: 34px;
            text-align: center;
            background-color: #2f3686;
            color: #fff;
            border-radius: 30px;
            margin: 14px 0 0 12px;
            font-size: 16px;
            &:nth-child(2){ 
                background-color: #d22b3f;
            }
            &:nth-child(3){ 
                background-color: #e8f0fb;
                color: #2f3686;
            }
        }
        .text{
            display: flex;
            height: 122px;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, .59);
            color: #1f388d;
            line-height: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-top: 16px;
            border-radius: 4px;
        }
    }
    .right{
        flex: 1;
        padding-top: 19px;
        img{ width: 100%; }
        span{
            display: block;
            padding-top: 8px;
            color: #2f3686;
            font-size: 9px;
            text-align: center;
        }
    }
}
.dialog{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .5);
    }
    .content{
        width: 70%;
        position: fixed;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        z-index: 2;
        background-color: #20378c;
        border-radius: 6px;
        padding: 42px 0 30px;
        .bg1{
            width: 50%;
            margin: auto;
        }
        .text1{
            text-align: center;
            color: #fff;
            line-height: 22px;
            margin-top: 22px;
        }
        .btn{
            display: block;
            width: 55%;
            height: 34px;
            line-height: 34px;
            background-color: #fff;
            color: #20378c;
            border-radius: 30px;
            margin: auto;
            margin-top: 36px;
            text-align: center;
            font-size: 15px;
            font-weight: bold;
        }
    }
}
</style>

<script>
export default {
    name: 'problem1',
    data(){
        return {
            showDialog: false
        }
    },
    methods: {
        link(){
            this.$router.push({name: 'problem2'});
        },
        onShowShare(){
            this.showDialog = true;
        },
        onCloseShare(){
            this.showDialog = false;
        }
    }
}
</script>
