// pages/discovery/index.js
import { discovery} from "../../assets/data/discovery"
import { worthbuy } from "../../assets/data/worthbuy"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:0,
    bannerHeight:"",
    halfWidth:"",
    screenW:"",
    item4Width:"",
    item2Width:"",
    bannerList:[],
    liveRecList:[],
    hotLiveList:[],
    itemList:[],
    worthbuyList:[],
    worthbuyList2:[]
  },
  changeSelect:function(e){
    this.setData({
      select:e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page=this
    wx.getSystemInfo({
      success: function(res) {
        page.setData({
          bannerHeight:res.screenWidth*0.8*375/600,
          halfWidth:res.screenWidth*0.5,
          screenW:res.screenWidth,
          item4Width:res.screenWidth*0.28,
          item2Width: res.screenWidth *0.33

        })
        console.log(page.data.scrollL)
      },
    })    



    this.setData({
      bannerList: discovery.body.homeDetailInfo.bannerList,
      liveRecList: discovery.body.homeDetailInfo.liveRecList[1].liveRecList,
      hotLiveList: discovery.body.homeDetailInfo.liveRecList[2].liveRecList,
      itemList:worthbuy.body.itemList[0].itemList,
      worthbuyList: worthbuy.body.extData1.itemList,
      worthbuyList2: worthbuy.body.extData2.itemList,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})