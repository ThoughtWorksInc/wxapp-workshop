---
title: 「微信小程序系列 Workshop 02」之框架 + 组件 + API 实战
speaker: Jimmy Lv & Rui Li
date: 2017年01月13日
transition: move
highlightStyle: kimbie.light
theme: green
---

> `nodeppt start -w` by [ksky521/nodePPT](https://github.com/ksky521/nodePPT)

[slide]

# WeChat App Workshop 02

Total Time: 2 hours 

吕靖 & 李睿

[slide]

# [Branches](https://github.com/ThoughtWorksInc/wxapp-workshop/branches/all): 

- [`master`](https://github.com/ThoughtWorksInc/wxapp-workshop/tree/master): only README to record scripts
- [`quickstart`](https://github.com/ThoughtWorksInc/wxapp-workshop/tree/quickstart): from offical-demo, add necessary icons
- `pages`: added all pages and config tab icons
- `workshop-section-*`: implement page step by step
- ......

--------

[slide]

# 0. Setup (env & developer account)

- [x] reminder in jinshuju/invitation mail 
- [x] collect exsiting accounts @Xing @Chaowei
- [x] join wechat group
- [x] `git@github.com:ThoughtWorksInc/wxapp-workshop.git`

[slide]

# 1. Doc overview: 框架、API、组件 

(10 mins)

[slide]

# 2. Offical demo and theory 

(20 mins)

[slide]

# App [lifecycle](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/app.html?t=2017112)

![](https://user-gold-cdn.xitu.io/2017/1/10/3033767b995c01457bafd369a0335488)

* 首次打开，小程序初始化

* 小程序初始化完成后，触发`onShow`事件

* 小程序被切换到后台（熄屏，切换APP等），触发`onHide`

* 小程序从后台切换到前台，再次触发`onShow`

* 小程序出错，触发`onError`

[slide]

# Page [lifecycle](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html?t=201715)(vs React)

![](https://user-gold-cdn.xitu.io/2017/1/10/9c1557f9ea339955128a3c56d4650ea1)

[slide]

# API `wx.doSth({ ...config })`

- `wx.login`
- `wx.getUserInfo`
- [data binding](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/data.html?t=201715) & [initial data](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html?t=201715) (vs Angular)

[slide]

[note]
逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。
[/note]

# wxml -> vd -> dom

+ [`wxml`](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/?t=201715) tags
+ [`bindtap="handleTap"`](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html?t=201715)
+ [`wxss`](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html?t=201715) rpx（responsive pixel）

[slide]

# 3. clarify [requirements](https://github.com/ThoughtWorksInc/wxapp-workshop/issues) 

@Xing (10 mins)

- [#3](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/3) profile
- [#1](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/1) position
- [#2](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/2) job & apply
- [#4](https://github.com/ThoughtWorksInc/wxapp-workshop/issues/4) explore

[slide]

## 4. initial another three pages 

(10 mins)

- Page api & [config](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html?t=201715)
- Page navigator
    - [`wx.navigateTo`](https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html?t=201716)

[slide]

# ------ lunch time ------

[slide]

# modify special pages deps on requirements 

1. profile (`wx.login` `wx.getUserInfo` page-api)
2. user info input (`form`, `button` compoent)
3. position 
    - `onPullDownRefresh` 当前共有 10 个职位
    - `onShareAppMessage` 分享给你的朋友
