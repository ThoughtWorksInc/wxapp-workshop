let app = getApp();

Page({
  onLoad() {
    const role = wx.getStorageSync('role')
    this.setData({
      role
    })
  },

  transitionToUpdate(e){
    wx.navigateTo({
      url: `../apply/apply?id=${e.target.dataset.id}`,
    });
  },

  transitionToApplication(){
    wx.navigateTo({
      url: '../applications/applications'
    });
  },

  deleteApplication(e){
    wx.showToast({
      title: '提交中...',
      icon: 'loading',
      mask: true
    })

    const id = e.target.dataset.id;
    app.applicationRef.child(id).remove().then(()=> {
      wx.hideToast()
    }).catch(()=> {
      wx.showToast({
        title: '失败',
        mask: true,
        duration: 2000
      })
    })
  }
});
