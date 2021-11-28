## CellItem 列表单元

### Props

| 参数    | 说明                   | 类型    | 可选值                                                       | 默认值  |
| ------- | ---------------------- | ------- | ------------------------------------------------------------ | ------- |
| title   | 左侧标题               | string  | --                                                           | --      |
| content | 右侧内容               | string  | --                                                           | --      |
| desc    | 标题下方描述信息       | string  | --                                                           | --      |
| icon    | 左侧图片名称或图片链接 | string  | 预设icon名称后续补充                                         | --      |
| size    | 单元格大小             | string  | default/large                                                | default |
| to      | 跳转的链接             | object  | 在原有小程序[跳转参数](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)的基础上增加 type:'page'/'tabPage' | --      |
| isLink  | 是否开启点击反馈       | Boolean | false/true                                                   | false   |
| arrow   | 是否有右侧箭头         | Boolean | false/true                                                   | false   |



### Methods

### slot

| name  | 说明                  |
| ----- | --------------------- |
| --    | 自定义右侧content区域 |
| title | 自定义左侧title区域   |
| icon  | 自定义左侧icon区域    |

