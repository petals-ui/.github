可分页的表格。

## API

下拉菜单与触发器的容器。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `dataSource` | `Record<string, any>[]` | `[]` | 表格的数据源 |
| `columns` | `ColumnProps[]` | `[]` | 表格列的配置信息，详见下方 |
| `rowKey` | `string | ((record: Record<string, any>) => string)` | `'id'` | 表格行的唯一标识 |
| `loading` | `boolean` | `false` | 是否正在加载数据，会显示加载状态 |
| `hidePagination` | `boolean` | `false` | 是否隐藏分页 |
| `autoHeight` | `boolean` | `false` | 内容区是否自动撑高 |
| `currentPage` | `number` | `1` | 当前页数 |
| `pageSize` | `number` | `20` | 每页数据条数 |
| `total` | `number` | `0` | 数据总条数 |
| `pageSizes` | `number[]` | `[10, 20, 50, 100]` | 可选每页数据条数选项 |
| `onSelectionChange` | `(records: Record<string, any>[]) => void` | - | 通过多选框选中行数据时的回调函数，参数是已选中的行数据 |
| `onCurrentChange` | `(currentPage: number) => void` | - | 当前页发生变化（即翻页）时的回调函数，参数是新的页数 |
| `onSizeChange` | `(pageSize: number) => void` | - | 每页数据条数发生变化时的回调函数，参数是新的每页条数 |
{:.table.table-bordered}

### `columns`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | - | 列标题 |
| `key` | `string` | - | 从行数据中取值的键名（字段） |
| `type` | `'index' | 'selection' | 'expand'` | - | 列类型，值为 `'index'` 时显示序号，为 `'selection'` 时显示多选框，为 `'expand'` 时显示可展开按钮 |
| `width` | `number | string` | - | 列宽 |
| `minWidth` | `number | string` | - | 最小宽度 |
| `maxWidth` | `number | string` | - | 最大宽度 |
| `align` | `'left' | 'center' | 'right'` | `'left'` | 文本对齐方式 |
| `fixed` | `'left' | 'right'` | - | 固定列在左侧或右侧 |
| `ellipsis` | `boolean` | `false` | 文本在一行内显示，并且超出宽度部分显示省略号，悬停会有工具提示 |
| `resizable` | `boolean` | `false` | 列是否可以拖拽改变宽度 |
| `render` | `(info: { row: Record<string, any>; column: ColumnProps; index: number }, renderFunction: CreateElement) => NodeType` | - | 自定义单元格内容，参数为包含行数据、列配置和行索引的对象，在某些环境（如 Vue）中会将渲染函数作为第二个参数传入，返回值类型 `NodeType` 在不同环境中不同——Vue 中是 `VNode`，React 中是 `ReactNode`，以此类推 |
{:.table.table-bordered}
