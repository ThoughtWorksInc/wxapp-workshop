const app = getApp();

Page({
    onLoad(query){
        const id = query.id;
        if (id) {
            this.setData({id: id});
            app.positionsRef.child(`${id}`).bindAsObject(this, 'position');
        }

        const role = wx.getStorageSync('role')
        this.setData({
            role
        })
    },

    onShareAppMessage() {
      return {
        title: this.position['.value'].name,
        desc: this.postion['.value'].description,
        path: `../position/position?id=${this.data.id}`
      }
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

        wx.showToast({
            title: '提交中...',
            icon: 'loading',
            mask: true
        })

        const values = e.detail.value;
        console.log(values);
        const id = this.data.id;
        let updateProm = id ? app.positionsRef.child(id).set(values) : app.positionsRef.push(values);
        updateProm
            .then(() => {
                wx.hideToast()
                this.transitionToList()
            })
            .catch(() => {
                wx.showToast({
                    title: '失败',
                    mask: true,
                    duration: 2000
                })
            });

    }
});
