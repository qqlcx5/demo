<template>
	<div class="tmpl">
		<nav-bar title="缩略图"></nav-bar>
		<div v-for="(item, index) in list">
			<div class="mui-card">
				<div class="mui-card-content">
					<img class="preview-img" v-lazy="item.src" width="100%" @click="$preview.open(index, list)">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: []
		}
	},
	created() {
		this.$axios.get("http://yapi.demo.qunar.com/mock/4821/list").then(res => {
			this.list = res.data.list
		})
	}
}

</script>
<style scoped>
.tmpl {
	margin-bottom: 60px;
}

</style>
