<template>
   <div class="container">
   		<div v-if="adds">
            <h2>请补充博客信息！！！</h2>
        </div>
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
    </div> 
</template>
<script>
    export default {
    name:'edit',   
        data(){
            return {
            id:this.$route.params.id,
            blog: {},
            authors: ['linux', 'IOS', 'Android'],
            submited: false,
            adds:false
        		}
            },
            methods:{
            submit(){
            	if( !this.blog.title || !this.blog.content){
                this.adds = true
            	}else{
            		this.$http.put("https://pose-123.firebaseio.com/posts/"+this.id+".json",this.blog).then(res => {
            			// console.log('success')
            			this.$router.push({path:'/'})
            			})
            		}
            	},
            fecth(){
            		this.$http.get("https://pose-123.firebaseio.com/posts/"+this.id+".json")
            .then(res => {
            	this.blog = res.body
            	console.log(res.body)
            		})
            	}
            },
            created(){
        	 this.fecth()
        }
    }
</script>
<style scoped>

</style>
