用于在多个可选项中进行多选。

## API

在 `FormControl<ValueType>` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `dataSource` | `TransferValue[]` | `[]` | 数据源，除了 `value` 指定的数据之外将会被渲染到左侧列表中，具体结构详见下方 |
| `titles` | `string[]` | `['备选', '已选']` | 两个列表的标题，数组中第一项为左侧的，第二项为右侧的 |
| `operationText` | `string[]` | `['', '']` | 操作的文案，数组中第一项为从左到右的，第二项为从右到左的 |
| `filterable` | `boolean` | `false` | 是否可过滤选项 |
| `onSelect` | `(sourceSelected: string[], targetSelected: string[]) => void` | - | 选中项发生改变时的回调函数 |
{:.table.table-bordered}

### `dataSource`

每条数据的结构为：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `key` | `string` | - | 值 |
| `label` | `string` | - | 显示的文本 |
| `description` | `string` | - | 描述信息 |
| `disabled` | `boolean` | `false` | 是否禁用 |
{:.table.table-bordered}
