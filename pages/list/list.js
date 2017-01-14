let app = getApp();

Page({
  onLoad() {
    const role = wx.getStorageSync('role')
    this.setData({
      role
    })
    app.positionsRef.bindAsArray(this, 'positions');
  },

  transitionToUpdate(e){
    wx.navigateTo({
      url: `../position/position?id=${e.target.dataset.id}`,
    });
  },

  transitionToPosition(){
    wx.navigateTo({
      url: '../position/position'
    });
  },

  deleteJobs(e){
    const id = e.target.dataset.id;
    app.positionsRef.child(id).remove().then(()=> {
    }).catch(()=> {
    })
  }
});
