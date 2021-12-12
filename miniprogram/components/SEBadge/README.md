## Badge 徽标

组件设计学习自uView2.0

### Props

| 参数       | 说明                                                         | 类型          | 可选值                    | 默认值   |
| ---------- | ------------------------------------------------------------ | ------------- | ------------------------- | -------- |
| dot        | 只展示一个小点                                               | Boolean       | true/false                | false    |
| value      | 展示的数字或字符串                                           | String/Number | --                        | --       |
| max        | 超过最大值会显示‘{max}+’                                     | Number        | >0                        | -1       |
| bgColor    | 背景颜色                                                     | String        | --                        | --       |
| color      | 字体颜色                                                     | String        | --                        | --       |
| shape      | 徽标形状                                                     | String        | circle-圆形/horn-直角边形 | circle   |
| absolute   | 是否开启绝对定位，开启时，offset有效                         | Boolean       | true/false                | false    |
| offset     | 设置badge的位置偏移，格式为[x,y],也即设置的为top和right的值，absolute为true时有效 | Array         | --                        | [0,0]    |
| numberType | 置数字的显示方式                                             | String        | overflow/ellipsis/limit   | overflow |

注：

- overflow - 超过max显示max+
- ellipsis - 超过max 显示max...
- limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数

### Events

| 方法名 | 说明 |
| ------ | ---- |
| click  | --   |

### slot

| name | 说明 |
| ---- | ---- |
|      |      |

