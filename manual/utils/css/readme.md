在基于组件开发的体系下，CSS 类理应是「组件优先（component-first）」，即应用视觉组件（CSS 组件），那些工具类（utility class）作为辅助存在。

也就是说，当视觉组件自带样式与实际需求有些许不符时，利用工具类进行「微调」，而不是在外部重写视觉组件的样式——这也是一种组合方式。

这里罗列出已定义且可用在项目中的 CSS 工具类，部分来自 [SUIT CSS utilities](https://github.com/suitcss/utils/)。

## 垂直对齐

对一个元素进行垂直对齐设置，即改变 `vertical-align` 的值：

- `u-alignBaseline` - 向基线对齐；
- `u-alignTop` - 向顶部对齐；
- `u-alignMiddle` - 向中间对齐；
- `u-alignBottom` - 向底部对齐。

## 显示方式

改变元素的显示方式，主要是改变 `display` 的值：

- `u-block` - 显示为块元素；
- `u-inline` - 显示为行内元素；
- `u-inlineBlock` - 显示为行内块元素；
- `u-table` - 显示为表格；
- `u-tableCell` - 显示为表格单元；
- `u-tableRow` - 显示为表格行；
- `u-hidden` - 不显示；
- `u-hiddenVisually` - 视觉上隐藏，但对屏幕阅读器有效。

## 布局

一些低级（low-level）的布局特征：

- `u-floatLeft` - 向左浮动；
- `u-floatRight` - 向右浮动；
- `u-cf` / `u-clearfix` - 包含浮动（[micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/)）；
- `u-nbfc` - 创建新的块格式化上下文，会将溢出内容进行裁剪；
- `u-nbfcAlt` - 另一种创建新的块格式化上下文的方式，在不希望将溢出内容进行裁剪时可以考虑用这个替代 `u-nbfc`。

## 链接

- `u-linkClean` - 使链接在正常、悬停、聚焦、激活等状态下都没有下划线；
- `u-linkBlock` - 使链接在正常、悬停、聚焦、激活等状态下都显示为块元素并且没有下划线；
- `u-linkComplex` - 将链接的交互式下划线限制为指定的内部文本。

`u-linkComplex` 的示例：

```html
<a class="u-linkComplex" href="{url}">
  Link complex
  <span class="u-linkComplexTarget">target</span>
</a>
```

## 文本

- `u-textCenter` - 文本居中对齐；
- `u-textLeft` - 文本居左对齐；
- `u-textRight` - 文本居右对齐；
- `u-textBreak` - 当字符串长度超过容器宽度时将其折断；
- `u-textInheritColor` - 继承祖先的文本色；
- `u-textKern` - 在支持的浏览器中启用字距调整功能；
- `u-textNoWrap` - 将文本强制显示在一行；
- `u-textTruncate` - 将文本强制显示在一行并用省略号截断溢出容器的部分。

## 尺寸

通过设置 `width` 和 `flex-basis` 调整元素尺寸：

- `u-sizeFit` - 使元素收缩包裹住其内容；
- `u-sizeFull` - 使元素撑满其容器；
- `u-sizeFill` - 使元素充满剩余空间；
- `u-sizeFillAlt` - 使元素充满剩余空间的另一种方法；
- `u-sizeXofY` - 指定比例宽度。

对 `u-sizeXofY` 的追加说明：

1. `X` 需是小于 `Y` 的正整数；
2. `Y` 只能是 `2`、`3`、`4`、`5`、`6`、`8`、`10` 和 `12` 中的一个。

## 弹性盒子

### 作用于容器

#### 创建容器

- `u-flex` - 创建一个弹性容器；
- `u-flexInline` - 创建一个行内弹性容器。

#### 排列方向

- `u-flexRow` - 在行中显示条目；
- `u-flexRowReverse` - 在行中反向显示条目；
- `u-flexCol` - 在列中显示条目；
- `u-flexColReverse` - 在列中反向显示条目。

#### 包裹方式

- `u-flexNoWrap` - 将条目强制显示在一行；
- `u-flexWrap` - 使条目可在多行显示；
- `u-flexWrapReverse` - 使条目可在多行显示并反向排列。

#### 主轴条目间隔

- `u-flexJustifyStart` - 向主轴的起始位置对齐；
- `u-flexJustifyEnd` - 向主轴的结束位置对齐；
- `u-flexJustifyCenter` - 向主轴的中间位置对齐；
- `u-flexJustifyBetween` - 元素间空白延主轴均匀分配，第一个元素与起始位置贴合，最后一个元素与结束位置齐平；
- `u-flexJustifyAround` - 元素间空白延主轴均匀分配，第一个元素与起始位置的空白和最后一个元素与结束位置的空白是元素间空白的一半。

#### 交叉轴条目对齐

- `u-flexAlignItemsStretch` - 条目拉伸填充容器；
- `u-flexAlignItemsStart` - 向交叉轴的起始位置对齐；
- `u-flexAlignItemsEnd` - 向交叉轴的结束位置对齐；
- `u-flexAlignItemsCenter` - 向交叉轴的中间位置对齐；
- `u-flexAlignItemsBaseline` - 向容器的基线对齐。

#### 交叉轴条目间隔

- `u-flexAlignContentStart` - 向交叉轴的起始位置对齐；
- `u-flexAlignContentEnd` - 向交叉轴的结束位置对齐；
- `u-flexAlignContentCenter` - 向交叉轴的中间位置对齐；
- `u-flexAlignContentStretch` - 每行条目都等比例拉伸；
- `u-flexAlignContentBetween` - 元素间空白延交叉轴均匀分配，第一个元素与起始位置贴合，最后一个元素与结束位置齐平；
- `u-flexAlignContentAround` - 元素间空白延交叉轴均匀分配，第一个元素与起始位置的空白和最后一个元素与结束位置的空白是元素间空白的一半。

### 作用于条目

#### 交叉轴对齐

覆盖弹性容器设置的 `align-items` 的值：

- `u-flexAlignSelfStart` - 向交叉轴的起始位置对齐；
- `u-flexAlignSelfEnd` - 向交叉轴的结束位置对齐；
- `u-flexAlignSelfCenter` - 向交叉轴的中间位置对齐；
- `u-flexAlignSelfStretch` - 条目拉伸填充容器；
- `u-flexAlignSelfAuto` - 使用容器设置的 `align-items` 的值。

#### 条目排序

- `u-flexOrderFirst` - 将条目排在最前；
- `u-flexOrderLast` - 将条目排在最后；
- `u-flexOrderNone` - 重置条目顺序。

#### 条目增长

- `u-flexGrowX` - 指定条目将相对增长多少。

`X` 可以是 `1`、`2`、`3`、`4`、`5` 中的一个。

#### 条目收缩

- `u-flexShrinkX` - 指定条目将相对收缩多少。

`X` 可以是 `0`、`1`、`2`、`3`、`4`、`5` 中的一个。

#### 条目主轴方向初始大小

- `u-flexBasisAuto`
- `u-flexBasis0`

#### `flex` 缩写属性

- `u-flexInitial` - 根据自身宽高设置尺寸，会收缩自身以适应容器，但不会增长并吸收容器中的额外自由空间来适应容器；
- `u-flexAuto` - 根据自身的宽度与高度来确定尺寸，但会增长并吸收容器中额外的自由空间，也会收缩自身来适应容器；
- `u-flexNone` - 根据自身宽高来设置尺寸，但是完全非弹性的——既不会收缩，也不会增长来适应容器。

#### 利用外边距的 `auto` 进行对齐

- `u-flexExpand` - 展开所有边距以填充剩余空间；
- `u-flexExpandTop` - 展开上边距以填充剩余空间；
- `u-flexExpandRight` - 展开右边距以填充剩余空间；
- `u-flexExpandBottom` - 展开下边距以填充剩余空间；
- `u-flexExpandLeft` - 展开左边距以填充剩余空间。

关于这是如何工作的，可以看《[Flexbox’s Best-Kept Secret](https://medium.com/@samserif/flexbox-s-best-kept-secret-bd3d892826b6)》和《[CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/#auto-margins)》。
