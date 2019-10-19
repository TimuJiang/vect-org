<template lang="pug">
	.m-footer
		.m-footer__content
		.m-footer__copyright
			p copyright © 2019 杭州向量数据科技有限公司 浙ICP备19038104号-1
</template>

<script>
    export default {
        name: "m-footer"
    }
</script>

<style lang="scss" scoped>
	.m-footer {
		height: 300px;
		font-size: 12px;
		background-color: #32383d;
		color: #d6d6d6;
		padding: 20px 0;
		&__content {
			width: 1280px;
			margin: 0 auto;
		}
		&__copyright {
			width: 1280px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.logo-small {
				width: 120px;
			}
		}
	}
</style>
