// pages/storedetails/storedetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    test:["","","","","",""],
    isMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getServiceType();
  },
  lookimg:function(e){
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id
    var urls = this.data.imgUrls;
    wx.previewImage({
      current: urls[id], // 当前显示图片的http链接
      urls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'] // 需要预览的图片http链接列表
    })
  },
//获取店面展示图片

//获取服务类型
getServiceType:function(){
  var that = this;
  
 if(this.data.test.length > 5){
  that.setData({
    isMore:false
  })
 }
},
//点击显示联系方式
show_iphone: function () {
  wx.showActionSheet({
    itemList: ['18xxxxxxx', '00000_00000'],
    success: function (res) {
      console.log(res.tapIndex)
      if (res.tapIndex == 0) {
        wx.makePhoneCall({
          phoneNumber: '1340000' //仅为示例，并非真实的电话号码
        })
      } else {
        wx.makePhoneCall({
          phoneNumber: '1340000' //仅为示例，并非真实的电话号码
        })
      }
    },
    fail: function (res) {
      console.log(res.errMsg)
    }
  })
}
})