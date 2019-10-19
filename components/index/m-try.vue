<template lang="pug">
	.m-try
		.try-row__content.row
			p VECTMAP 向量城市共享地图更加简单、更高效、更可靠。
			v-btn.go-use(rounded color="orange darken-3" drak) 免费试用
</template>

<script>
    export default {
        name: "m-try"
    }
</script>

<style lang="scss" scoped>
	.m-try {
		background-color: #22282d;
		width: 100%;
		height: 160px;
		.try-row__content {
			display: flex;
			width: 1280px;
			margin: 0 auto;
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
</style>
