<template>
	<view class="content">
		<van-button>你好</van-button>
	</view>
</template>

<script setup lang="ts">
	import http from '../../api/api.ts'

	http.get('test_data_store_index_data.json', {}, false).then(res => {
		console.log(res)
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>