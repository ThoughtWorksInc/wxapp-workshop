import { getJobs, deleteJob } from '../../utils/jobs';

Page({
  data: {
    jobList: []
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
