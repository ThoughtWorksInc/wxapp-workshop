Page({
  data: {
    values: {},
    fields: [
      {
        name: 'jobName',
        tag: 'input',
        placeholder: '职位名称',
      },
      {
        name: 'description',
        tag: 'textarea',
        placeholder: '职位描述',
      },
      {
        name: 'address',
        tag: 'select',
        placeholder: '您所在的地点',
        options: [
          {
            label: '成都',
            value: 'chengdu',
          },
          {
            label: '北京',
            value: 'beijing',
          },
        ]
      },
      {
        name: 'expectAddress',
        tag: 'select',
        placeholder: '您期望的工作地点',
        options: [
          {
            label: '成都',
            value: 'chengdu',
          },
          {
            label: '北京',
            value: 'beijing',
          },
        ]
      },
    ]
  },

  onChange(e){
    const fieldValues = Object.assign(this.data.values, {
      [e.target.dataset.name]: e.detail.value,
    });
    this.setData({
      values: fieldValues,
    });
  },

  onSubmit(e){
    const pickers = this.data.fields.filter((field) => {
      return field.tag === 'select';
    });

    const values = e.detail.value;
    pickers.forEach((picker) => {
      const index = this.data.values[picker.name];
      Object.assign(values, {
        [picker.name]: (picker.options[index] || {}).value,
      });
    });

    console.log(values);
  }
});