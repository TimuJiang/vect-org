<template lang="pug">
	section.m-banner
		.banner-1
		.banner-overlay(style="background-color: rgba(51,60,63,0.7);")
		.banner-content
			.banner-content__left
				p.title-text 城市共享地图
				p.title-sub-text Share City Map
				v-btn.join-btn(rounded color="orange darken-3") 进入地图
			.banner-content__right
				img(src="~assets/images/banner-right.png")
</template>

<script>
    export default {
        name: 'm-banner',
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
	.m-banner {
		height: 460px;
		width: 100%;
		position: relative;
		.banner-overlay {
			position: absolute;
			background-color: rgba(51,60,63,0.7);
			width: 100%;
			left: 0;
			top: 0;
			bottom: 0;
			z-index: 2;
		}
		.banner-1 {
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
			bottom: 0;
			z-index: 1;
			background: url("~assets/images/banner-1.jpg") no-repeat center;
		}
		.banner-content {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 1280px;
			margin: 0 auto;
			z-index: 3;
			&__left {
			}
			&__right {
				padding: 50px 100px;
			}
			.title-text {
				font-family: 微軟正黑體;
				font-weight: bold;
				font-size: 48px;
				color: rgb(211,211,211);
			}
			.title-sub-text {
				font-size: 24px;
				margin-top: 10px;
				color: rgb(211,211,211);
			}
			.join-btn {
				width: 140px;
				color: #F5F5F5;
			}
		}
	}
</style>
