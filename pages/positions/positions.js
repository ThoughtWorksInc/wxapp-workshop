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
    deleteJob(id).then(jobList => {
      this.setData({
        jobList
      });
    });
  }
});
