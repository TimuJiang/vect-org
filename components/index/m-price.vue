<template lang="pug">
	.m-price
		.m-price__content
			h3.m-price__title
				span 数据价值
				span 核心优势
			p.m-price__content 您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素
		.m-price__list
			.m-price__list-item
</template>

<script>
    export default {
        name: "m-intro"
    }
</script>

<style lang="scss" scoped>
	.m-price {
		width: 100%;
		height: 700px;
		background: #f2f2f2;
		&__content {
			width: 1280px;
			margin: auto;
			padding: 24px;
			text-align: center;
			.m-price__title {
				font-size: 32px;
				span:last-child {
					color: #ef4f19;
				}
			}
			.m-price__content {
				padding: 24px;
			}
		}
	}
</style>
