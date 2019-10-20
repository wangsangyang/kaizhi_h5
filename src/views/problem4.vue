<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-problem">
        <div class="problem-title"><img class="icon" src="../assets/images/icon-arrow.png">4.你会怎么表达自己的想法？</div>
        <div class="problem-answer" :class="item.active?'active':''" @click="onSelectAnswer(item.letter, index)" v-for="(item, index) in answers" :key="item.letter"><i class="icon" :class="item.letter"></i>{{item.text}}</div>
    </section>

    <section class="section-btn">
        <img src="../assets/images/btn3.png" @click="linkNext">
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg7.jpg) no-repeat center 0; background-size: 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-problem{
    padding: 20px 22px 0;
    color: #fff;
    .problem-title{
        border-radius: 15px;
        background-color: #183890;
        padding: 12px 20px;
        font-size: 14px;
        margin-bottom: 30px;
        position: relative;
        .icon{
            display: block;
            width: 23px;
            position: absolute;
            bottom: -7px; 
            left: 48px;
        }
    }
    .problem-answer{
        display: flex;
        align-items: center;
        border-radius: 12px;
        background-color: #3854a1;
        padding: 0 28px 0 40px;
        font-size: 12px;
        margin-top: 14px;
        height: 54px;
        line-height: 22px;
        position: relative;
        &.active{ background-color: #132a6a; }
        .icon{
            display: block;
            width: 22px;
            height: 21px;
            position: absolute;
            top: -10px; 
            left: 3px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100% 100%;
            &.A{ background-image: url(../assets/images/icon-A.png); }
            &.B{ background-image: url(../assets/images/icon-B.png); }
            &.C{ background-image: url(../assets/images/icon-C.png); }
            &.D{ background-image: url(../assets/images/icon-D.png); }
        }
    }
}
.section-btn{ 
    padding: 28px 0 0;
    img{ width: 72px; margin: auto; }
}
</style>

<script>
export default {
    name: 'problem4',
    data(){
        return {
            answer1: '',//第1个问题的答案
            answer2: '',//第2个问题的答案
            answer3: '',//第3个问题的答案
            answers: [
                {
                    text: '直言不讳地坦率表达自己的看法',
                    active: false,
                    letter: 'A',
                    id: 'A'
                },
                {
                    text: '谦虚且对人诚实尊重',
                    active: false,
                    letter: 'B',
                    id: 'B'
                },
                {
                    text: '善于鼓动和渲染，愿意听别人的倾诉',
                    active: false,
                    letter: 'C',
                    id: 'C'
                },
                {
                    text: '滔滔不绝，说话声和笑声总是盖过别人，喜欢表达胜于倾听',
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
            this.$router.push({name: 'problem5', query: {answer1: this.answer1, answer2: this.answer2, answer3: this.answer3, answer4: answers.join(',') } });
        },
    }
}
</script>