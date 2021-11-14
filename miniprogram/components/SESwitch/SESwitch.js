// components/SESwitch/SESwitch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    vModel:{
      type:Boolean,
      value: false
    },
    activeColor:{
      type: String,
      value:'#2979FF'
    },
    inactiveColor:{
      type: String,
      value: '#e2e4ea'
    },
    disabled:{
      type: Boolean
    },
    loading:{
      type: Boolean
    },
    size:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    status:false,
    styleVars:''
  },
  observers:{
    'vModel':function(vModel){
      this.setData({
        status: vModel
      })
    }
  },
  attached(){
    console.log(this.properties.activeColor)
    this.setData({
      styleVars:`
       --activeColor:${this.properties.activeColor};
       --inactiveColor:${this.properties.inactiveColor};
       `
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStatus(){
      if(this.properties.disabled) return;
        this.setData({
          status:!this.data.status
        })
      this.triggerEvent('change',this.data.status)
    }
  }
})
