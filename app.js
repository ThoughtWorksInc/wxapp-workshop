import wilddog from './utils/wilddog-weapp-all'

const config = {
  syncURL: 'https://tw-internal-referral.wilddogio.com',
  authDomain: 'tw-internal-referral.wilddogio.com'
};

App({
  onLaunch: function () {
    wilddog.initializeApp(config);
    this.positionsRef = wilddog.sync().ref('tw_positions');
    this.candidatesRef = wilddog.sync().ref('tw_candidates');
    this.applicationRef = wilddog.sync().ref('tw_applications');

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