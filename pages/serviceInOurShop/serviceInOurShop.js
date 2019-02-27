// pages/paySuccess/paySuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    pages: ['服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称', '服务类型名称'],
    scroll: true,
    second_height: 0,
    key:0
  },
  kindToggle: function(e) {
    if (this.data.open == true) {
      this.setData({
        open: false,
      });
    } else {
      this.setData({
        open: true,
      });
    }
  },
  closepup:function(){
    this.setData({
      open: false,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changColor: function (e) {
    console.log(e)
    this.setData({
      key: e.target.dataset.index,
      open: false,
    })
  },
  goDetails:function(){
    wx.navigateTo({
      url: '../serviceDetails/serviceDetails',
    })
  },
  //滚动监听

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