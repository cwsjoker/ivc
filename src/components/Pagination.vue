<template>
	<!-- 通用结构  <- 1 ... 456789 ...50 -> -->
	<div class="Pagination">
		<a href="javascript:;" v-if="initPage != 1" @click="goPage(initPage - 1)">上一页</a>
		<a href="javascript:;" :class="{ current : initPage == 1}" @click="goPage(1)">1</a>
		<span v-if="initPage >= 5 && totalPages >=5">...</span>
		<a href="javascript:;" v-for="page in pages" :class="{ current : initPage == page}" @click="goPage(page)">{{page}}</a>
		<span v-if="totalPages - initPage >= 4">...</span>
		<a href="javascript:;" :class="{ current : initPage == totalPages}" v-if="totalPages !== 1" @click="goPage(totalPages)">{{totalPages}}</a>
		<a href="javascript:;" v-if="initPage != totalPages" @click="goPage(initPage + 1)">下一页</a>
	</div>
</template>
<script>
	export default {
		// 父组件的调用需要给子组件传递总页数，当前页数两个参数
		props: {
			totalPages: {
				type: Number,
				default: 100
			},
			initPage: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				currentPage: 1,
				showPre: false,
				showPreEllipsis: false,
				showNextEllipsis: false,
				showNext: false
			}
		},
		mounted() {
			// this.currentPage = this.initPage;
		},
		computed: {
			// 根据当前页码返回中间页码数组
			pages() {
				const Pages = [];
				const currentPage = this.initPage;
				if (currentPage === 1) {
					// 当前页面为1
					if (this.totalPages === 1) {
						// 总页数为1
						// return Pages.push(1);
						return;
					} else {
						// 总页数大于1页
						for (let i = 2; i <= 4; i++) {
							if (i < this.totalPages) {
								Pages.push(i);
							}
						}
						console.log(Pages)
						return Pages;
					}
				} else {
					// 非首页
					const startCurrentPage = currentPage - 2;
					for (let i = 0; i < 5; i++) {
						if (startCurrentPage+i > 1 && startCurrentPage+i < this.totalPages) {
							Pages.push(startCurrentPage+i);
						}
					};
					return Pages;
				}
			}
		},
		methods: {
			goPage (page) {
				if (page == this.initPage) {
					console.log('已在当前页面');
					return;
				}
				console.log(page);
				this.$emit('goPage', page);
			}
		}
	}
</script>
<style>
	.Pagination a{
		display: inline-block;
		height: 30px;
		margin-right: 10px;
		padding: 0 10px;
		vertical-align: middle;
		line-height: 30px;
		font-weight: 700;
		text-decoration: none;
		color: #2C8FED;
	}
	.Pagination a:hover, .Pagination a.current{
		display: inline-block;
		height: 30px;
		margin-right: 10px;
		padding: 0 10px;
		line-height: 30px;
		text-align: center;
		color: #fff;
		background-color: #2C8FED;
		vertical-align: middle;
	}
	.Pagination span {
		margin-right: 10px;
	}
</style>