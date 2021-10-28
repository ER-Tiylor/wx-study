// pages/sub-pages/SEComponents/SEDialogDemo/SEDialogDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actions:[],
    dialog:undefined,
    content:'1'
  },
  showDialog(){
    this.setData({
      actions:[{
        text:'取消',
        btnClick: this.dialog.hide.bind(this.dialog)
      },
      {
        text:'确定',
        btnClick: ()=>{
          this.dialog.hide()
          this.setData({
            content:233,
          })
          console.log(this.data.content)
        }
      }],
    })
    this.dialog.show()
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
    this.dialog = this.selectComponent(".dialog")
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