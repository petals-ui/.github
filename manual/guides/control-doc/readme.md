一篇控件文档应当承担起这些责任：明确职责边界与适用场景，告知局限性，为使用者正确使用提供指导；罗列 API 与其他各种扩展点。

## 标题

文档的标题是由控件的中文名及其在代码中的命名组成，如：「单行文本框 TextInput」。

## 内容

文档正文内容从上到下的大致有三部分——

### 控件介绍

先尽可能用简短的语言介绍控件的特点、广泛使用场景；再根据具体情况详述控件的职责边界，在什么样的场景适用以及哪些情形下不适用，说清楚控件的局限性，让使用者能够正确判断该不该用。

有的控件是为了解决特定问题而存在，必要时需将相关前置知识做些说明。

### 接口定义

接口定义主要通过表格形式体现：

- 属性名；
- 值类型/可选值——TS 中的类型定义；
- 默认值——有的话是 JS 字面量，否则用「-」表示；
- 说明——属性的简要说明，需要详细说明的话要在表格外另起以属性名为标题的子章节。

一篇控件文档可能是单个控件的，也可能是几个强相关的控件的集合的，若是后者则需将每个控件分别另起以控件在代码中的命名为标题的子章节。

### 扩展机制

扩展机制主要包括视觉上的风格变量与功能上的定制。

「风格变量」即「Design Token」，以表格形式体现，有「CSS 变量」、「Sass 变量」、「默认值」和「说明」这四列。

「定制」部分应是以每个扩展点为标题的子章节。
