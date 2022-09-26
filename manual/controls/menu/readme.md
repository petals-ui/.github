「菜单」类 UI 组件的基类，提供统一的 API。

## API

### `Menu`

菜单。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `defaultActiveFlag` | `string` | - | 初始激活的菜单条目 |
| `activeFlag` | `string` | - | 当前激活的菜单条目 |
| `defaultOpenFlags` | `string[]` | - | 初始展开的子菜单条目 |
| `openFlags` | `string[]` | - | 当前展开的子菜单条目 |

### `MenuItem`

菜单条目。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `flag` | `string` | - | 唯一标识 |
| `title` | `string` | - | - |
| `icon` | `string` | - | 文本前的图标 |
| `disabled` | `boolean` | `false` | 是否禁用 |
