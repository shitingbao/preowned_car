// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    console.log("thisi is on Launch")
    wx.redirectTo(
        { url:"pages/login/login"},
     )
    
    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
  onShow(){
    setTimeout(() => {
        wx.hideHomeButton({
            complete:()=>{}
        });
    }, 200);
  }
})