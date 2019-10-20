<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-problem">
        <div class="problem-title"><img class="icon" src="../assets/images/icon-arrow.png">5.团队合作时，你扮演什么角色？</div>
        <div class="problem-answer" :class="item.active?'active':''" @click="onSelectAnswer(item.letter, index)" v-for="(item, index) in answers" :key="item.letter"><i class="icon" :class="item.letter"></i>{{item.text}}</div>
    </section>

    <section class="section-btn" @click="linkNext">
        <div class="inner">提交GET你的超能力</div>
        <i class="wave"></i>
    </section>


    <section class="section-person">
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
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg8.jpg) no-repeat center 0; background-size: 100% 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-btn{ 
    width: 180px;
    height: 58px;
    margin: auto;
    margin-top: 30px;
    border: solid 4px #d22b3f;
    border-radius: 40px;
    padding: 6px;
    position: relative;
    margin-bottom: -32px;
    z-index: 9;
    .inner{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #d22b3f;
        color: #fff;
        border-radius: 40px;
        font-size: 15px;
        position: relative;
        z-index: 3;
    }
    .wave{
        position: absolute;
        left: 6px;
        right: 6px;
        top: 6px;
        bottom: 6px;
        border-radius: 40px;
        background-color: rgba(210, 43, 63, 0.4);
        animation: wave2 .9s ease-out infinite normal;
    }
}
@keyframes wave2{
    40%{ left: 0px; right: 0px; top: 0px; bottom: 0px; }
    41%{ left: 6px; right: 6px; top: 6px; bottom: 6px; }
}
.section-person{
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    z-index: 2;
    margin: 0 13px;
    height: 158px;
    overflow: hidden;
    .nan{
        width: 40%;
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
            top: 45px;
            right: 0px;
            animation: nan-shou .8s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }
        .gebo{  
            width: 22%;
            position: absolute;
            top: 46px;
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
            animation: nan-yan .8s linear infinite normal;
            transform-origin: 0 bottom;
        }
        .yan1{
            top: 31px;
            left: 42px;
        }
        .yan2{
            top: 29px;
            left: 59px;
        }
    }
    .nv{
        width: 30%;
        position: relative;
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
            top: 44px;
            left: 0;
            animation: nv-gebo 1.2s ease-in-out infinite normal;
            transform-origin: 0 bottom;
        }        
        .yan{
            width: 6px;
            height: 5px;
            background-color: #2c191a;
            border-radius: 50%;
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
            top: 34px;
            left: 54px;
        }
        .yan2{
            top: 34px;
            left: 66px;
        }
    }
}
@keyframes nan-yan{
    15%{ height: 1px; }
    16%{ height: 4px; }
    0%{ transform: translate(0px, 0); }
    25%{ transform: translate(1px, 0); }
    50%{ transform: translate(0px, 0); }
    75%{ transform: translate(-1px, 0); }
    100%{ transform: translate(0px, 0); }
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

@keyframes nv-yan{
    15%{ height: 1px; }
    16%{ height: 5px; }
    0%{ transform: translate(0px, 0); }
    25%{ transform: translate(1px, 0); }
    50%{ transform: translate(0px, 0); }
    75%{ transform: translate(-1px, 0); }
    100%{ transform: translate(0px, 0); }
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
    name: 'problem5',
    data(){
        return {
            answer1: '',//第1个问题的答案
            answer2: '',//第2个问题的答案
            answer3: '',//第3个问题的答案
            answer4: '',//第4个问题的答案
            answers: [
                {
                    text: '天生的带领者，自信坚决果敢。不怕冒险，无所畏惧',
                    active: false,
                    letter: 'A',
                    id: 'A'
                },
                {
                    text: '喜欢在工作前做详尽计划，宁愿按计划进行工作，而不喜欢临时变化',
                    active: false,
                    letter: 'B',
                    id: 'B'
                },
                {
                    text: '喜欢与周围的人不断的说话讲笑，觉得应避免沉默而使他人尴尬',
                    active: false,
                    letter: 'C',
                    id: 'C'
                },
                {
                    text: '经常冒出新点子和想法，往往是想干就干',
                    active: false,
                    letter: 'D',
                    id: 'D'
                },
            ]
        }
    },
    created(){
        this.answer1 = this.$route.query.answer1;
        this.answer2 = this.$route.query.answer2;
        this.answer3 = this.$route.query.answer3;
        this.answer4 = this.$route.query.answer4;
    },
    methods: {
        onSelectAnswer(letter, index){
            this.answers[index].active = !this.answers[index].active;
        },
        linkNext(){
            let answers = this.answers.filter((v, k)=>{
                if(v.active){
                    return v.active;
                }
            });
            console.log(answers);
            if(answers.length<1){
                alert('请选择');
                return;
            }

            answers = answers.map((v, k)=>{
                return v.letter;
            });
            console.log(answers);
            this.$router.push({name: 'answerResult', query: {answer1: this.answer1, answer2: this.answer2, answer3: this.answer3, answer4: this.answer4, answer5: answers.join(',') } });
        },
    }
}
</script>