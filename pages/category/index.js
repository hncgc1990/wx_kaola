// pages/category/index.js

import { category} from "../../assets/data/category"
import { childCategory } from "../../assets/data/categorychild"
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      this.setData({
        categories: category.body.categoryTreeMenuList,
        brandList:childCategory.body.brandList,
hotCategoryList: childCategory.body.hotCategoryList
      })
  }
})