<template lang='pug'>
	.register
		header.register-header
			a.logo
		.register-content
			.register-content__title 注册账号
			v-form(v-model="valid")
				v-container
					v-row
						v-text-field( v-model="firstName" :rules="_nameRules" :counter="10" label="请输入手机号码" required )
					v-row
						v-text-field( v-model="smsCode" :counter="6" label="请输入短信验证码" required :loading="getting")
							v-btn(slot="append" color="orange darken-3"  dark text @click="getCode" :loading="getting")
								span(v-if="!showTime") 获取验证码
								span(v-else) {{time}}
					// v-row
					//	v-text-field(type="password" v-model="password" :counter="20" label="请输入密码(至少6位数和字母组合)" required )
					// v-row
					//	v-text-field(type="password" v-model="password2" :counter="20" label="请再次输入密码" required )
					v-row.btn-row
						v-btn(color="orange darken-3"  dark @click="doRegister" large block) 开始共享
					v-row.footer-row
						.policy 注册即代表同意 隐私条款
						.to-login
							span 返回
							nuxt-link(to="/") 首页
</template>

<script>

    export default {
        layout: 'simple',
        head() {
            let skip
            if (process.client) {
                skip = !!this.$window.TencentCaptcha
            }
            return {
                title: '注册',
                script: [
                    {
                        skip: skip,
                        src: 'https://ssl.captcha.qq.com/TCaptcha.js'
                    }
                ]
            }
        },
        transition: {
            name: 'page',
            mode: 'out-in'
        },
        data() {
            return {
                externalLoaded: false,
                valid: false,
                project: 'default',
                firstName: '',
                smsCode: '',
                password: '',
                password2: '',
                agree: false,
                email: '',
                tencentCaptcha: null,
                time: 60,
                timer: null,
                showTime: false,
                getting: false
            }
        },
        beforeCreate() {
            this._nameRules = [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ]
        },
        beforeDestroy() {
        },
        asyncData(context) {
            return {project: 'nuxt'}
        },
        mounted() {
        },
        methods: {
            initTC() {
                if (!this.tencentCaptcha) {
                    const {TencentCaptcha} = this.$window
                    this.tencentCaptcha = new TencentCaptcha('2038819750', this.callback);
                }
            },
            callback(res) {
                if (res.ret === 0) {
                    this.send(res.ticket)
                }
            },
            getCode() {
                if (this.showTime) return
				this.initTC()
                this.tencentCaptcha.show()
            },
            send() {
                this.getting = true
                setTimeout(() => {
                    this.getting = false
                    this.startTime()
                }, 5000)
            },
            startTime() {
                this.time = 60
                this.showTime = true
                this.timer = setInterval(() => {
                    if (this.time <= 0) {
                        clearInterval(this.timer)
                        this.showTime = false
                        return
                    }
                    this.time--
                }, 1000)
            },
            doRegister() {
            }
        }
    }
</script>
<style lang="scss" scoped>
	.register {
		&-content {
			padding: 50px 0;
			width: 400px;
			margin: 0 auto;

			&__title {
				text-align: center;
				font-size: 20px;
				padding: 10px 0;
			}

			.btn-row {
				margin: 30px 0;
			}

			.policy {
				width: 100%;
				font-size: 14px;
				text-align: center;
				border-bottom: 1px solid #dddddd;
				padding: 10px 0;
				color: #7f828b;
			}

			.to-login {
				width: 100%;
				font-size: 14px;
				padding-top: 10px;
				text-align: center;
				color: #7f828b;
			}
		}

		&-header {
			height: 60px;
			border-bottom: 1px solid #dddddd;
			text-align: center;

			a.logo {
				display: block;
				height: 40px;
				width: 180px;
				margin: 10px auto;
				background: url('~assets/images/logo.png') no-repeat center;
				background-size: 100% 100%;
			}
		}
	}

</style>
