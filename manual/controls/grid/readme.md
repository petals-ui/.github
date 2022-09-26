24 栅格系统。

## API

### `GridRow`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `gutter` | `number` | `0` | 栅格间隔，以 `px` 为单位，左右平分 |

### `GridCol`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `span` | `number` | - |  |
| `offset` | `number` | - |  |
| `xs` | `number | GridCellAreaOption` | - | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| `sm` | `number | GridCellAreaOption` | - | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| `md` | `number | GridCellAreaOption` | - | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| `lg` | `number | GridCellAreaOption` | - | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |
| `xl` | `number | GridCellAreaOption` | - | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 |

栅格的响应式断点借鉴自 [Bootstrap 5](https://getbootstrap.com/docs/5.1/layout/breakpoints/)。
