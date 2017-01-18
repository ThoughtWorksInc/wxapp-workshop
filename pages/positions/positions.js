import { getJobs, deleteJob } from '../../utils/jobs';

let app = getApp();

Page({
  data: {
    jobList: []
  },

  onLoad(){
    app.positionsRef.bindAsArray(this, 'positions')

    this.setData({ role: wx.getStorageSync('role') })
  },

  transitionToEditPositionPage(e){
    wx.navigateTo({
      url: `../operate-position/operate-position?id=${e.target.dataset.id}`,
    });
  },

  transitionToCreatePositionPage(){
    wx.navigateTo({
      url: '../operate-position/operate-position'
    });
  },

  deleteJobs(e){
    const id = e.target.dataset.id;
    app.positionsRef.child(id).remove().then(() => {
      //TODO something
    })
  }
});
