// components/SEDialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // type   alert：提示框 confirm：确认框 prompt：提示输入框 
    type:{
      type: String,
      value: "confirm"
    },
    title:{
      type: String,
      value: '标题'
    },
    content:{
      type: String,
      value: ''
    },
    showClose:{
      type: Boolean,
      value: false
    },
    contentAlign:{
      type: String,
      value: "center"
    },
    actions:{
      type:Array,
      value:[
        {text:'取消',btnClick:()=>{console.log('点击了左按钮')}},
        {text:'确定',btnClick:()=>{console.log('点击了右按钮')}}
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false
  },
  attached: function () {
    console.log(this.properties.showClose)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapLeft(){
      this.data.actions[0].btnClick()
    },
    tapRight(){
      this.data.actions[1].btnClick()
    },
    show(){
      this.setData({
        visible: true
      })
    },
    hide(){
      this.setData({
        visible: false
      })
    }
  }
})
