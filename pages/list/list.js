let app = getApp();

Page({
  onLoad() {
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
