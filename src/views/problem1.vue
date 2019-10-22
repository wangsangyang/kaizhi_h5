<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>

    <section class="section-problem">
        <div class="problem-title"><img class="icon" src="../assets/images/icon-arrow.png">{{init_title}}</div>
        <div class="problem-answer" :class="item.active?'active':''" @click="onSelectAnswer(item.letter, index)" v-for="(item, index) in init_answers" :key="item.letter"><i class="icon" :class="item.letter"></i>{{item.text}}</div>
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
            index: 0,
            init_title: '',
            init_answers: '', 
            titles: ['1.你对待朋友总是？', '2.你喜欢的工作方式是？', '3.对于工作的节奏，你觉得哪个和你很合拍？', '4.你会怎么表达自己的想法？', '5.团队合作时，你扮演什么角色？'],
            answers: [
                {
                    list: [{
                            text: '把一切都当作竞赛，总是有强烈的赢的欲望',
                            active: false,
                            letter: 'A',
                            id: 'A'
                        },{
                            text: '对自已的理想、朋友和工作都绝对忠实，有时甚至无需任何理由',
                            active: false,
                            letter: 'B',
                            id: 'B'
                        },{
                            text: '待人主动热情，充满活力，并将快乐感染他人',
                            active: false,
                            letter: 'C',
                            id: 'C'
                        },{
                            text: '喜欢结交很多朋友，认为与人交往是有趣的事情',
                            active: false,
                            letter: 'D',
                            id: 'D'}
                    ]
                },

                {
                    list: [{
                            text: '乐意面对挑战和变革，并敢于下决心掌握',
                            active: false,
                            letter: 'A',
                            id: 'A'
                        },{
                            text: '喜欢用图表、数字来解决问题，生活处事均依照计划，不喜欢被人干扰',
                            active: false,
                            letter: 'B',
                            id: 'B'
                        },{
                            text: '积极参与活动，并能尽量将每件事都变得有趣味',
                            active: false,
                            letter: 'C',
                            id: 'C'
                        },{
                            text: '爱用新颖有趣的方法完成工作，不喜欢事先计划或受计划牵制，崇尚无任何束缚的自由',
                            active: false,
                            letter: 'D',
                            id: 'D'
                        }
                    ]
                },

                {
                    list: [{
                            text: '设立雄伟目标不断工作，不达目标，誓不罢休',
                            active: false,
                            letter: 'A',
                            id: 'A'
                        },{
                            text: '感到需要大量时间独处，认为一切事情都应该有秩序',
                            active: false,
                            letter: 'B',
                            id: 'B'
                        },{
                            text: '经常被别人求助或者主动帮忙，从而延误自己',
                            active: false,
                            letter: 'C',
                            id: 'C'
                        },{
                            text: '需要别人的认同和赞美才能推动工作，就如同演员需要观众的掌声和笑声',
                            active: false,
                            letter: 'D',
                            id: 'D'
                        }
                    ]
                },

                {
                    list: [{
                            text: '直言不讳地坦率表达自己的看法',
                            active: false,
                            letter: 'A',
                            id: 'A'
                        },{
                            text: '谦虚且对人诚实尊重',
                            active: false,
                            letter: 'B',
                            id: 'B'
                        },{
                            text: '善于鼓动和渲染，愿意听别人的倾诉',
                            active: false,
                            letter: 'C',
                            id: 'C'
                        }, {
                            text: '滔滔不绝，说话声和笑声总是盖过别人，喜欢表达胜于倾听',
                            active: false,
                            letter: 'D',
                            id: 'D'
                        }
                    ]
                },

                {
                    list: [{
                            text: '天生的带领者，自信坚决果敢。不怕冒险，无所畏惧',
                            active: false,
                            letter: 'A',
                            id: 'A'
                        },{
                            text: '喜欢在工作前做详尽计划，宁愿按计划进行工作，而不喜欢临时变化',
                            active: false,
                            letter: 'B',
                            id: 'B'
                        },{
                            text: '喜欢与周围的人不断的说话讲笑，觉得应避免沉默而使他人尴尬',
                            active: false,
                            letter: 'C',
                            id: 'C'
                        },{
                            text: '经常冒出新点子和想法，往往是想干就干',
                            active: false,
                            letter: 'D',
                            id: 'D'
                        }
                    ]
                },
            ],

            last_answers: []
        }
    },
    created(){
        this.init_title = this.titles[0];
        this.init_answers = this.answers[0].list;
    },
    methods: {
        onSelectAnswer(letter, index){
            this.init_answers[index].active = !this.init_answers[index].active;
        },
        linkNext(){
            this.index = this.index + 1;
            let answers = this.init_answers.filter((v, k)=>{
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
            //console.log(answers);
   
            if(this.index<5){
                this.last_answers.push(answers);
                console.log(this.last_answers);
                this.init_title = this.titles[this.index];
                this.init_answers = this.answers[this.index].list;
            }else{
                alert('结束了');
               //this.$router.push({name: 'problem2', params: {answer1: answers.join(',') } }); 
            }
        },
    }
}
</script>
