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
    const values = e.detail.value;
    values.id = this.data.id;
    app.candidatesRef.push(values).then(() => {
      wx.navigateBack();
    }).catch(() => {

    })
  }
})
