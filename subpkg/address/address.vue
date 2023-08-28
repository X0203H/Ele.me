<template>
	<view class="address">
		<!-- 地址 -->
		<view class="card" v-for="(item,index) in addressData" :key="index">
			<view class="title">
				<text class="name">
					{{item.name}}
				</text>
				<text class="sex">
					{{item.gender===0?'男':'女'}}
				</text>
				<text class="phone">
					{{item.phone}}
				</text>
			</view>
			<view class="content">
				<van-tag type="primary" plain>{{item.tag}}</van-tag>
				<view class="addressInfo">
					{{item.address}}
				</view>
				<view class="edit">
					<van-icon name="records" @click="edit(index)" style="margin: 0 20rpx;" />
					<van-icon name="cross" @click="delModel(index)" />
				</view>
			</view>
		</view>
		<van-dialog id="van-dialog" />
		<!-- <van-notify id="van-notify" /> -->
		<view class="footer" @click="toAdd(1)">
			<van-icon name="plus" />
			新增地址
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import http from '../../api/api.ts'
	import Dialog from '/wxcomponents/weapp/dist/dialog/dialog';
	import store from '../../store/index.ts'
	const addressData = ref([])

	const getaddressData = () => {
		http.get("/address_data.json", {}, false).then(res => {
			console.log(res)
			addressData.value = res.my_address
		})
	}
	getaddressData()

	// 删除弹出框
	const delModel = (val : any) => {
		console.log(val)
		Dialog.confirm({
			title: '删除地址',
			message: '确定删除地址',
		})
			.then(() => {
				// on confirm
				addressData.value.splice(val, 1)
				// Notify({ type: 'success', message: '删除成功' });
			})
			.catch(() => {
				// on cancel
			});
	}
	// 编辑
	const edit = (val : any) => {
		console.log(val)
		uni.navigateTo({
			url: '/subpkg/Edit_address/Edit_address'
		})
		store.commit('edit_model', [addressData, val])
	}
	const toAdd = (val : any) => {
		uni.navigateTo({
			url: '/subpkg/Add_address/Add_address'
		})
		store.commit('edit_model', [addressData, val])
	}
</script>

<style lang="scss" scoped>
	.address {
		width: 100vw;
		height: 100vh;
		background-color: #f0f0f0;

		.card {
			padding: 20rpx;
			background-color: white;
			margin: 20rpx 0;

			.title {
				.name {
					font-weight: 700;
				}

				.sex {
					margin: 0 10rpx;
				}
			}

			.content {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.addressInfo {
					width: 60%;
				}
			}
		}

		.footer {
			background-color: white;
			padding: 20rpx;
			width: 100%;
			position: fixed;
			bottom: 0;
			text-align: center;
			color: blue;
		}
	}
</style>