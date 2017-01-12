import { getJobs } from '../../utils/jobs';

Page({
  data: {
    jobList: []
  },

  onLoad(){
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
