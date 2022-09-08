用于展示一个图形化的符号，即图标。

## API

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `refs` | `string` | - | 被引用的图标的别名。如果以 `abc:` 开头，`:` 之前的部分代表「图标提供者」。这是需要使用者自己注册的（见下方），值为 `default` 和已注册的图标提供者别名，默认为 `default`。 |
| `onClick` | `() => void` | - | 单击事件 |
{:.table.table-bordered}

## 定制

### 图标提供者

因为每个团队都会有自己设计的图标，并且又有大量的第三方开源图标库，所以不内置图标而提供加载并注册图标进来的定制能力。

「图标提供者」是指提供图标资源的平台或团队，如 [iconfont](https://www.iconfont.cn/)、[Font Awesome](https://fontawesome.com/)、[Element](https://element.eleme.cn/#/zh-CN/component/icon) 等第三方平台，也可以是自己所在的团队或公司；每个图标提供者可对应多个图标资源的加载地址。

参数的接口大致如下：

```ts
// 图标技术的类型
type IconType = 'font' | 'svg';

// 图标提供者选项
type IconProviderOption = {
  type: IconType;
  urls: string[];
};

// 图标提供者集合
type IconProviderMap = { [key: string]: IconProviderOption };

// 注册图标提供者
function registerIconProviders(providers: IconProviderMap): void {}

// 设置默认的图标提供者
function setDefaultIconProvider(defaultProviderAlias: string): void {}

// 注册并设置默认图标提供者
function registerAndLoadIconProviders(providers: IconProviders, defaultProvider?: string): void {}
```
