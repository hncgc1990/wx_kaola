import {gooddetail} from "../../assets/data/goodDetail/main"
import {delivery} from "../../assets/data/goodDetail/delivery"
import {brand} from "../../assets/data/goodDetail/brand"
import {hotsell} from "../../assets/data/goodDetail/hotsell"

Page({
  data:{
    text:"Page gooddetail",
    bannerList:[],
    colorImage:"",//选择颜色
    firstColor:{},
    selectColor:0,//选中的颜色的索引
    colorList:[],
    goodDetail:{},
    delivery:delivery.body.delivery,
    brand:brand.body.brand,
    hotsell:hotsell.body.result[0]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
    this.setData({
      bannerList:gooddetail.body.goods.bannerImgUrlList,
      firstColor:gooddetail.body.goods.colorSelection.selections[0],
      colorList:gooddetail.body.goods.colorSelection.selections.slice(1),
      goodDetail:gooddetail.body.goods
    })


  },
  chooseFirst:function(e){
    var page =this
    this.setData({
      selectColor: 0,
      // bannerList: gooddetail.body.goods.bannerImgUrlList,
      colorImage: ""
    })
  },
  changeColor:function(e){
    var page = this
     this.setData({
       selectColor:e.currentTarget.dataset.index,
      //  bannerList: gooddetail.body.goods.colorSelection.selections[e.currentTarget.dataset.index].details
       colorImage: gooddetail.body.goods.colorSelection.selections[e.currentTarget.dataset.index].details[0]
     })
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})