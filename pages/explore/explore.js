let app = getApp();

Page({
    transitionToCandidate(){
        wx.navigateTo({
            url: '../candidate/candidate'
        });
    },
    transitionToApplication(){
        wx.navigateTo({
            url: '../applications/applications'
        });
    }

});
