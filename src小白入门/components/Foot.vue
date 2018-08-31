<template>
    <footer>
    <h1 @click='yiys'>{{copytype}}{{yiy}}</h1>
    </footer>
</template>
<script>
    export default {
     props:{
            yiy:{
                type:String
            }
        },
        data(){
            return {
            copytype:'vue@有限公司'
            }
        },
        methods:{
        yiys(){
             this.yiy='更新了666'
            } 
        }
    }
</script>
<style scoped>
footer{
    background: #eee;
    padding: 6px;
}
h1{
    color: #333;
    text-align: center;
    }
</style>