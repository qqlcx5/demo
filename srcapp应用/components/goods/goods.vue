<template>
	<div class="goods">
		<nav-bar title="商品详情"></nav-bar>
		<van-swipe class="goods-swipe" :autoplay="3000">
			<van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
				<img :src="thumb">
			</van-swipe-item>
		</van-swipe>
		<van-cell-group>
			<van-cell>
				<div class="goods-title">{{ goods.title }}</div>
				<div class="goods-price">{{ formatPrice(goods.price) }}</div>
			</van-cell>
			<van-cell class="goods-express">
				<van-col span="10">运费：{{ goods.express }}</van-col>
				<van-col span="14">剩余：{{ goods.remain }}</van-col>
			</van-cell>
		</van-cell-group>
		<van-cell-group class="goods-cell-group">
			<van-cell value="进入店铺" icon="shop" is-link>
				<template slot="title">
					<span class="van-cell-text">有赞的店</span>
					<van-tag type="danger">官方</van-tag>
				</template>
			</van-cell>
			<van-cell title="线下门店" icon="location" is-link />
		</van-cell-group>
		<van-cell-group class="goods-cell-group">
			<van-cell title="查看商品详情" is-link />
		</van-cell-group>
		<van-goods-action>
			<van-goods-action-mini-btn icon="chat">
				客服
			</van-goods-action-mini-btn>
			<van-goods-action-mini-btn icon="cart">
				购物车
			</van-goods-action-mini-btn>
			<van-goods-action-big-btn>
				加入购物车
			</van-goods-action-big-btn>
			<van-goods-action-big-btn primary>
				立即购买
			</van-goods-action-big-btn>
		</van-goods-action>
	</div>
</template>
<script>
export default {
	data() {
		return {
			goods: {
				title: '美国伽力果（约680g/3个）',
				price: 2680,
				express: '免运费',
				remain: 19,
				thumb: [
					'http://p4ygml8h5.bkt.clouddn.com/Olom.jpg',
					'http://p4ygml8h5.bkt.clouddn.com/vuePulau.jpg'
				]
			}
		};
	},
	methods: {
		formatPrice() {
			return '¥' + (this.goods.price / 100).toFixed(2);
		}
	}
};

</script>
<style lang="less">
.goods {
	padding-bottom: 100px;
	&-swipe {
		img {
			width: 100%;
			display: block;
		}
	}
	&-title {
		font-size: 16px;
	}
	&-price {
		color: #f44;
	}
	&-express {
		color: #999;
		font-size: 12px;
		padding: 5px 15px;
	}
	&-cell-group {
		margin: 15px 0;
		.van-cell__value {
			color: #999;
		}
	}
}

</style>
