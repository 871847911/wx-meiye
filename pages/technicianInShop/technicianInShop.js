// pages/paySuccess/paySuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    twoList: [{
      id: 1,
      name: '应季鲜果',
      count: 1,
      twodata: [{
        'id': 11,
        'name': '鸡脆骨'
      }, {
        'id': 12,
        'name': '鸡爪'
      }, {
        'id': 13,
        'name': '鸡爪2'
      }, {
        'id': 14,
        'name': '鸡爪3'
      }, {
        'id': 15,
        'name': '鸡爪4'
      }, {
        'id': 16,
        'name': '鸡爪5'
      }, {
        'id': 17,
        'name': '鸡爪6'
      }]
    }, {
      id: 2,
      name: '精致糕点',
      count: 6,
      twodata: [{
        'id': 13,
        'name': '羔羊排骨一条'
      }, {
        'id': 14,
        'name': '微辣'
      }]
    }]
  },
  gohisService: function () {
    wx.navigateTo({
      url: '../technicianDetails/technicianDetails',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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