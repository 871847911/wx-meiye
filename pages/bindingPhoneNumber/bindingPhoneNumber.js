// pages/paySuccess/paySuccess.js
var interval = null //倒计时函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:"hide",
    disabled:'true',
    vcodeDisabled:'true',
    phone:'',
    pop:'hide',
    disabledd:false,
    poptext:'手机号码已被绑定',
    time: "获取验证码",
    currentTime :60,
    vcode:"vcodeRed",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        disabledd: true,
        vcode: "vcodeblack",
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 60,
          disabledd: false,
          vcode:"vcodeRed",
        })
      }
    }, 1000)
  },
  validate:function(e){
    var that = this;
    var phone = e.detail.value
    console.log(phone)
    if (phone==''){
      that.setData({
        state: "hide",
        vcodeDisabled: 'true',
      });
    }else{
      if (that.validatemobile(phone)) {
        that.setData({
          state: "hide",
          vcodeDisabled: 'false',
          phone:phone,
        });
      } else {
        that.setData({
          state: "show",
          vcodeDisabled: 'true',
        });
      }
    }
  },
  validatemobile: function (mobile) {
    if (mobile.length == 0) {
      return false;
    }
    if (mobile.length != 11) {
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      return false;
    }
    return true;
  },
  validateVcode:function(e){
    var phone = this.data.phone
    var that = this
    var vcode = e.detail.value
    if (phone!=''&&vcode!=''){
      that.setData({
        disabled:""
      });
    }else{
      that.setData({
        disabled: "true"
      });
    }

  },
  getVcode:function(){
    var that = this;
    if (this.data.vcodeDisabled=='true'){
      console.log("按钮不可用")
    }else{
      if (that.data.vcode == "vcodeblack") {

      } else {
        that.getCode()
        var phone = this.data.phone
        wx.request({
          url: "http://192.168.1.206:611/user/queryUserByPhone?phone=" + phone,
          method: "PUT",
          header: {
            "Accept": "*/*"
          },
          data: {

          },
          success: function (res) {
            console.log(res.data.message)
            if (res.data.message == "该手机号未绑定") {


            } else {
              that.setData({
                pop: 'show',
                poptext: '手机号码已被绑定',
              });
              setTimeout(function () {
                that.setData({
                  pop: 'hide',
                });
              }, 2000)
            }
          }
        })
      }
    }
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})