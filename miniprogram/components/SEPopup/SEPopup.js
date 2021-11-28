// components/SEPopup/SEPopup.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared', //关闭小程序样式隔离，可应用全局样式
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    vModel:{
      type:Boolean,
      value: null
    },
    position:{
      type:String,
      value: 'bottom'
    },
    bgColor:{
      type:String,
      value: '#FFF'
    },
    closeable:{
      type: Boolean,
      value: false
    },
    round:{
      type: Boolean,
      value: false,
    },
    maskClosable:{
      type: Boolean,
      value: true
    },
    overlayClass:{
      type:String,
      value:''
    },
    overlay:{
      type:Boolean,
      value: true
    },
    popClass:{
      type:String,
      value: ''
    },
    height:{
      optionalTypes:[String,Number],
      value:''
    },
    overlayBlur:{
      type:Boolean,
      value:false
    }
  },
  observers:{
    'height,bgColor':function(height,bgColor){
      this.setData({
        styleVars:
        `
        --boxHeight:${height}rpx;
        --bgColor:${bgColor};
        `
      })
    },
    // 根据参数设置不同方向的出现动画
    'position': function(position){
      let animationName = '';
      switch(position){
        case 'top':
        animationName = 'slide-in-down';
        break;
        case 'left':
        animationName = 'slide-in-left';
        break;
        case 'right':
        animationName = 'slide-in-right';
        break;
        case 'bottom':
        animationName = 'slide-in-up';
        break;
        case 'center':
        animationName = 'zoom-in';
        break;
      }
      this.setData({
        entranceAnimation:`animation-${animationName}`
      })
    },
    'round': function (round){
      if(round){
        this.setData({
          roundClassName:`round-${this.properties.position}`
        })
      }
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationFadeOut:'',
    contentExit:'',
    entranceAnimation:'',
    animationExec:false,
    roundClassName:'',
    styleVars:''
  },
  attached(){
    console.log(this.properties.position)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    preventDefault(e) {
      return;
    },
    hideOverlay(){
      if(this.data.animationExec || !this.properties.maskClosable) return;
      // 根据参数设置不同方向的消失动画
      let exitAnimation = '';
      switch(this.properties.position){
        case 'top':
          exitAnimation = 'slide-out-up';
        break;
        case 'left':
          exitAnimation = 'slide-out-left';
        break;
        case 'right':
          exitAnimation = 'slide-out-right';
        break;
        case 'bottom':
          exitAnimation = 'slide-out-down';
        break;
        case 'center':
          exitAnimation = 'zoom-out';
        break;
      }
      this.setData({
        animationFadeOut:'animation-fade-out',
        contentExit:`animation-${exitAnimation}`
      })
    },
    hidePopup(){
      this.setData({
        animationExec:false
      })
      if(this.data.animationFadeOut === '') return;
      this.setData({
        vModel:false,
        animationFadeOut:'',
        contentExit:'',
      })
    },
    tapContent(){
      console.log(233)
      return;
    },
    animationStart(){
      this.setData({
        animationExec: true,
      })
    }

  }
})
