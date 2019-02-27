// pages/technician/technician.js
const app = getApp();
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:["","",""],
    technician:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   that = this;
   that.getTechnicianList();
  },
  //进入技师详情页面
  goto:function(){
    wx.navigateTo({
      url: '../technicianDetails/technicianDetails'
     
    })
  },
  
  //获取技师列表
  getTechnicianList:function(e){
    wx.request({
      url: app.globalData.service + '/staff/queryStaffPage',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        "page": {
          
        },
        "staff": {
          
          "storeId": 1
        }
        
      },
      success: function (res) {
        console.log("技师列表", res.data.rows);
        that.setData({
          technician: res.data.rows

        })
      }
    })
  },
  //跳转技师详情页
  gotoDetails:function(){
    wx.navigateTo({
      url: '../technicianDetails/technicianDetails',
    })
  }
})