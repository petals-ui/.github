当设计一个控件时，应该考虑的事情。

## 目录结构

每个控件都应当被视作是独立的软件包、模块，所以它的各方面应该是完备的——除了实现控件的代码，还应有详尽的使用说明文档、可交互的在线 demo、完善的测试代码以及用来做一些自动化处理的元数据等。

上述材料相关文件的目录结构大体如下：

```text
component
   ├── demo                       # 示例相关文件
   │   └── ...
   ├── test                       # 测试相关文件
   │   └── ...
   ├── style                      # 样式相关文件
   │   ├── _functions.scss        # Sass 函数（可选）
   │   ├── _properties.scss       # CSS 自定义属性（必需），风格组件的一部分，供外部运行时自定义主题风格
   │   ├── _variables.scss        # Sass 变量（必需），风格组件的一部分，供外部编辑时/编译时自定义主题风格
   │   ├── _mixins.scss           # Sass 混入（可选）
   │   └── _rules.scss            # CSS 规则（必需），视觉组件，具有约束结构的作用
   ├── typing                     # 类型相关文件
   │   ├── custom-properties.ts   # CSS 自定义属性配置项（必需），用于运行时生成 CSS 自定义属性
   │   ├── aliases.ts             # 类型别名（可选）
   │   ├── interfaces.ts          # 结构组件接口（必需）
   │   └── index.ts               # 类型统一导出
   ├── HeadlessComponent.ts       # 无头组件，控件与结构无关的逻辑
   ├── Component.vue              # 结构组件，受生成 HTML 的 JS 库/框架的源码、平台限定的视图结构描述语言影响
   ├── index.ts                   # 模块统一导出
   ├── changelog.md               # 控件变更记录
   ├── readme.md                  # 控件说明文档
   ├── metadata.yml
   └── package.json
```

## 命名约定

### HTML & CSS class

在[基于组件开发](https://en.wikipedia.org/wiki/Component-based_software_engineering)（Component-based Development）的体系中，HTML & CSS class 应当是足够语义化的，让人在视图结构中一眼看到后就知道它是个什么东西，而不是长什么样。

因此，HTML & CSS class 的使用理应是 component-first 而非 utility-first——应用 CSS 组件（视觉组件），那些 utility class 作为辅助存在，也就是说，当 CSS 组件自带样式与实际需求有些许不符时，利用 utility class 进行「微调」，而不是在外部重写样式。

综上所述，HTML & CSS class 的命名遵循 [BEM](http://getbem.com/) 的变体「[SUIT CSS 命名约定](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)」：

```css
/* 控件 */
.ComponentName {}

/* 控件修饰符 */
.ComponentName--modifierName {}

/* 控件后代 */
.ComponentName-descendentName {}

/* 控件状态 */
.ComponentName.is-stateOfComponent {}

/* 辅助工具 */
.u-utilityName {}
```

控件基类 `.ComponentName` 及其后代 `.ComponentName-descendentName` 很好理解，它们之间天然具有层级关系，共同描述了一个控件的结构：

```html
<!-- 用语义化 HTML 标签 -->
<article class="Article">
  <header class="Article-header">
    <h1 class="Article-title">文章标题</h1>
  </header>
  <section class="Article-section">
    <h2>章节标题</h2>
    <p>章节段落</p>
  </section>
  <footer class="Article-footer">一些其他信息</footer>
</article>

<!-- 用非语义化 HTML 标签，更能凸显出 class 命名语义化的作用 -->
<div class="Article">
  <div class="Article-header">
    <h1 class="Article-title">文章标题</h1>
  </div>
  <div class="Article-section">
    <h2>章节标题</h2>
    <p>章节段落</p>
  </div>
  <div class="Article-footer">一些其他信息</div>
</div>
```

而控件修饰符 `.ComponentName--modifierName` 和控件状态 `.ComponentName.is-stateOfComponent` 有时就不能很好地区分何时该用哪个了。就拿按钮控件来说，它的颜色、是否可用与尺寸，哪个该用修饰符？哪个算是状态？

一个比较简单的判断标准：如果是控件的特性，即不会因为什么条件而改变的，用修饰符；倘若会因某个条件满足与否而变化，那就是状态。

```html
<!-- 用语义化 HTML 标签，大号（尺寸）的主要（功能色）操作按钮 -->
<button class="Button Button--primary Button--large">新增</button>

<!-- 用非语义化 HTML 标签，不可用（状态）的危险（功能色）操作按钮 -->
<span class="Button Button--danger is-disabled">批量删除</span>
```

应该注意的是，控件修饰符和控件状态都是直接加在控件的根节点上的，也就是要跟在控件基类的后面，不能用于控件后代上。假如一个控件后代需要程序化地改变它本身的样式，要用辅助工具类而不是状态类。当一个控件后代的结构、功能等变得复杂时，要将其封装成一个新的控件。

### Sass 变量与 CSS 自定义属性

在这里，Sass 变量与 CSS 自定义属性的命名方式比较类似，它们大概都是 `<namespace>-<component-name>[-descendent-name|-modifier-name][-state]-(variable-name|property-name)` 的形式。其中，`<namespace>` 部分是 `petals`。

Sass 变量是以 `$__petals` 或 `$petals` 开头，与控件名之间用 `--` 连接，前者是内部使用（私有）的，上层开发者无需关心，后者是供外部在编辑时/编译时定制用；CSS 自定义属性则用 `--petals` 开头，以 `-` 与控件名相连：

```css
/* 实际形式：<namespace>-<component-name>-(variable-name|property-name) */
$__petals--button-font-size: --petals-button-font-size;
$__petals--button-line-height: --petals-button-line-height;

/* 实际形式：<namespace>-<component-name>-<modifier-name>-<state>-(variable-name|property-name) */
$petals--button-primary-focus-color: var($__petals--primary-active-color, $petals--primary-active-color) !default;
$petals--button-primary-focus-bg: var($__petals--primary-active-bg, $petals--primary-active-bg) !default;
```

### 控件属性与事件

事件命名的基本形式是「on-」后接动词，如：`onClick`、`onChange`。但有时只接一个动词无法确切表达，需在动词前加名词用作补充，如：`onSelectionChange`、`onVisibilityChange`。

## 设计原则

### 顺其「自然」

「控件」是什么？可以认为它是一个返回视图结构的函数，而控件的属性（prop）和事件（event）就是这个「函数」的参数。属性是控件的外部与其内部进行主动通信的数据，事件则是进行被动通信的回调函数。

一个封装得好的函数，它的参数应尽可能少，要想明白每个参数的语义，且必须确实有其存在的意义——控件的属性和事件的设计也该如此。

在设计控件的属性时，先思考下要加的这个属性是不是属于这个控件本身的特性？若不是，那要加的属性的值所对应的控件的特性是什么？如果这两个问题都没有得到答案，那么这个属性可以不用加了。

控件的属性只应与其本身的特性有关，与业务意义无关——自身特性是自然特性，业务意义是附加特性。

比如，一个按钮控件通常会有「主要」、「次要」和「危险」这几种多少与业务沾边的语义，那么控件的属性该如何设计来满足这种需求呢？

Ant Design 和 Element 的做法是将其作为 `type` 属性的值或独立成一个属性：

```html
<Button type="primary">Ant Design 中的主要按钮</Button>
<Button>Ant Design 中的次要（默认）按钮</Button>
<Button danger>Ant Design 中的危险按钮</Button>

<el-button type="primary">Element 中的主要按钮</el-button>
<el-button>Element 中的次要（默认）按钮</el-button>
<el-button type="danger">Element 中的危险按钮</el-button>
```

按照上面说的控件属性设计原则来看，「主要」、「次要」和「危险」作用到按钮控件上的表现主要是颜色发生了变化，所以应该去用表示按钮的自然特性「颜色」的 `color` 属性来满足同样的需求：

```html
<button color="primary">主要按钮</button>
<button>次要（默认）按钮</button>
<button color="danger">危险按钮</button>

<!-- 还可以扩展出其他任意多颜色的按钮 -->
<button color="f00">红色按钮</button>
<button color="yellow">黄色按钮</button>
<button color="blue">蓝色按钮</button>
```

若控件的某组特性是二元对立的，如「禁用」与「启用」，则选择默认不生效的那个作为属性，且属性值是布尔型，默认值为 `false`。

还是拿按钮控件来举例：如果默认是「禁用」，那就设计一个代表「启用」的 `enabled` 属性，其默认值是 `false`，只要控件在被使用时传入了 `enabled`，就变成了「启用」状态；反之亦然。

另外，控件的属性值尽可能是简单数据类型，也就是数字、字符串等。

如果控件需要处理具有业务、配置语义的东西，该怎么弄？先来拿人做类比，帮助理解下——

人有头、躯干、四肢、脑、五脏六腑等组成部分，经过脑活动可以进行交流、创造等——这些是人的自然特性。人的职业、角色、身份等是自然特性吗？当然不是！这些是人脑的运作机制在特定的环境、上下文中对接收到的信息处理后所形成的结果。

由此可见，人的自然特性是有限的，而由自然特性所衍生出来职业、角色、身份等则是无限的。鉴于此，倘若把控件的非自然特性设计为属性，其数量将多如牛毛。那些具有业务、配置语义的东西，理应作为环境、上下文被控件内部起到人脑作用的程序所「理解」，并做出相应的「反应」或「动作」。

在 Petals 中，作为「人脑」存在的是控件配置的 setter 与 getter、每个控件的无头组件及结构组件的基类。

### 受控结构生成

什么是「受控结构」？在这里是指「可被使用者自定义的受控件本身控制的内部结构」。它有别于子控件，会被渲染到控件内部预先设置的「指定坑位」——Vue 中具名插槽的内容就是。

具名插槽是个很是便利的机制，即便如此，作为一个跨环境的控件体系，要么在每个环境中都实现具名插槽机制，要么在 Vue 中舍弃具名插槽而另辟蹊径——显然后者是更明智的选择。

不考虑具名插槽，生成受控结构主要有两个手段：一是通过控件的属性传入数据结构或返回数据结构的函数，如所谓的「render prop」，常用于比较简单的结构；二是设计专门的控件，如 Ant Design 中的 `TabPane` 之于 `Tabs`，主要在结构较为复杂时使用。

在 Ant Design 中，控件属性大量使用虚拟 DOM 节点，这违背了「属性值尽可能是简单数据类型」的原则，在 Petals 里是反模式。

假如有个 `Card`，它的内部从上到下被划分为 header、body 和 footer 三个部分：header 中是标题、图标和一些操作；子控件被放在 body 内；footer 中则可以是操作或其他附加信息。默认情况下，header 和 footer 中是没内容的，所以连它们本身都不生成。

这要设计一个字符串类型的 `title` 属性用来设置标题，在使用者给这个属性传值后会生成 header。当使用者想在标题前显示图标，或在 `Card` 的右上角显示一些操作时，该怎么办？

Ant Design 的做法是 `title` 属性接收虚拟 DOM 节点，这就可以传入一个视图结构了；同理，又弄了个接收虚拟 DOM 节点的 `extra` 属性去控制 `Card` 右上角的结构。

在这里，符合原则的做法是——设计一个专门的控件，姑且叫做 `CardHeader`，作用就是让使用者能够完全自定义 header 中的内容；当检测到 `CardHeader` 时就忽略 `title` 属性。

为什么不是给 `Card` 添加 `icon` 属性去控制图标的显示，设计 `actions` 属性传入对象数组去生成右上角的操作呢？

首先，如果把 `icon` 和 `actions` 这两个属性加到 `Card` 上，没看过使用手册的使用者在看到它们时，第一反应会想到它们实际是影响 header 部分吗？

若是加到 `Card` 上，它们既可以被理解成在 header 里，又可以被认为是在 body 或 footer 里，因为这两个词不具备唯一性，不像 `title`；反而加到 `CardHeader` 上比较合适。

其次，要是非要直接通过 `Card` 来控制，就得加上限定词让人更容易理解，如：`headerIcon`、`headerActions`。但这样一来，结构控制都集中到了 `Card` 上，它的属性将越来越多，这就又违背了「控件属性和事件应尽可能少」的原则。

再者，如上面所说，用复杂数据类型做属性值是要尽量避免的，即用数字、字符串等简单数据类型做属性值。虽然如此，但有时传对象或数组却可能会更合适些。

比如，有些控件会包含一些可自定义的操作，这种情况下再让使用者手动拼个视图结构的话，未免太不贴心了；这时若能通过传入一组代表操作配置的数据结构去生成一堆按钮，应该会更好些。需要注意的是，这个配置应当是（一定范围内）规范化的对操作（动作）的抽象。

总而言之，受控结构的生成优先考虑设计一个专门的控件，让属性列表尽可能简洁与整洁，把视图结构放回到它该待的地方；「不得已」时可以采用一个接收具有配置语义的数据结构的属性，如可能泛化的操作配置。

### 样式

在结构组件中对接视觉组件时，要用 [CSS Modules](https://github.com/css-modules/css-modules)，以避免外部的样式代码所引起的非预期效果。

## API 索引

设计控件 API 时经过思考抉择所沉淀的「词汇表」，在进行后续的控件设计时优先使用这里罗列的 API。

### 控件属性

| 语义 | 属性名 | 值类型/可选值 | 说明 |
| --- | --- | --- | --- |
| 自定义类名 | `className` | 视情况而定 | 全控件通用 |
| 自定义样式 | `style` | `object` | 全控件通用 |
| 数据源 | `dataSource` | `object | object[]` | 视图类控件使用 |
| 当前值 | `value` | 视情况而定 | 字段类控件使用 |
| 默认值 | `defaultValue` | 视情况而定 | 字段类控件使用 |
| 可清除 | `clearable` | `boolean` | 字段类控件使用 |
| 可搜索 | `searchable` | `boolean` | 字段类控件使用 |
| 唯一标识 | `flag` | `string | number` | 列表条目使用，默认生成时以数组索引为依据，而不是「第几个」 |
| 当前激活项标识 | `activeFlag` | `string | number` | 列表使用，默认生成时是数组索引下标 `0`，而不是「第一个」的 `1` |
| 列表条目被选中 | `selected` | `boolean` | - |
| 单选框、多选框被选中 | `checked` | `boolean` | 若单选框、多选框是在列表条目中，使用 `selected` 而非 `checked` |
| 条目铺展方向 | `direction` | `'horizontal' | 'vertical'` | 「列表」类控件对子控件的铺展方向进行控制 |
| 尺寸 | `size` | `'large' | 'medium' | 'small'` | - |
| 形状 | `shape` | 视情况而定 | - |
| 位置 | `placement` | 视情况而定 | 有的控件可以指定出现（放置）的「位置」，这种场景用 `placement` 而不用 `position` |
| 弹出层触发方式 | `trigger` | 视情况而定 | - |
| 弹出层类名 | `popupClassName` | 视情况而定 | - |
| 标题 | `title` | `string` |  |
| 内容 | `content` | `string` | 主要性质的文本，一般较为详细 |
| 文本标签 | `label` | `string` |  |
| 描述 | `description` | `string` | 辅助性质的文本，一般较为简洁 |
| 对齐方式 | `alignment` | 视情况而定 | 文本或布局的对齐方式 |
| 密度 | `density` | `'high' | 'medium' | 'low'` | 内容的密集程度，主要用于「列表」类视图 |

### 控件事件

| 语义 | 事件名 | 回调函数 | 说明 |
| --- | --- | --- | --- |
| 弹出层可见性变化 | `onVisibleChange` | `(visible: boolean) => void` | - |
| 选取列表中的条目 | `onSelect` | `((flag: string | number) => void) | ((flags: (string | number)[]) => void)` | - |
| 树形结构节点展开状态变化 |  |  |  |

### 为何是 A 非 B

记录在做 API 设计时的抉择。

#### A = `operationText`，B = `operations`

在自定义 `Transfer` 的操作文案时，Ant Design 和 iView 的相关 API 命名为 `operations`，Element 为 `button-texts`。

由于「操作」在视觉上未必是「按钮」的形态，选择语义更为泛化一些的 `operation` 比 `button` 合适。

并且，可自定义的只有文案，单纯的 `operation` 在语义上所包含的内容更多一些，因此要加上 `text` 去限制住理解上的「可自定义的范围」。

另外，在计算机相关场景中，`text` 是不可数名词。
