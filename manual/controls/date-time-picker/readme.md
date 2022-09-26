输入或选择日期时间，若要选择日期时间范围，请用日期时间范围拾取器。

## API

与 `DateFormControl<ValueType, PickerOption>` 一致。

### `pickerOption`

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `disableDate` | `(date: Date) => boolean` | - | 设置不可选择的日期，返回 `true` 会禁用 |
| `showNow` | `boolean` | `true` | 是否显示「此刻」快捷选择 |
