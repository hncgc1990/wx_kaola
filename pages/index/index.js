//index.js
//获取应用实例
import {json} from "../../assets/data/data"
import { jingxuan } from "../../assets/data/jingxuan"
import { tuijian } from "../../assets/data/tuijian"


var app = getApp()
Page({
  data: {
    hotKey: '搜索热词',
    bannerList:[],
    itemList:[],
    itemList2:[],
    itemList3:[],
    item4_image:'',
    itemList4:[],
    item6_image:'',
    itemList6:[],
    item7_image:'',
    itemList7:[],
    jingxuanList:[],
    tuijianList:[]
  },
  onLoad: function () {
  
  console.log(json)
    this.setData({
      bannerList: json.body.home[0].bannerList,
      itemList: json.body.home[1].itemList,
      itemList2: json.body.home[2].itemList,
      itemList3: json.body.home[3].itemList,
      item4_image: json.body.home[4].imageUrl,
      itemList4: json.body.home[4].itemList,
      item6_image: json.body.home[8].imageUrl,
      itemList6: json.body.home[8].itemList,
      item7_image: json.body.home[6].imageUrl,
      itemList7: json.body.home[6].itemList,
      jingxuanList:jingxuan.body.home[0].itemList,
      tuijianList: tuijian.body.home.slice(1)
      // tuijianList:tuijian.body.home.slice(1).filter(function(item,index,array){
      //   if (item.imgUrl){
      //     return true
      //   }
      // })
        })


    // wx.request({
    //   url: 'https://sp.kaola.com/api/home?pageSize=20&pageNo=1',
    //   header: {
    //     'apiVersion': '207',
    //     'platform': '1',
    //     'appVersion': '3.7.5',
    //     'deviceModel': 'Lenovo K30-TM',
    //     'appChannel': '32',
    //     'deviceUdID': '4e3172ce63530b2c09178fab26ff2ea3c66aca45',
    //     'appSystemVersion': '4.4.2',
    //     'version': '30070500',
    //     'Cookie': 'current_env=online;'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     page.setData({
    //       bannerList: res.data.body.home[0].bannerList,
    //       itemList: res.data.body.home[1].itemList,
    //       itemList2:res.data.body.home[2].itemList,
    //       itemList3: res.data.body.home[3].itemList,
    //       item4_image: res.data.body.home[4].imageUrl,
    //       itemList4: res.data.body.home[4].itemList,
    //       item6_image: res.data.body.home[5].imageUrl,
    //       itemList6: res.data.body.home[5].itemList,
    //       item7_image: res.data.body.home[6].imageUrl,
    //       itemList7: res.data.body.home[6].itemList,
    //     })
    //   },
    //   fail: function (res) {
    //     console.error(res)
    //   }
    // })
  }
})
