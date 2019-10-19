const colors = require('vuetify/es5/util/colors').default
const path = require('path')
module.exports = {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#fff'},
	/*
	** Global CSS
	*/
	css: [
		'assets/reset.css'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/vuetify',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/proxy'
	],
	axios: {
		prefix: 'https://mall.geely.com/mapi',
		proxy: true
	},
	proxy: {
		'/mapi': 'https://mall.geely.com',
		changeOrigin: true
	},
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: "#EF4F19",
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
