var app = getApp();
Page({
    data: {
        userInfo: {}
    },

    onLoad: function (query) {
        var that = this;
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        });

        const id = query.id;
        if (id) {
            this.setData({id: id});
            app.applicationRef.child(`${id}`).bindAsObject(this, 'apply');
        } else {
            wx.navigateBack();
        }
    },

    onSubmit: function (e) {
        wx.showToast({
            title: '提交中...',
            icon: 'loading',
            mask: true
        });

        const values = e.detail.value;
        values.id = this.data.id;
        values.userInfo = this.data.userInfo;
        app.applicationRef.push(values).then(() => {
            wx.hideToast();
            wx.navigateBack();
        }).catch(() => {
            wx.showToast({
                title: '失败',
                mask: true,
                duration: 2000
            })
        })
    }
});


