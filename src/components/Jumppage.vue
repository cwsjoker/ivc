<template>
	<div class="Jumppage">
		<p>共有<span>{{totalPages}}</span>条记录，跳转到第<select v-model="currentPage" @change="jumpPage()">
			<option v-for="page in pages" :value="page">{{page}}</option>
		</select>页</p>
	</div>
</template>
<script>
	export default {
		props : {
			totalPages : {
				type : Number,
				default : 100
			},
			initPage : {
				type : Number,
				default : 1
			}
		},
		data() {
			return {
				currentPage : 1
			}
		},
		mounted() {
			this.currentPage = this.initPage;
			console.log(this.currentPage);
		},
		computed : {
			pages() {
				const pageList = [];
				for (let i = 1; i <= this.totalPages; i++) {
					pageList.push(i);
				};
				return pageList;
			}
		},
		methods : {
			jumpPage() {
				this.$emit('jumpPage', this.currentPage);
			}
		}
	}
</script>
<style type="text/css">

</style>