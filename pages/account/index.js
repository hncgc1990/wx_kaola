// pages/account/index.js

import { personal} from "../../assets/data/personal"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    settingList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
     this.setData({
       settingList: personal.body.barlist
     })
  },
})