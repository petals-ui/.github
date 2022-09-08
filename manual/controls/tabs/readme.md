将平级的内容按类别聚合的容器。

## API

### `Tabs`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `theme` | `'line' | 'card'` | `'card'` | 选项卡的风格 |
| `fixed` | `boolean` | `false` | 内容区域高度是否固定 |
| `activeFlag` | `number | string` | - | 激活的选项卡 |
| `tabBarPlacement` | `'top' | 'right' | 'bottom' | 'left'` | `'top'` | 选项卡栏的位置 |
| `tabBarStretch` | `boolean` | `false` | 选项卡栏中标签宽度是否拉伸 |
| `onChange` | `(activeFlag: number | string) => void` | - | 切换选项卡面板时的回调函数 |
{:.table.table-bordered}

### `TabPane`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `flag` | `number | string` | - | 选项卡面板的唯一标识 |
| `label` | `string` | - | 显示在选项卡栏中面板对应的文本 |
{:.table.table-bordered}
