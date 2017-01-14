//apply.js
//获取应用实例
var app = getApp()
Page({
  onLoad: function (query) {
    const id = query.id;
    if (id) {
      this.setData({id});
    }else {
      wx.navigateBack();
    }
  },
  onSubmit: function(e) {
    wx.showToast({
      title: '提交中...',
      icon: 'loading',
      mask: true
    })

    const values = e.detail.value;
    values.id = this.data.id;
    app.candidatesRef.push(values).then(() => {
      wx.hideToast();
      wx.navigateBack();
    }).catch(() => {
      wx.showToast({
        title: '失败',
        mask: true,
        duration: 2000
      })
    })
  }
})
