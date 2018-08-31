<template>
  <div class="tranin">
    <div>
<form @submit='formSubmit'>
  <input type="text" v-model='textTo' placeholder="输入需要翻译的内容">
  <select v-model='yuyan'>
    <option value="en" >English</option>
    <option value="ru"selected='selected'>Russian</option>
    <option value="ja">Japanese</option>
    <option value="fi">Finnish</option>
    <option value="ko">Korean</option>
  </select>
  <input class="btn btn-primary" type="submit" value="翻译">
</form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'tranin',
  data () {
    return {
      textTo:'',
      yuyan:''
    }
  },methods:{
    formSubmit(e){
      // alert(this.textTo);
      this.$emit('formSubmit',this.textTo,this.yuyan)
      e.preventDefault();

    }
  },created(){
    this.yuyan='ko'
  }
}
</script>

<style scoped>
  #transForm{
    border-radius: 10px;
    border: 1px #ccc solid;
  }
</style>
