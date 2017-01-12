import { getJobs } from '../../utils/jobs';

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

  transitionToPosition(){
    wx.navigateTo({
      url: '../position/position'
    });
  }
});
