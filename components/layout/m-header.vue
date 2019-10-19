<template lang='pug'>
	header.m-header
		.m-header__content
			.m-logo
				img(src="~assets/images/logo.png")
			ul.m-menu
				li.m-menu-item(v-for="item in _menus" :key="item.path" :class="{current: $nuxt.$route.path == item.path}")
					nuxt-link.link(:to="item.path" ) {{item.name}}

</template>

<script>
	import { Menus } from '~/assets/config/site-map'
	export default {
		name: 'm-header',
		data(){
		    return {
                menus: []
			}
		},
		beforeCreate(){
		    this._menus = Menus
		},
		mounted() {
        }
    }
</script>
<style lang="scss" scoped>
	.m-header {
		height: 60px;
		background: #22282d;
		&__content {
			display: flex;
			width: 1280px;
			margin: 0 auto;
			.m-logo {
				img {
					width: 120px;
				}
			}
			.m-menu {
				display: flex;
				margin-left: 100px;
				.m-menu-item {
					transition: all 0.3s ease;
					height: 60px;
					line-height: 60px;
					color: #cecece;
					padding: 0 10px;
					margin: 0 10px;
					font-size: 15px;
					&:hover {
						color: #ef4f19
					}
					&.current {
						color: #ef4f19
					}
					.link {
						display: block;
						height: 100%;
					}
				}
			}
		}

	}
</style>
