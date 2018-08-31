<template>
  <div class="container">
    <h3 v-show='success'>删除成功</h3>
    <div class="panel panel-default col-md-4" v-for='user in users'>
      <div class="panel-heading ">{{user.name}}
        <button type="button" class="btn btn-default btn-right" @click=del(user.id)>删除</button>
      </div>
      <div class="panel-body">
        {{user.email}}
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  name: 'users',
  data() {
    return {
      users: {}
    }
  },
  methods: {
    del(id) {
      Axios.delete("https://wd2523487864wzbtqg.wilddogio.com/posts/" + id + ".json").then(res => {
        this.success = true
        this.fetch()
      })
    },
    fetch() {
      this.$http.get("https://wd2523487864wzbtqg.wilddogio.com/posts.json").then(res => {
          console.log(res)
          return res.json()
        })
        .then(res => {
          const usersArray = []
          for (let key in res) {
            // console.log(res[key])
            res[key].id = key
            usersArray.push(res[key])
          }
          this.users = usersArray
        })
    }
  },
  created() {
    this.fetch()
  }
}

</script>
<style scoped>
.contacted {
  text-decoration: line-through;
}

.panel-heading button {
  margin-left: 200px;
}

</style>
