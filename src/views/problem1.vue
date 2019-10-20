<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-problem">
        <div class="problem-title"><img class="icon" src="../assets/images/icon-arrow.png">1.你对待朋友总是？</div>
        <div class="problem-answer" :class="item.active?'active':''" @click="onSelectAnswer(item.letter, index)" v-for="(item, index) in answers" :key="item.letter"><i class="icon" :class="item.letter"></i>{{item.text}}</div>
    </section>

    <section class="section-btn">
        <img src="../assets/images/btn3.png" @click="linkNext">
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg6.jpg) no-repeat center bottom; background-size: 100% 100%; }
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
    name: 'problem1',
    data(){
        return {
            answers: [
                {
                    text: '把一切都当作竞赛，总是有强烈的赢的欲望',
                    active: false,
                    letter: 'A',
                    id: 'A'
                },
                {
                    text: '对自已的理想、朋友和工作都绝对忠实，有时甚至无需任何理由',
                    active: false,
                    letter: 'B',
                    id: 'B'
                },
                {
                    text: '待人主动热情，充满活力，并将快乐感染他人',
                    active: false,
                    letter: 'C',
                    id: 'C'
                },
                {
                    text: '喜欢结交很多朋友，认为与人交往是有趣的事情',
                    active: false,
                    letter: 'D',
                    id: 'D'
                },
            ]
        }
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
            this.$router.push({name: 'problem2', query: {answer1: answers.join(',') } });
        },
    }
}
</script>
