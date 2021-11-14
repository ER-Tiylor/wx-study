// pages/sub-pages/SEComponents/SESwitchDemo/SESwitchDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchStatus:false,
    loading: false
  },
  getStatus(e){
    wx.showModal({
      content:`当前状态是：${e.detail}`,
      showCancel: false
    })
  },
  // 参考自uView的switch设计，
  // 异步切换场景，发生在点击之后，发请求或处理后确定打开与否，这里的思路是仍然监听change事件，
  // 当切换为true/false时，重新置为其相反值，此时将loading打开，取消或确定后将loading关闭
  asyncSwitch(e){
    if(e.detail===true){
      this.setData({
        switchStatus: false,
        loading: true
      })
    }
    const that = this;
    if(this.data.switchStatus) return;
    wx.showModal({
      content:`是否要打开呢？`,
      success (res) {
        if (res.confirm) {
          console.log(345)
          that.setData({
            switchStatus: true,
            loading: false
          })
        } else if (res.cancel) {
          console.log(233)
          that.setData({
            switchStatus: false,
            loading: false
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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