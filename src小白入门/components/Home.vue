<template>
  <div id="app">
    <app-head :yiy ='yiy' @changed='updata($event)'></app-head>
    <users :users ='users'></users>
    <app-foot :yiy ='yiy'></app-foot>
  </div>
</template>

<script>
import Users from './Users'
import Head from './Head'
import Foot from './Foot'

export default {
  // name: 'App',
  data(){
    return{
     users:[],
    yiy:'我是app的yiy'
    }
  },
  methods:{
    updata(e){
      this.yiy= e
    }
  },
components: {
    Users,
    'app-head':Head,
    'app-foot':Foot,
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
    // console.log(data);
    this.users=data.body;
    })
  }
}
</script>

<style>

</style>
