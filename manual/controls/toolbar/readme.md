「内容 + 操作」这种组合的容器，是一个较为泛化的控件，可用于 header、footer 等场景。

展示方式一般是——内容及具备展示性的操作一起居左显示，纯操作则一起居右显示。

默认情况下，把子控件看作是纯操作，可以通过全局配置将子控件的默认对待方式调整为展示性的内容。

纯操作部分可以抽象成配置属性 `actions`，根据数据结构来生成控件结构，并且可抽象出全局的「action」概念与机制。

## API

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `content` | `string` | - | 内容部分，显示在左侧并会撑满容器 |
| `contentClassName` | `string` | - | 内容部分的自定义类名 |
| `extraClassName` | `string` | - | 额外部分的自定义类名 |
{:.table.table-bordered}