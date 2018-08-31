<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar>
        <div v-for="news in newsList">
            <div class="mui-card">
                <div class="mui-card-header mui-card-media">
                    <img v-lazy="news.img_url" />
                    <div class="mui-media-body">
                        <p v-rainbow>{{news.title}}</p>
                        <p v-rainbow>发表于 {{news.add_time | converDate}}</p>
                    </div>
                </div>
                <div class="mui-card-content">
                    <router-link :to="{name:'newsDetail',query:{id:news.id}}" class="mui-card-link">
                        <img v-lazy="news.img_url" alt="" width="100%" />
                    </router-link>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsList: [], //新闻列表数据
        }
    },
    directives: {
        'rainbow': {
            bind(el) {
                el.style.color = "#" + Math.random().toString(16).slice(2, 8)
            }
        }
    },
    methods: {},
    created() {
        //发起请求
        this.$axios.get('http://yapi.demo.qunar.com/mock/4821/news')
            .then(res => {
                // console.log(res.data.data)
                this.newsList = res.data.data
                // const news = res.data
                // const newsArray = []
                // for (let key in news) {
                //     news[key].i = key
                //     newsArray.push(news[key])
                // }
                // this.newsList = newsArray
            })
            .catch(err => {
                console.log(err);
            })
    }
}

</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}

.tmpl {
    margin-bottom: 60px;
}

</style>
