//index.js
//获取应用实例
  const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    
  },
  //获取位置信息
  getloaction:function(e){
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log("位置信息",res);
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
  },
  //点击进入具体位置信息
  getlocation:function(){
    wx.openLocation({

      latitude: 29.9154712894,
      longitude: 121.5408360958

    })
  },
  bindGetUserInfo: function (e) {
    wx.setStorage({
      key: 'userInfo',
      data: e.detail.userInfo
    });
    wx.navigateTo({
      url: '../personalInformation/personalInformation',
    })
  },
  //上传后台个人信息位置

  //拿到距离信息

  //点击显示联系方式
  show_iphone:function(){
    wx.showActionSheet({
      itemList: ['18xxxxxxx', '00000_00000'],
      success: function (res) {
        console.log(res.tapIndex)
        if(res.tapIndex == 0 ){
          wx.makePhoneCall({
            phoneNumber: '1340000' //仅为示例，并非真实的电话号码
          })
        }else {
          wx.makePhoneCall({
            phoneNumber: '1340000' //仅为示例，并非真实的电话号码
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  //跳转预约页面
  gotoOrder:function(){
    wx.navigateTo({
      url: '../serviceInOurShop/serviceInOurShop',
    })
  }
})
