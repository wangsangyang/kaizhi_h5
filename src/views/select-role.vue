<template>
<div class="container">

    <section class="section-logo">
        <img src="../assets/images/logo.png">
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
.container{ background: #f2f7ff url(../assets/images/bg3.png) no-repeat center 0; background-size: 100%; }
.section-logo{ 
    padding: 30px 0 0;
    img{ width: 120px; margin: auto; }
}
.section-nan{
    width: 100%;
    position: absolute;
    top: 222px;
    img{ width: 100%; }
    .link{ 
        display: block;
        width: 60%;
        height: 120px;
        position: absolute;
        left: 50%;
        top: 70px;
        transform: translate(-50%, 0);
    }
}
.section-nv{
    width: 100%;
    position: absolute;
    top: 388px;
    img{ width: 100%; }
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
