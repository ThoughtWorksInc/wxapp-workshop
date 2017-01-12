# WeChat App Workshop

0. setup env & add developer account (10 mins)
    - [x] reminder in jinshuju/invitation mail 
    - [ ] collect exsiting accounts @Xing

1. doc overview (10 mins)

2. offical demo (profile page) and theory (20 mins)
    - [data binding](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/data.html?t=201715) & [initial data](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html?t=201715) (vs Angular)
    - [lifecycle](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html?t=201715) eg: `onLaunch` (vs React)
    - `wx.login`
    - `wx.getUserInfo`
    - `wxml` tags
    - `wxss`

3. clarify [requirements](https://github.com/ThoughtWorksInc/wxapp-workshop/issues) (10 mins)
    - [#3](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/3) profile
    - [#1](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/1) position
    - [#2](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/2) job & apply
    - [#4](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/4) explore

4. add other two pages (10 mins)
    - Page api & config
    - Page navigator
        - `wx.navigateTo`

eating 

----- 10 mins ------

5. modify special pages deps on requirements 
    1. profile (wx.login wx.getUserInfo page-api)
    2. user info input (form, button compoent)
    3. position 
        - `onPullDownRefresh` 当前共有 10 个职位
        - `onShareAppMessage` 分享给你的朋友


Times: Total 2 hours 

