Page({
	data: {
		motto: 'Star me', 
		githubA: 'https://github.com/skyvow/wux', 
    githubB: 'https://github.com/damys/', 
		userInfo: {}
	},
	onLoad() {
		wx.login({
			success: () => {
				wx.getUserInfo({
					success: (res) => {
						this.setData({
							userInfo: res.userInfo              
						})
            console.log(res)
					}
				})
			}
		})
	}
})