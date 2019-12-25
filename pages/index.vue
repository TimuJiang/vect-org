<template lang="pug">
	v-layout.page-index(column align-center)
		m-banner
		.ability-row
			.ability-row__content(@click="onSome")
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
		m-intro
		m-price
		m-try
</template>

<script>
    import MBanner from '~/components/index/m-banner'
    import MIntro from '~/components/index/m-intro'
    import MPrice from '~/components/index/m-price'
	export default {
        head () {
            return {
                title: '首页'
            }
        },
		components: {
            MBanner,
            MIntro,
            MPrice,
            MTry: ()=>import('~/components/index/m-try')
		},
		methods: {
			onSome(){
				alert('xxxx')
			}
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
	}
</style>
