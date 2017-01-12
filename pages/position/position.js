import { createJob, updateJob } from '../../utils/jobs';

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

  onLoad(query){
    const id = query.id;
    if (id) {
      updateJob(id).then((job) => {
        this.setData({
          values: job,
        });
      });
    }
  },

  transitionToList(){
    wx.navigateBack();
  },

  onSubmit(e){
    const values = e.detail.value;
    console.log(values);
    createJob(values);
    this.transitionToList()
  }
});