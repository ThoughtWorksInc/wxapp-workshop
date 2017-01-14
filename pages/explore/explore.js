//profile.js
//获取应用实例
var app = getApp();
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
