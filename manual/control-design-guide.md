# 控件设计指南

当设计一个控件时，应该考虑的事情。

## API 设计

### 设计原则

### 组件属性

属性列表：

| 语义 | 属性名 | 值类型/可选值 | 说明 |
| --- | --- | --- | --- |
| 自定义类名 | `className` | 视情况而定 | - |
| 自定义样式 | `style` | `object` | - |
| 当前值 | `value` | 视情况而定 | 受控 |
| 默认值 | `defaultValue` | 视情况而定 | 非受控 |
| 尺寸 | `size` | `'large' \| 'medium' \| 'small'` | - |
| 形状 | `shape` | 视情况而定 | - |
| 可清除 | `clearable` | `boolean` | - |
| 可搜索 | `searchable` | `boolean` | - |
| 唯一标识 | `flag` | `string \| number` | 相当于 `key`，默认生成时以数组索引为依据，而不是「第几个」 |
| 当前激活项标识 | `activeFlag` | `string \| number` | 相当于 `activeKey`，默认生成时是数组索引下标 `0`，而不是「第一个」的 `1` |
| 数据源 | `dataSource` | `object \| object[]` | - |
| 位置 | `placement` | 视情况而定 | 有的组件可以指定出现（放置）的「位置」，这种场景用 `placement` 而不用 `position` |
| 触发方式 | `trigger` | 视情况而定 | - |
| 弹出层类名 | `popupClassName` | 视情况而定 | - |

### 组件事件

事件列表：

| 语义 | 事件名 | 回调函数 | 说明 |
| --- | --- | --- | --- |
| 弹出层可见性变化 | `onVisibleChange` | `(visible: boolean) => void` | - |

### 为何是 A 非 B

记录在做 API 设计时的抉择。

#### A = `operationText`，B = `operations`

在自定义 `Transfer` 的操作文案时，Ant Design 和 iView 的相关 API 命名为 `operations`，Element 为 `button-texts`。

由于「操作」在视觉上未必是「按钮」的形态，选择语义更为泛化一些的 `operation` 比 `button` 合适。

并且，可自定义的只有文案，单纯的 `operation` 在语义上所包含的内容更多一些，因此要加上 `text` 去限制住理解上的「可自定义的范围」。

另外，在计算机相关场景中，`text` 是不可数名词。
