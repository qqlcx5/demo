<template>
	<div class="container">
		<form class="form-signin">
			<h2 class="form-signin-heading">请输入内容</h2>
			<label for="inputName" class="sr-only">Name</label>
			<input type="name" id="inputName" class="form-control" v-model="user.name" placeholder="Name" required autofocus>
			<label for="inputEmail" class="sr-only">Email</label>
			<input type="email" id="inputEmail" class="form-control" v-model="user.email" placeholder="Email" required>
			<button class="btn btn-lg btn-primary btn-block" type="submit" @click='add()'>提交</button>
		</form>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'add',
	data() {
		return {
			user: {}
		}
	},
	methods: {
		add() {
			if (!this.user.name || !this.user.email) {

			} else {
				axios.post("https://wd2523487864wzbtqg.wilddogio.com/posts.json", this.user)
					.then(res => {
						this.$router.push({ path: "/" })
					})
			}
		},
	},
}

</script>
<style scoped>


</style>
