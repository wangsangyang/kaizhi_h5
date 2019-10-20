<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-problem">
        <div class="problem-title"><img class="icon" src="../assets/images/icon-arrow.png">2.你喜欢的工作方式是？</div>
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
    name: 'problem2',
    data(){
        return {
            answer1: '',//第一个问题的答案
            answers: [
                {
                    text: '乐意面对挑战和变革，并敢于下决心掌握',
                    active: false,
                    letter: 'A',
                    id: 'A'
                },
                {
                    text: '喜欢用图表、数字来解决问题，生活处事均依照计划，不喜欢被人干扰',
                    active: false,
                    letter: 'B',
                    id: 'B'
                },
                {
                    text: '积极参与活动，并能尽量将每件事都变得有趣味',
                    active: false,
                    letter: 'C',
                    id: 'C'
                },
                {
                    text: '爱用新颖有趣的方法完成工作，不喜欢事先计划或受计划牵制，崇尚无任何束缚的自由',
                    active: false,
                    letter: 'D',
                    id: 'D'
                },
            ]
        }
    },
    created(){
        this.answer1 = this.$route.query.answer1;
        console.log(this.answer1);
    },
    methods: {
        onSelectAnswer(letter, index){
            //console.log(letter);
            //console.log(index);
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
            this.$router.push({name: 'problem3', query: {answer1: this.answer1, answer2: answers.join(',') } });
        },
    }
}
</script>
