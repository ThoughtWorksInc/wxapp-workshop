var app = getApp()
Page({

  onLoad: function () {

  },
  onSubmit(e) {
    let values = e.detail.value
    app.applicationsRef.push(values).then(() => {
      wx.switchTab({url: '../positions/positions'})
    })
  }
})
