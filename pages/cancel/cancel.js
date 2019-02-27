// pages/paySuccess/paySuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: '0',
        value: '没时间'
      },
      {
        name: '1',
        value: '填写了错误信息'
      },
      {
        name: '2',
        value: '店铺位置太远'
      },
      {
        name: '3',
        value: '重新预约'
      },
      {
        name: '4',
        value: '其他'
      },
    ],
    isShow: false,
    submit: false,
    validate:false,
    textarea:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == "4") {
      this.setData({
        isShow: true,
      });
    } else {
      this.setData({
        isShow: false,
      });
    }
    this.setData({
      submit: true,
      validate:false,
      redioNum: e.detail.value,
    });
  },
  bindTextAreaBlur:function(e){
    this.setData({
      textarea: e.detail.value
    });
    if (e.detail.value !=""){
      this.setData({
        validate: false,
      });
    }
  },
  submit: function() {
    var that = this
    console.log(that.data.textarea)
    if (that.data.textarea == "" && that.data.redioNum == "4"){
      that.setData({
        validate: true,
      });
    }else{
      that.setData({
        validate: false,
      });
      console.log("提交")
    }
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})