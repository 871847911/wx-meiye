// pages/order/order.js
const app = getApp();
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    people: [1, 2, 3, 4, 5],
    num: 1,
    serviceDay: ["今天", "明天", "周一", "周二", "周三", "周四", "周五"],
    day: ["", "", "", "", "", "", "", "", ""],
    chosedate:0,
    chosetime:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;

    that.order();

  },
  //选择人数
  chosenum: function (e) {
    console.log(e.currentTarget.dataset.id);
    this.setData({
      num: e.currentTarget.dataset.id
    })
    

  },
  //浮尘效果
  setModalStatus: function (e) {

    // console.log("设置显示状态，1显示0不显示", e.currentTarget.dataset.status);
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export()
    })
    if (e.currentTarget.dataset.status == 1) {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation
      })
      if (e.currentTarget.dataset.status == 0) {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)


  },
  //选择日期周几
  chose_date:function(e){
    this.setData({
      chosedate: e.currentTarget.dataset.id
    })
  },
  //选一天去时间
  chose_time:function(e){
    this.setData({
      chosetime: e.currentTarget.dataset.id
    })
  },
//跳转选择技师页面
  chose_technician:function(){
    wx.navigateTo({
      url: '../technician/technician',
    })
  }
  ,
  //进入选择服务界面
  gotoService: function () {
    wx.navigateTo({
      url: '../choseservice/choseservice'

    })
  },
  //点击预约
  order: function () {
    wx.request({
      url: app.globalData.service + "/orderAppointment/queryAppointmentPage",
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        
      },
      success: function (res) {
        console.log("预订", res);
      }
    })
  },
  //提交表单
  formSubmit:function(e){
    console.log("form发生了submit事件", e)
  }
})