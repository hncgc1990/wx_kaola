// pages/category/index.js

import { category} from "../../assets/data/category"
import { childCategory } from "../../assets/data/categorychild"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageHeight:"",
    categories:[],
    hotKey:'春雨面膜',
    selected:0,
    brandList:[],
    hotCategoryList:[]
  },

  changeSelect:function(e){//左侧类目点击
    console.log(e.currentTarget.dataset.index)
    this.setData({
      selected: e.currentTarget.dataset.index,
    })


  },
  onLoad: function (options){
    var page=this
      wx.getSystemInfo({
        success: function(res) {
            page.setData({
              imageHeight:res.screenWidth*0.7*0.28
            })

        },
      })



      this.setData({
        categories: category.body.categoryTreeMenuList,
        brandList:childCategory.body.brandList,
hotCategoryList: childCategory.body.hotCategoryList
      })
  }
})