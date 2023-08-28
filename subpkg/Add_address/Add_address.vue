<template>
	<view>
		<van-cell-group>
			<van-field label='用户名' :value="editVal.name" placeholder="请输入用户名" />
			<van-field label='电话' :value="editVal.phone" placeholder="请输入" />
			<van-field label='地址' :value="editVal.address" placeholder="请输入" />
			<van-field label='门牌号' :value="无默认值,可随便修改" placeholder="请输入" />
			<van-field label='标签' :value="editVal.tag" placeholder="请输入" />
		</van-cell-group>
		<van-button type='primary' @click='pushData'>确定</van-button>
	</view>
</template>

<script setup lang='ts'>
	import store from '../../store/index.ts'

	const editVal = store.state.edit_mod
	console.log(editVal)

	const pushData = () => {
		store.commit('push', editVal)
	}
</script>

<style lang="scss" scoped>

</style>