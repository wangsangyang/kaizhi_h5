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
.container{ background: #f2f7ff url(../assets/images/bg7.jpg) no-repeat center bottom; background-size: 100% 100%; }
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