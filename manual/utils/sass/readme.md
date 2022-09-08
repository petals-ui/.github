## Variables

### `$petals--optimize-legibility`

是否优化易读性，开启后字体会变得更细、更清晰，默认为 `false`。

### `$petals--component-prefix`

控件类选择器前缀，起到命名空间的作用，默认为 `""`。

## Functions

### `get-selector($component-name)`

获取控件类选择器。若通过 `$petals--component-prefix` 指定了控件名前缀，则将其拼接到控件名前面且用 `-` 连接。

### `whether-zero-pixel($number)`

判断传入值的计算结果是否为 `0px`，即 `$number` 为 `0`、`0px` 或 `0%`。

### `whether-non-zero($number)`

判断传入值的计算结果是否不是 `0px`，是 `whether-zero-pixel($number)` 的取反。

### `half($number)`

取传入值的一半。

### `add($value1, $value2, $return-calc: true)`

加法运算。`$value1` 或 `$value2` 为 `null` 时，作 `0` 处理，当它们都为数值时返回相加后的值，否则根据 `$return-calc` 决定是进行值计算还是字符拼接。

### `subtract($value1, $value2, $return-calc: true)`

减法运算。`$value1` 或 `$value2` 为 `null` 时，作 `0` 处理，当它们都为数值时返回相减后的值，否则根据 `$return-calc` 决定是进行值计算还是字符拼接。

## Mixins

### `component-rules($component-name, $tag-name: '')`

定义控件样式规则集。

### `grayscale($percent: 100%)`

使指定元素内变灰。

### `image-set($args...)`

通过 [`backgroud-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image#image-set()) 实现高清背景图的兼容写法。

### `rotate($deg: 0deg)`

旋转指定元素。

### `linear-gradient($from, $to)`

渐变。

### `text-middle($target: "")`

垂直居中。

### `line_feed()`

强制换行。

### `square($size: 100%)`

正方形。

### `circle($size: auto)`

圆形。

### `fill_up()`

撑满父容器。

### `aspect_ratio($width: auto, $height: auto, $target: "> *")`

等比例缩放。

### `covered_background($url: none, $color: transparent)`

背景图填充。

### `unstyled_list()`

去除 `<ul>`、`<ol>` 的样式。

### `pie-clearfix()`

去除浮动影响。
