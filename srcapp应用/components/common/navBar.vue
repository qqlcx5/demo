<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['title'], //声明接收父组件参数
    methods: {
        onClickLeft() {
            this.$router.go(-1); //根据浏览器记录返回上一次
        }
    }

}

</script>
<style scoped>
.mui-bar.mui-bar-nav {
    position: relative;
}

.van-nav-bar {
    background-color: #f8f8f8;
}

</style>
