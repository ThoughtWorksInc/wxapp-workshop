const app = getApp();

Page({
  onLoad(query){
    const id = query.id;
    if (id) {
      this.setData({ id: id });
      app.positionsRef.child(`${id}`).bindAsObject(this, 'position');
    }

    const role = wx.getStorageSync('role')
    this.setData({
      role
    })
  },

  transitionToList(){
    wx.navigateBack();
  },

  transitionToApply() {
    wx.navigateTo({
      url: `../apply/apply?id=${this.data.id}`
    })
  },

  onSubmit(e){

    const values = e.detail.value;
    console.log(values);
    const id = this.data.id;
    let updateProm = id ? app.positionsRef.child(id).set(values) : app.positionsRef.push(values);
    updateProm
      .then(() => {
        this.transitionToList()
      })
      .catch(() => {
      });
  }
});