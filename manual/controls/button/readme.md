最常用的操作触发器。

## API

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `size` | `'small' | 'medium' | 'large'` |  | 按钮的尺寸 |
| `border` | `'solid' | 'dashed' | 'none'` | `'solid'` | 按钮的边框类型 |
| `color` | `'primary' | 'danger' | string` | - | 按钮的颜色，会影响边框色、背景色和文本色等，预置 `'primary'` 和 `'danger'` 两种，可自行扩展 |
| `outlined` | `boolean` | `false` | 是否为线框按钮，值为 `true` 时按钮无背景色填充 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `nativeType` | `'button' | 'submit' | 'reset'` | `'button'` | HTML 原生的[类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) |
| `onClick` | `() => void` | - | 单击时的回调函数 |
{:.table.table-bordered}
