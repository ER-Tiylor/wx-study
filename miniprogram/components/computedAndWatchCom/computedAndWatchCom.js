// pages/components/computedAndWatchCom.js
import { behavior as computedBehavior } from 'miniprogram-computed'
Component({
  behaviors:[computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },
   /**
   * 组件的初始数据
   */
  data: {
    numberA:1,
    numberB:2,
    product:null
  },
  computed:{
    sum(data){
      return data.numberA + data.numberB
    }
  },
  watch:{
    'numberA,numberB':function(a,b){
      this.setData({
        product: a * b
      })
    }
  },

 

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.setData({
        numberA:this.data.numberA+1
      })
    }
  }
})
