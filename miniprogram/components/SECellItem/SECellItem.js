// components/SECellItem/SECellItem.js
Component({
  options: {
    styleIsolation: 'apply-shared', //关闭小程序样式隔离，可应用全局样式
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value:''
    },
    content:{
      type: String,
      value:''
    },
    description:{
      type: String,
      value:''
    },
    isLink:{
      type: Boolean,
      value: false
    },
    arrow:{
      type: Boolean,
      value: false
    },
    border:{
      type: Boolean,
      value: false
    },
    to:{
      type: Object,
      value: {}
    },
    disabled:{
      type:Boolean,
      value: false
    },
    cardFirst:{
      type:Boolean,
      value: false
    },
    cardLast:{
      type:Boolean,
      value: false
    }
  },
  

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached(){},

  /**
   * 组件的方法列表
   */
  methods: {
    toPage(){
      if(this.properties.disabled) return;
      if(JSON.stringify(this.properties.to) == "{}") return;
      const {type,url} = this.properties.to;
      if(type==='page'){
        wx.navigateTo({
          url: url,
        })
      }else{
        wx.switchTab({
          url: url,
        })
      }
    }
  }
})
