const app = getApp();

Page({
  onLoad(query){
    const id = query.id;
    if (id) {
      this.setData({ id: id });
      app.positionsRef.child(`${id}`).bindAsObject(this, 'position');
    }
  },

  transitionToList(){
    wx.navigateBack();
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