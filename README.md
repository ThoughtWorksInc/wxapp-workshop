# WeChat App Workshop

Total Time: 2 hours 

Branchs: 

- [`master`](https://github.com/ThoughtWorksInc/wxapp-workshop/tree/master): only README to record scripts
- `start`: from offical-demo, add necessary icons
- `pages`: added all pages and config tab icons
- `position`: second page
- ......

--------

0. setup env & add developer account (10 mins)
    - [x] reminder in jinshuju/invitation mail 
    - [ ] collect exsiting accounts @Xing

1. doc overview: 框架、API、组件 (10 mins)

2. offical demo (profile page) and theory (20 mins)
    - [data binding](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/data.html?t=201715) & [initial data](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html?t=201715) (vs Angular)
    - [lifecycle](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html?t=201715) eg: `onLaunch` (vs React)
    - `wx.login`
    - `wx.getUserInfo`
    - 逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。
        + [`bindtap="handleTap"`](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html?t=201715)
        + [`wxml`](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/?t=201715) tags
        + [`wxss`](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html?t=201715) rpx（responsive pixel）

3. clarify [requirements](https://github.com/ThoughtWorksInc/wxapp-workshop/issues) (10 mins)
    - [#3](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/3) profile
    - [#1](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/1) position
    - [#2](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/2) job & apply
    - [#4](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/4) explore

4. initial another three pages (10 mins)
    - Page api & [config](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html?t=201715)
    - Page navigator
        - [`wx.navigateTo`](https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html?t=201716)

------ lunch time ------

5. modify special pages deps on requirements 
    1. profile (`wx.login` `wx.getUserInfo` page-api)
    2. user info input (`form`, `button` compoent)
    3. position 
        - `onPullDownRefresh` 当前共有 10 个职位
        - `onShareAppMessage` 分享给你的朋友


