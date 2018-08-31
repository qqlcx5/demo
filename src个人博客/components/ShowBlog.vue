<template>
    <div class="container">
        <h2>博客总览</h2>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <ul class="nav">
                        <router-link to='/' class="navbar-brand">写博客</router-link>
                        <router-link to='/addblog' class="navbar-brand">添加博客</router-link>
                    </ul>
                </div>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" v-model="search" placeholder="搜索" class="form-control">
                    </div>
                </form>
            </div>
        </nav>
        <div class="panel panel-default" v-for='show in filteredBlogs' :key="show.id">
            <div class="panel-heading">
                <router-link v-bind:to="'/blog/' + show.id">
                    <h5 v-rainbow>{{show.title | uppercase}}</h5>
                </router-link>
            </div>
            <div class="panel-body">
                {{ show.content | snippet }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShowBlog',
    data() {
        return {
            shows: [],
            search: ''
        }
    },
    filters: {
        uppercase(value) {
            return value.toUpperCase()
        },
        snippet(value) {
            return value.slice(0, 100) + "..."
        }
    },
    directives: {
        'rainbow': {
            bind(el) {
                el.style.color = "#" + Math.random().toString(16).slice(2, 8)
            }
        }
    },
    created() {
        this.$http.get("https://pose-123.firebaseio.com/posts.json")
            // .then(res => {
            //     console.log(res.body)
            //     return res.json()

            // })
            .then(res => {
                console.log(res.body)
                // var res =res.body
                const blogArray = [];
                for (let key in res.body) {
                    console.log(res[key])
                    res[key].id = key
                    blogArray.push(res[key])
                }
                this.shows = blogArray
                // console.log(this.shows)
            })
    },
    computed: {
        filteredBlogs() {
            return this.shows.filter((value) => {
                return value.title.match(this.search)
            })
        }
    },
}
</script>
<style lang="css" scoped>
</style>