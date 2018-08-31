<template>
  <div id='app'>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'home'}" exact>
        <span class="mui-icon icon-shouye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'member'}">
        <span class="mui-icon icon-huiyuan1"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shopcart'}">
        <span class="mui-icon icon-gouwuche"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon icon-tubiao111"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}

</script>
<style scoped>


</style>
