// components/SEBadge/SEBadge.js
Component({
  /**
   * 组件的属性列表
   */
  // 参考自uview2.0
  properties: {
    dot:{ //只展示一个小点
      type:Boolean,
      value: false
    },
    value:{ //展示的数字或字符串(0默认不展示)
      optionalTypes:[String,Boolean],
      value:''
    },
    max:{ //超过最大值会显示 '{max}+'
      type: Number,
      value: 0
    },
    bgColor:{//背景颜色
      type: String,
      value: '#FF4949'
    },
    color:{//字体颜色
      type: String,
      value: "#FFF"
    },
    shape:{//徽标形状 horn-直角边形
      type: String,
      value: 'circle'
    },
    absolute:{ //是否开启绝对定位，开启时，offset有效
      type: Boolean,
      value: false
    },
    offset:{//设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
      type: Array,
      value: [0,0]
    },
    numberType:{  //置数字的显示方式， ellipsis，大于max-省略号 / limit-
      type:String,
      value: 'overflow' //超过max显示max+
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text:'',
    styleVars:''
  },
  attached(){
    this.setData({
      styleVars:
      `
      --bgColor: ${this.properties.bgColor};
      --textColor: ${this.properties.color};
      --top: ${this.properties.offset[0]}rpx;
      --right: ${this.properties.offset[1]}rpx;
      `
    })
  },

  observers:{
    'value': function(value){
      const {max,numberType} = this.properties;
      let temp = ''
      if(max && numberType==='overflow'){
        temp = value>max?`${max}+`:value
      }else if(max && numberType === 'ellipsis'){
        temp = value>max?`${max}...`:value
      }else if(numberType === 'limit'){
        temp = Number(value) > 999 ? Number(value) >= 9999 ?
							Math.floor(value / 1e4 * 100) / 100 + "w" : Math.floor(value /
								1e3 * 100) / 100 + "k" : value
      }else{
        temp = value
      }
      
      this.setData({
        text:temp
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
