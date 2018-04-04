//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    var that = this
    wx.request({
      url: "https://caimusic4.mytp8.cn/public_html/index.php/index/Imgs/user",
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        openid: getApp().globalData.openId,
      },
      success: function (res) {
        console.log(res)
        that.setData({
          myname: res.data.myname,
          mylv: res.data.mylv,
          my_score: res.data.my_score,
          my_pm: res.data.my_pm
        })
      }
    })
    wx.request({
      url: "https://caimusic4.mytp8.cn/public_html/index.php/index/Imgs/aaa",
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        openId: getApp().globalData.openId,
      },
      success: function (res) {
        console.log(res)
        that.setData({
          items:res.data
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
