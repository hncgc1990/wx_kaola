// pages/category/index.js

import { category} from "../../assets/data/category"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[],
    hotKey:'春雨面膜',
    selected:0
  },

  changeSelect:function(e){//左侧类目点击
    console.log(e.currentTarget.dataset.index)
    this.setData({
      selected: e.currentTarget.dataset.index
    })


  },
  onLoad: function (options){
      this.setData({
        categories: category.body.categoryTreeMenuList
      })
  }
})