const AV = require('./utils/leancloud-storage');

AV.init({
  appId: 'A8Hd5F2XM2UEqYLmourvVJkq-gzGzoHsz',
  appKey: 'C1rD26ukkgTHVItkrc4rXGeT',
});

App({
  onLaunch: function () {
    
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('role', 'HR')
    // wx.setStorageSync('role', 'USER')
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