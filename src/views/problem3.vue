<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-problem">
        <div class="problem-title"><img class="icon" src="../assets/images/icon-arrow.png">3.对于工作的节奏，你觉得哪个和你很合拍？</div>
        <div class="problem-answer" :class="item.active?'active':''" @click="onSelectAnswer(item.letter, index)" v-for="(item, index) in answers" :key="item.letter"><i class="icon" :class="item.letter"></i>{{item.text}}</div>
    </section>

    <section class="section-btn">
        <img src="../assets/images/btn3.png" @click="linkNext">
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg6.jpg) no-repeat center bottom; background-size: 100% 100%;  }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-btn{ 
    padding: 28px 0 0;
    img{ width: 72px; margin: auto; }
}
</style>

<script>
export default {
    name: 'problem3',
    data(){
        return {
            answer1: '',//第1个问题的答案
            answer2: '',//第2个问题的答案
            answers: [
                {
                    text: '设立雄伟目标不断工作，不达目标，誓不罢休',
                    active: false,
                    letter: 'A',
                    id: 'A'
                },
                {
                    text: '感到需要大量时间独处，认为一切事情都应该有秩序',
                    active: false,
                    letter: 'B',
                    id: 'B'
                },
                {
                    text: '经常被别人求助或者主动帮忙，从而延误自己',
                    active: false,
                    letter: 'C',
                    id: 'C'
                },
                {
                    text: '需要别人的认同和赞美才能推动工作，就如同演员需要观众的掌声和笑声',
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
            this.$router.push({name: 'problem4', query: {answer1: this.answer1, answer2: this.answer2, answer3: answers.join(',') } });
        },
    }
}
</script>