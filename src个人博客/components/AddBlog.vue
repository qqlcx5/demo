<template>
    <div class="container">
        <h2>添加博客</h2>
        <div v-if="adds">
            <h2>请补充博客信息！！！</h2>
        </div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <router-link to='/' class="navbar-brand">写博客</router-link>
              <router-link to='/addblog' class="navbar-brand">添加博客</router-link>
            </div>
          </div>
        </nav>

        <form v-if=!submited>
            <div class="form-group">
                <label for="InputTitle">博客标题：</label>
                <input type="email" class="form-control" id="InputTitle" placeholder="Title" v-model='blog.title'>
            </div>
            <div class="form-group">
                <label for="InputTextarea">博客内容：</label>
                <textarea class="form-control" rows="3" id="InputTextarea" v-model='blog.content'></textarea>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="Node.js" v-model='blog.categories'>Node.js</label>
                <label>
                    <input type="checkbox" value="React.js" v-model='blog.categories'>React.js</label>
                <label>
                    <input type="checkbox" value="Vue.js" v-model='blog.categories'>Vue.js</label>
                <label>
                    <input type="checkbox" value="Hexo.js" v-model='blog.categories'>Hexo.js</label>
            </div>
            <select class="form-control" v-model="blog.author">
                <option v-for="author in authors" :key="author.id">{{author}}</option>
            </select>
            <br>
            <button class="btn btn-default" @click.prevent='submit'>Submit</button>
        </form>
        <div v-if="submited">
            <h3>博客添加成功！！！</h3>
        </div>
        <div class="preview">
            <h3>博客预览</h3>
            <p>博客标题：{{blog.title}}</p>
            <p>博客内容：</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="category in blog.categories" :key='category.id'>{{category}}</li>
            </ul>
            <p>作者：{{blog.author}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddBlog',
    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['linux', 'IOS', 'Android'],
            submited: false,
            adds:false
        }
    },
    methods: {
        submit() {
            if( !this.blog.title || !this.blog.content){
                this.adds = true
            }else{
                this.$http.post('https://pose-123.firebaseio.com/posts.json',this.blog).then(res => {
                console.log(res)
                this.submited = true
                })
            }
            
        }
    }
}
</script>
<style lang="css" scoped>
</style>
