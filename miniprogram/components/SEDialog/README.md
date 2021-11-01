## Dialog 弹出层
### Props

| 参数         | 说明                                             | 类型                    | 可选值               | 默认值 |
| ------------ | ------------------------------------------------ | ----------------------- | -------------------- | ------ |
| type         | alert：提示框 confirm：确认框 prompt：提示输入框 | string                  | alert/confirm/prompt | alert  |
| visible      | 显示状态，是否可见。                             | Boolean                 | true/false           | false  |
| title        | Dialog标题                                       | string                  | --                   | ’提示‘ |
| content      | Dialog内容                                       | string                  | --                   | ’ ‘    |
| showClose    | 是否显示关闭图标                                 | boolean                 | --                   | true   |
| contentAlign | 内容对齐方式                                     | string                  | left/center/right    | center |
| actions      | 底部操作按钮组                                   | Array<DialogBtnOptions> | []                   | --     |



#### DialogBtnOptions Props

| 属性     | 说明         | 类型                            | 默认值 |
| -------- | ------------ | ------------------------------- | ------ |
| text     | 按钮文案     | String                          | --     |
| btnClick  | 点击回调     | Function(btn: DialogBtnOptions) | --     |
| disabled | 是否禁用按钮 | Boolean                         | false  |

### Methods

| 方法名 | 说明     |
| ------ | -------- |
| show   | 展示弹窗 |
| hide   | 关闭弹窗 |



### slot
输入框可以放在slot内，也可以使用type="prompt" 使用默认组件的输入框

| name    | 说明                            |
| ------- | ------------------------------- |
| content | 弹窗内容，与属性content功能一致 |

