<template>
    <div>
        <nav-bar title="新闻详情"></nav-bar>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{newsDetail.title}}</h3>
            </div>
            <div class="panel-body">
                <p>发表时间：{{newsDetail.add_time | converDate}} </p>
                <p>点击数：{{newsDetail.click}}</p>
            </div>
        </div>
        <div class="news-content">
            <p>{{newsDetail.zhaiyao}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsDetail: {}, //就是为了象征性的表示其数据类型
            id: this.$route.query.id
        }
    },
    created() {
        //1:获取路由参数
        //2:拼接路由参数成为后台请求的URL
        this.$axios.get('http://yapi.demo.qunar.com/mock/4821/news')
            .then(res => {
                //3:响应回来渲染页面
                this.newsDetail = res.data.data[this.id - 1];
                //数组，就一个数据，所以直接取[0]
            })
            .catch(err => {
                console.log(err);
            })
    }
}

</script>
<style scoped>
/*主体文章的左右距离*/

.news-content {
    padding: 15px 15px;
}

.panel.panel-default {
    margin: 20px 0 10px 0;
}

</style>
