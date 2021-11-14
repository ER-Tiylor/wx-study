## Switch 开关

### Props

| 参数           | 说明           | 类型    | 可选值               | 默认值  |
| -------------- | -------------- | ------- | -------------------- | ------- |
| v-model        | 开关选中状态   | Boolean | true/false           | false   |
| loading        | 是否处于加载中 | Boolean | true/false           | false   |
| disabled       | 是否为禁用状态 | Boolean | true/false           | false   |
| size           | 开关大小预设   | String  | small/middle/default | default |
| active-color   | 打开时的背景色 | String  | --                   | #2979FF |
| inactive-color | 关闭时的背景色 | String  | --                   |         |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| change | 切换开关时触发 | value: Boolean |



##### 提示：异步用法

```html
<!-- wxml -->
<SESwitch bind:change="asyncSwitch" loading='{{loading}}' v-model="{{switchStatus}}"/>
```

```javascript
//js
data: {
    switchStatus:false,
    loading: false
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
```

