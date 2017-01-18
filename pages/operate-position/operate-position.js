import { createJob, updateJob, getJobById } from '../../utils/jobs';
let app = getApp();
Page({

  setNavigationBarTitle(title){
    wx.setNavigationBarTitle({
      title,
    });
  },

  onLoad(query){

    const id = query.id;

    console.log(id)

    this.setData({ role: wx.getStorageSync('role') })

    if (id) {
      this.setNavigationBarTitle('编辑内推职位');
      app.positionsRef.child(id).bindAsObject(this, 'position')
      this.setData({id})
    } else {
      this.setNavigationBarTitle('创建内推职位');
    }
  },

  transitionToPositionsPge(){
    wx.navigateBack();
  },

  onSubmit(e){
    const values = e.detail.value;
    const id = this.data.id;

    if(this.data.role != 'HR') {
      console.log('go:', id)
      wx.navigateTo({ url: `../apply/apply?id=${id}` })
      return;
    }

    let operationPromise = id ? app.positionsRef.child(id).set(values) : app.positionsRef.push(values)

    operationPromise.then(() => {
      this.transitionToPositionsPge();
    })
  }
});