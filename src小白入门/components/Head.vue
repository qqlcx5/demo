<template>
    <header >
    <h1 @click='yiys'>{{title}}{{yiy}}</h1>
</header>
</template>
<script>
    export default {
        name:'app-head',
        props:{
            yiy:{
                type:String
            }
        },
        data(){
            return {
            title:'vue in vue.js'
            }
        },
    methods:{
        yiys(){
            // this.yiy='更新了666'
            this.$emit("changed","子组件向父组件传值")
            } 
        }
    }
</script>
<style scoped>
   header{
    background: gold;
    padding: 10px;
}

h1{
    color: #eee;
    text-align: center;
}
</style>