import { createJob, updateJob, getJobById } from '../../utils/jobs';

const fields = [
  {
    name: 'jobName',
    tag: 'input',
    placeholder: '职位名称',
  },
  {
    name: 'address',
    tag: 'input',
    placeholder: '您所在的地点',
  },
  {
    name: 'expectAddress',
    tag: 'input',
    placeholder: '您期望的办公地点',
  },
  {
    name: 'description',
    tag: 'textarea',
    placeholder: '职位描述',
  },
];

Page({
  data: {
    fields,
    values: {},
  },

  setNavigationBarTitle(title){
    wx.setNavigationBarTitle({
      title,
    });
  },

  onLoad(query){
    const id = query.id;
    if (id) {
      this.setNavigationBarTitle('编辑内推职位');
      getJobById(id).then((job) => {
        this.setData({
          values: job,
          id
        });
      });
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
    const newJob = Object.assign({}, values, { id });
    if (id) {
      updateJob(newJob).then(() => {
        this.transitionToPositionsPge();
      });
      return;
    }
    createJob(values);
    this.transitionToPositionsPge();
  }
});