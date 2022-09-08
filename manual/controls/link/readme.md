纯文本的超链接。

## API

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `href` | `string` | - | 超链接指向的 URL，与 HTML 原生的 [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) 属性相同 |
| `target` | `'self' | 'blank' | 'parent' | 'top'` | `'self'` | 打开超链接的位置，与 HTML 原生的 [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) 属性类似 |
| `onClick` | `() => void` | - | 点击超链接时的回调函数 |
{:.table.table-bordered}
