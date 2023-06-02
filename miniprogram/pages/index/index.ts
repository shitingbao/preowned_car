// // index.ts
// // 获取应用实例
// const app = getApp<IAppOption>()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     canIUseGetUserProfile: false,
//     canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
//   },
//   // 事件处理函数
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs',
//     })
//   },
//   bindViewLogin() {
//     wx.navigateTo({
//       url: '../login/login',
//     })
//   },
//   onLoad() {
//     // @ts-ignore
//     if (wx.getUserProfile) {
//       this.setData({
//         canIUseGetUserProfile: true
//       })
//     }
//   },
//   getUserProfile() {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
//   getUserInfo(e: any) {
//     // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
//     console.log(e)
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })

Page({
    data: {
      active: 1,
      selectValue:"",
      imageURL:"",
      goods:["aa","bb","cc","cc","cc","cc","cc","cc","cc"],
      carOption:[
        { text: '全部车源', value: 0 },
        { text: '批发车源', value: 1 },
        { text: '急售车源', value: 2 },
        { text: '新车', value: 3 },
      ],
      carTypeValue:0,
      orderOption:[
        { text: '默认排序', value: 0 },
        { text: '价格最低', value: 1 },
        { text: '价格最高', value: 2 },
        { text: '车龄最短', value: 3 },
      ],
      orderTypeValue:0,
      isCondition:false,
    },
    showCondition(){
        this.setData({
            isCondition : !this.data.isCondition,
        })
    },
    onChange(event:any) {
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      });
    },
    toBrand(){
        wx.navigateTo({
            url:"../brand/brand"
        })
    },
    toCondition(){
        wx.navigateTo({
            url:"../condition/condition"
        })
    }
  });