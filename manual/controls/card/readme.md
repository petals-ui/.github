文本、图片、图标、列表等信息的容器，其所承载的信息一定是简洁的而非繁重的，可用于详情页的入口，如：列表条目、任务简介等。

## API

### `Card`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | - | 显示在头部中的标题，当子组件中有 `CardHeader` 时失效 |
| `bodyClassName` | `string` | - | 内容主体容器的自定义 `class` |
| `bodyStyle` | `{ [key: string]: string }` | - | 内容主体容器的自定义 `style` |

### `CardHeader`

当卡片头部不止显示标题时使用。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | - | 显示在头部中的标题 |
| `image` | `string` | - | 显示在头部中的图片的 URL，与组件的子组件互斥，只能存在其一 |

### `CardFooter`

无。
