// pages/category/index.js

import { category} from "../../assets/data/category"
import { childCategory } from "../../assets/data/categorychild"
import {secondcategory} from "../../assets/data/secondcategory"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[],
    hotKey:'春雨面膜',
    selected:0,
    brandList:[],
    hotCategoryList:[],
    albumList:[],
    data:{}
  },

  changeSelect:function(e){//左侧类目点击
    console.log(e.currentTarget.dataset.index)
    this.setData({
      selected: e.currentTarget.dataset.index,
      data:e.currentTarget.dataset.index==0?childCategory:secondcategory
    })


  },
  onLoad: function (options){
      let more={
        "brandId": -1,
        "brandLogo": "/assets/images/goto_all_brands.png",
        "brandName": "更多",
        "favorCount": 0,
        "isFocus": 0,
        "keyWords": "更多"
      }

      childCategory.body.brandList.push(more)
      secondcategory.body.brandList.push(more)



      this.setData({
        categories: category.body.categoryTreeMenuList,
        brandList:childCategory.body.brandList,
        hotCategoryList: childCategory.body.hotCategoryList,
        albumList:childCategory.body.albumList,
        data:childCategory
      })
  }
})