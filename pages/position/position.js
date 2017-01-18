const AV = require('../../utils/leancloud-storage');
const Position = require('../../model/position');


Page({
    data: {
        positionName: '',
        positionLocation: '',
        positionDescription: ''
    },

    addPosition: function () {
        var positionName = this.data.positionName && this.data.positionName.trim();
        var positionLocation = this.data.positionLocation && this.data.positionLocation.trim();
        var positionDescription = this.data.positionDescription && this.data.positionDescription.trim();

        if (!positionLocation || !positionDescription || !positionDescription) {
            return;
        }

        new Position({
            name: positionName,
            location: positionLocation,
            description: positionDescription
        }).save().then((position) => {
            //TODO: confirming
            this.transitionToPositions();
        }).catch(console.error);
        this.setData({
            //TODO: alert
        });
    },


    updateName: function ({
        detail: {
            value
        }
    }) {
        if (!value) return;
        this.setData({
            positionName: value
        });
    },
    updateLocation: function ({
        detail: {
            value
        }
    }) {
        if (!value) return;
        this.setData({
            positionLocation: value
        });
    },
    updateDescription: function ({
        detail: {
            value
        }
    }) {
        if (!value) return;
        this.setData({
            positionDescription: value
        });
    },

    onLoad(query){
        const id = query.id;


        const role = wx.getStorageSync('role')
        this.setData({
            role
        })
    },

    transitionToPositions(){
        wx.navigateBack();
    },

    transitionToApply() {
        wx.navigateTo({
            url: `../apply/apply?id=${this.data.id}`
        })
    },
});