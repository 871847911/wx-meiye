// pages/choseservice/choseservice.js
const app = getApp();
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service:["","","",""]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   that = this;
   that.getServiceList();
  },
    //选择服务框
  radioChange:function(e){
    console.log("index", e.detail.value);
  },
  //获取服务列表
  getServiceList:function(){
    wx.request({
      url: app.globalData.service + "/server/queryServerPage",
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "page": {

        },
        "server": {

          "storeId": 1
        }
      },
      success: function (res) {
        console.log("service", res.data.rows);
        that.setData({
          service: res.data.rows
        })
      }
    })
  }
})