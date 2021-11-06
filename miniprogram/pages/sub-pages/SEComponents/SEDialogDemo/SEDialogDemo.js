// pages/sub-pages/SEComponents/SEDialogDemo/SEDialogDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actions:[],
    dialog1:undefined,
    dialog2:undefined,
    dialog3:undefined,
    dialog4:undefined,
    dialog5:undefined,
    content:'1',
    tipActions:[],
    animationName:'',
    visi:false
  },
  showDialog(e){
    let { route } = e.currentTarget.dataset
    route = Number(route)
    this.setData({
      actions:[
        {
          text:'取消',
          btnClick: ()=>{this.[`dialog${route}`].hide()}
        },
        {
          text:'确定',
          btnClick: (res)=>{
            if(res){
              console.log('我是输入的数据',res)
            }
            this.[`dialog${route}`].hide()
            this.setData({
              content:233,
            })
            console.log(this.data.content)
          }
        }],
    })
    switch(route){
      case 1:
        this.setData({
          tipActions: [{text:'知道了',btnClick:()=>{
            this.setData({
              animationName: 'animation-fade'
            })
            this.dialog1.hide()
          }}],
        })
        this.dialog1.show()
        break;
      case 2:
        this.dialog2.show()
        break;
      case 3:
        this.dialog3.show()
        break;
      case 4:
        this.dialog4.show()
        break;
      case 5:
        this.dialog5.show()
        break;
      default:
        return;
    }
    
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
    this.dialog1 = this.selectComponent(".dialog1")
    this.dialog2 = this.selectComponent(".dialog2")
    this.dialog3 = this.selectComponent(".dialog3")
    this.dialog4 = this.selectComponent(".dialog4")
    this.dialog5 = this.selectComponent(".dialog5")
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