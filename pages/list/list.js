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

  transitionToUpdate(e){
    wx.navigateTo({
      url: `../position/position?id=${e.target.dataset.id}`,
    });
  },

  transitionToPosition(){
    wx.navigateTo({
      url: '../position/position'
    });
  }
});
