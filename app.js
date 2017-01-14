import wilddog from './utils/wilddog-weapp-all'

const config = {
  syncURL: 'https://twirapp.wilddogio.com',
  authDomain: 'twirapp.wilddogio.com'
};

App({
  onLaunch: function () {
    wilddog.initializeApp(config);
    this.positionsRef = wilddog.sync().ref('tw_positions');
    this.candidatesRef = wilddog.sync().ref('tw_candidate');

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('role', 'HR')
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