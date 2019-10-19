<template lang="pug">
	v-layout.page-index(column align-center)
		m-banner
		.ability-row
			.ability-row__content
				.ability-row__item
					img(src="~assets/images/ability-1.png")
					p.ability-row__title 市场数据分析
					p.ability-row__sub-title 全国市场的一些分析什么的
				.ability-row__item
					img(src="~assets/images/ability-2.png")
					p.ability-row__title 市场数据分析
					p.ability-row__sub-title 全国市场的一些分析什么的
				.ability-row__item
					img(src="~assets/images/ability-3.png")
					p.ability-row__title 市场数据分析
					p.ability-row__sub-title 全国市场的一些分析什么的
				.ability-row__item
					img(src="~assets/images/ability-4.png")
					p.ability-row__title 市场数据分析
					p.ability-row__sub-title 全国市场的一些分析什么的
		.intro-row
			.intro-row__content
				h3.intro-title
					span 软件平台
					span 核心优势
				p.intro-content 您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素
		.try-row
			.try-row__content.row
				p VECTMAP 向量城市共享地图更加简单、更高效、更可靠。
				v-btn.go-use(rounded color="orange darken-3" drak) 免费试用
</template>

<script>
    import MBanner from '~/components/index/m-banner'
	export default {
		components: {
            MBanner
		}
	}
</script>

<style lang="scss" scoped>
	.page-index {
		.row{
			width: 1280px;
			margin: auto;
		}
		.ability-row {
			background-color: #32383d;
			width: 100%;
			height: 300px;

			&__content {
				display: flex;
				padding: 24px 0;
				width: 1280px;
				margin: 0 auto;
				justify-content: space-between;
				.ability-row__item {
					text-align: center;
					font-size: 14px;
					color: #f2f2f2;
					padding-top: 24px;
					img {
						width: 132px;
					}
					.ability-row__title {
						padding-top: 24px;
						margin-bottom: 10px;
					}
					.ability-row__sub-title {
						font-size: 12px;
						color: #808080
					}
				}
			}

		}
		.intro-row {
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
		.try-row {
			background-color: #22282d;
			width: 100%;
			height: 160px;
			.try-row__content {
				display: flex;
				align-items: center;
				height: 100%;
				justify-content: space-between;
				p {
					color: #808080;
					margin: 0;
				}
				.go-use {
					width: 140px;
					color: #F5F5F5;
				}
			}
		}
	}
</style>
