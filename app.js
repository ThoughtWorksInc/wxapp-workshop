import wilddog from './utils/wilddog'

var config = {
  syncURL: 'https://tw-internal-referral.wilddogio.com',
  authDomain: 'tw-internal-referral.wilddogio.com'
}

//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wilddog.initializeApp(config)

    this.positionsRef = wilddog.sync().ref('tw_positions')

    wx.setStorageSync('role', 'bushiHR')
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})