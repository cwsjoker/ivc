<template>
	<div class="Jump_Demo">
		<div>
			<div v-for="item in demoList" style="margin-top: 20px;">
				<p>ID:{{item.id}}</p>
				<p>标题:{{item.title}}</p>
				<p>阅读数:{{item.visit_count}}</p>
			</div>
		</div>
		<jumppage :totalPages="totalPages" :initPage="currentPage" v-on:jumpPage="inchange"></jumppage>
	</div>
</template>
<script>
	import axios from 'axios';
	import jumppage from '../components/Jumppage.vue';
	export default {
		data () {
			return {
				currentPage : 5,
				totalPages : 15,
				demoList : []
			}
		},
		mounted () {
			this.getList(this.currentPage);
		},
		components: {
			jumppage
		},
		methods: {
			// 这里是监听分页子组件的方法
			inchange (page) {
				this.currentPage = page;
				this.getList(this.currentPage);
			},
			// 获取列表
			getList (page) {
				const url = 'https://cnodejs.org/api/v1/topics';
				axios.get(url, {
					params : {
						'page' : page,
						'limit' : 5
					}
				})
				.then((response) => {
					if (response.data.success) {
						this.demoList = response.data.data;
					}
				})
				.catch(function(error) {
					console.log(error);
				})
			}
		}
	}
</script>