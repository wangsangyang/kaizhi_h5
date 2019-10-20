<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
    </section>
    <section class="section-title">
        <img src="../assets/images/bg3-title.png">
    </section>

    <section class="section-nan">
        <img src="../assets/images/bg4.png">
        <a class="link" @click="link"></a>
    </section>
    <section class="section-nv">
        <img src="../assets/images/bg5.png">
        <a class="link" @click="link"></a>
    </section>

</div>
</template>

<style lang="less" scoped>
.container{ background: #f2f7ff url(../assets/images/bg3.jpg) no-repeat center 0; background-size: 100% auto; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-title{ 
    padding: 20px 0 0;
    img{ width: 62%; margin: auto; }
}
.section-nan{
    width: 100%;
    position: relative;
    margin-top: -40px;
    img{ width: 85%; }
    .link{ 
        display: block;
        width: 70%;
        height: 90px;
        position: absolute;
        left: 45%;
        top: 55px;
        transform: translate(-50%, 0);
    }
}
.section-nv{
    width: 100%;
    position: relative;
    margin-top: -130px;
    text-align: right;
    img{ width: 85%; display: inline-block; }
    .link{ 
        display: block;
        width: 60%;
        height: 120px;
        position: absolute;
        left: 50%;
        top: 135px;
        transform: translate(-50%, 0);
    }
}
</style>

<script>
export default {
    name: 'selectRole',
    methods: {
        link(){
            this.$router.push({name: 'problem1'});
        },
    }
}
</script>
