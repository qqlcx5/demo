<template>
  <div class="users">
 <form @submit=addUser>
  <input type="text" v-model='newUser.name' placeholder="Enter name">
  <input type="text" v-model='newUser.email' placeholder="Enter email">
  <input type="submit" value="Submit">
  <!-- <button  v-on:click.prevent="post">提交</button> -->
 </form>

 <ul>
   <li v-for='user in users'>
   <input type="checkbox" v-model='user.contacted'>
   <span :class='{contacted:user.contacted}'>
     {{user.name}}--{{user.email}}
     <button @click='delUser(user)'>X</button>
   </span>
  
    </li>
 </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'users',
  data () {
    return {
       newUser:{},
      users:[
        {
          name:'hemiah wu',
          email:'hemiah@gmail.com',
          contacted:false
        },
        {
          name:'hevvah wu',
          email:'hemiah@gmail.com',
          contacted:false
        },
        {
          name:'hezzah wu',
          email:'hemiah@gmail.com',
          contacted:false
        }
      ]
    }
  },
  methods:{
    addUser(e){
      // console.log("hello");
      this.users.push({
        name:this.newUser.name,
        email:this.newUser.email,
        contacted:false
      })
      e.preventDefault()
    },
      delUser(user){
      this.users.splice(this.users.indexOf(user),1);
    },
      // post(){
      // Axios.post("https://wd5813085728rxwwca.wilddogio.com/posts.json",this.newUser)
      //     .then(res=>{
      //       console.log(res)
      //     })
      // },
  }, created(){
    Axios.get("http://jsonplaceholder.typicode.com/comments").then(res=>{
    console.log(res.data)
    this.users=res.data;
    })
   // Axios.get("https://wd5813085728rxwwca.wilddogio.com/posts.json").then(res=>{
   //    console.log(res.data)
   //    this.users=res.data
   //  })
  }
}
</script>

<style scoped>
.contacted{
  text-decoration: line-through;
}
</style>
