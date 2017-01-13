import { getJobs, deleteJob } from '../../utils/jobs';
let app = getApp();

Page({
  data: {
    jobList: []
  },

  onLoad() {
    app.positionsRef.bindAsArray(this,'positions');
  },

  onShow(){
    getJobs().then(jobList => {
      this.setData({
        jobList,
      });
    });
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
    deleteJob(id).then(jobList => {
      this.setData({
        jobList
      });
    });
  }
});
