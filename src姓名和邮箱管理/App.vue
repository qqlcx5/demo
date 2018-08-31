<template>
  <div id="App">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class='navbar-brand'>用户</router-link>
          <router-link to="add" class='navbar-brand'>add</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}

</script>
<style scoped>


</style>
