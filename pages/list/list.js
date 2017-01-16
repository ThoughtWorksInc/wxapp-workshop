let app = getApp();

Page({

    onLoad() {
        const role = wx.getStorageSync('role');
        this.setData({
            role
        })
        app.positionsRef.bindAsArray(this, 'positions');
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
    },

    deleteJobs(e){
        wx.showToast({
            title: '提交中...',
            icon: 'loading',
            mask: true
        })

        const id = e.target.dataset.id;
        app.positionsRef.child(id).remove().then(()=> {
            wx.hideToast()
        }).catch(()=> {
            wx.showToast({
                title: '失败',
                mask: true,
                duration: 2000
            })
        })
    }
});
