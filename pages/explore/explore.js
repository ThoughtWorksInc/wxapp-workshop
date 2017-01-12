//logs.js
// var util = require('../../utils/util.js')
import { formatTime } from '../../utils/util.js'

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return formatTime(new Date(log))
      })
    })
  }
})
