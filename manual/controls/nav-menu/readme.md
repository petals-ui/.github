为网站或 Web 应用提供导航功能的菜单列表。

## API

### `NavMenu`

导航菜单。

在 `Menu` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `direction` | `'horizontal' | 'vertical'` | `'vertical'` | 菜单条目平铺方向 |
| `subMenuTrigger` | `'hover' | 'click'` | `'hover'` | 子菜单伸缩/弹出的触发方式 |
| `collapsed` | `boolean` | `false` | 菜单是否收起 |

### `NavSubMenu`

导航子菜单，需要多级菜单时使用。

在 `MenuItem` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `popupClassName` | `string` | - | 子菜单弹出层类名 |

### `NavMenuItem`

导航菜单条目。

在 `MenuItem` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `href` | `string` | - | 要跳转的目标 URL |

### `NavMenuItemGroup`

导航菜单条目分组。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `flag` | `string` | - | 唯一标识 |
| `title` | `string` | - | 分组标题 |
