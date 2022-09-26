「表单控件」即数据录入类控件的基类，提供统一的 API。

## API

### `FormControl<ValueType>`

基本表单控件。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `name` | `string` | - | HTML 原生的 [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name) 属性 |
| `value` | `ValueType` | - | 控件的值 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `onChange` | `(value: ValueType) => void` | - | 控件的值发生变化时的回调函数 |

### `CheckableFormControl`

可勾选表单控件，用于有「勾选」或类似交互的控件。

在 `FormControl<ValueType>` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | 是否选中 |

### `InputtableFormControl<ValueType, InputValueType = ValueType>`

可输入表单控件，用于以手动输入为主的控件。

在 `FormControl<ValueType>` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `placeholder` | `string` | - | 空值时的占位提示文本 |
| `clearable` | `boolean` | `true` | 是否可一键清除控件的值 |
| `size` | `'small' | 'medium' | 'large'` | - | 控件的尺寸 |
| `onInput` | `(value: InputValueType) => void` | - | 键入字符时的回调函数 |

### `TextualFormControl`

文本表单控件，用于输入文本类数据的控件。

在 `InputtableFormControl<ValueType, InputValueType = ValueType>` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `minLength` | `number` | - | 可输入的最小长度 |
| `maxLength` | `number` | - | 可输入的最大长度 |

### `NumericFormControl`

数值表单控件，用于输入数值类数据的控件。

在 `InputtableFormControl<ValueType, InputValueType = ValueType>` 的基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `min` | `number` | - | 可输入的最小值 |
| `max` | `number` | - | 可输入的最大值 |
| `step` | `number` | `1` | 点击增减按钮时改变的步数 |

### `DateFormControl<ValueType, PickerOption>`

日期表单控件，用于单个日期类数据的控件。

`ValueType` 是 `number | string | Date`，即控件的值可以是 [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象、时间戳或符合[日期格式](https://dayjs.gitee.io/docs/zh-CN/parse/string)的字符串。

从 `InputtableFormControl<ValueType, InputValueType = ValueType>` 中移除了 `onChange` 与 `onInput`，并在其基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `inputtable` | `boolean` | `true` | 输入框是否可输入 |
| `format` | `string` |  | 显示的[日期格式](https://dayjs.gitee.io/docs/zh-CN/display/format) |
| `pickerOption` | `PickerOption` | - | 拾取器选项，详见具体控件 |
| `popupClassName` | `string` | - | 弹出层的额外 class |
| `onChange` | `(value: ValueType, date: Date | null) => void` | - | 选择日期发生变化时的回调函数 |

### `DateRangeFormControl<ValueType, PickerOption>`

日期范围表单控件，用于日期范围类数据的控件。

`ValueType` 是 `(number | string | Date)[]`，即控件的值可以是 [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象、时间戳或符合[日期格式](https://dayjs.gitee.io/docs/zh-CN/parse/string)的字符串。数组中的第一项为起始值，第二项为终止值。

从 `DateFormControl<ValueType, PickerOption>` 中移除了 `onChange`，并在其基础上新增：

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `placeholder` | `string[]` | - | 空值时的占位提示文本，数组中第一项为起始值的，第二项为终止值的 |
| `separator` | `string` | `-` | 起始值与终止值间的分隔符 |
| `onChange` | `(value: ValueType, dates: (Date | null)[]) => void` | - | 选择日期发生变化时的回调函数 |
