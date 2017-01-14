//profile.js
//获取应用实例
var app = getApp();
Page({
    transitionToCandidateList(){
        wx.navigateTo({
            url: '../candidate/candidate'
        });
    }

});
