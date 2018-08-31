<template>
	<div>
		<van-nav-bar title="Vue应用" />
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in swipe" :key="index">
				<a :href="image.url"><img v-lazy="image.img" /></a>
			</van-swipe-item>
		</van-swipe>
		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link :to="{name:'newslist'}">
						<span class="mui-icon mui-icon-home"></span>
						<div class="mui-media-body">新闻资讯</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图文分享</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link :to="{name:'goods'}">
						<span class="mui-icon mui-icon-chatbubble"></span>
						<div class="mui-media-body">商品展示
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈
</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索资讯
</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'home',
	data() {
		return {
			swipe: []
		}
	},
	created() {
		this.$axios.get("http://yapi.demo.qunar.com/mock/4821/wrap").then(res => {
			// console.log(res.data.message)
			this.swipe = res.data.message
		})
	}
}

</script>
<style scoped>
.van-swipe {
	height: 60vw;
}

.van-swipe img {
	height: 100%;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
	background-color: #fff;
	border: 0;
	margin-top: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
	border: 0;
}

.van-nav-bar {
	background-color: #f5f5f5;
}









/*九宫格清除字体图标*/

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
	content: '';
}


/*九宫格背景图片*/

.mui-icon-home {
	background-image: url('../../assets/news.png');
	background-repeat: round;
}

.mui-icon-email {
	background-image: url('../../assets/picShare.png');
	background-repeat: round;
}

.mui-icon-chatbubble {
	background-image: url('../../assets/goodShow.png');
	background-repeat: round;
}

.mui-icon-location {
	background-image: url('../../assets/feedback.png');
	background-repeat: round;
}

.mui-icon-search {
	background-image: url('../../assets/search.png');
	background-repeat: round;
}

.mui-icon-phone {
	background-image: url('../../assets/callme.png');
	background-repeat: round;
}









/*九宫格图标宽高*/

.mui-icon {
	height: 50px;
	width: 50px;
}

</style>
