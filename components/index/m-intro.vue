<template lang="pug">
	.m-intro
		.m-intro__content
			h3.intro-title
				span 软件平台
				span 核心优势
			p.intro-content 您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素
		.intro-row__list
			.intro-row__list-item
</template>

<script>
    export default {
        name: "m-intro"
    }
</script>

<style lang="scss" scoped>
	.m-intro {
		width: 100%;
		height: 700px;
		background: #f2f2f2;
		&__content {
			width: 1280px;
			margin: auto;
			padding: 24px;
			text-align: center;
			.intro-title {
				font-size: 32px;
				span:last-child {
					color: #ef4f19;
				}
			}
			.intro-content {
				padding: 24px;
			}
		}
	}
</style>
