## Popup 弹出层

popup一般用于移动端, 显示小段信息, 一般只有一层. 

### Props

| 参数         | 说明             | 类型          | 可选值                       | 默认值 |
| ------------ | ---------------- | ------------- | ---------------------------- | ------ |
| v-model      | 是否显示弹出层   | Boolean       | true/false                   | false  |
| position     | 弹出位置         | String        | top/right/bottom/left/center | bottom |
| bgColor      | 弹出层背景颜色   | String        | --                           | #FFF   |
| closeable    | 是否显示关闭图标 | Boolean       | true/false                   | false  |
| round        | 是否显示圆角     | Boolean       | true/false                   | false  |
| overlayClass | 遮罩层类名       | String        | --                           | --     |
| overlay      | 是否展示遮罩层   | Boolean       | true/false                   | true   |
| popClass     | 弹出层类名       | String        | --                           | --     |
| height       | 弹出层高度       | String/Number | --                           | --     |
| overlayBlur  | 遮罩层模糊效果   | Boolean       | true/false                   | false  |

### Events

| 方法名 | 说明           |
| ------ | -------------- |
| open   | 打开弹窗时触发 |
| close  | 关闭弹窗时触发 |

### slot

| name    | 说明             |
| ------- | ---------------- |
| default | 弹出内容默认插槽 |

