<template>
    <div>
		<div class="jumbotron">
			 <div class="container">
		 <h1>{{blog.title}}</h1>
		  <p>{{blog.content}}</p>
		  <p>作者: {{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="category in blog.categories" :key='category'>
				{{category}}
			</li>
		</ul>
 		 </div>
		</div>

		<div class="btn-group btn-group-justified" role="group" aria-label="...">
		  <div class="btn-group" role="group">
		    <button type="button" class="btn btn-info" @click='backspace'>返回上一页</button>
		  </div>
		  <div class="btn-group" role="group">
		    <router-link class="btn btn-success" :to="'/edit/'+this.id ">编辑</router-link>
		  </div>
		  <div class="btn-group" role="group">
		    <button type="button" class="btn btn-danger" @click='del'>删除</button>
		  </div>
</div>
    </div>
</template>
<script>
    export default {
    name :'SingleBlog',   
        data(){
            return {
            	id:this.$route.params.id,
            	blog : {}
            }
        },methods:{
        	backspace(){
        		this.$router.go(-1)
        	},
        	del(){
        		this.$http.delete("https://pose-123.firebaseio.com/posts/"+this.id+".json").then(res=>{
        			this.$router.push({path:'/'})
        		})
        	}
        },
    	created() {
        this.$http.get("https://pose-123.firebaseio.com/posts/"+this.id+".json")
  				.then(res => {
                this.blog = res.body
            })
    }

    }
</script>
<style scoped>

</style>
