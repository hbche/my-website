---
title: ProseMirror 入门指南
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: '编程工具'
tags: ['前端', '富文本', 'prosemirror']
date: 2026-06-05
---

![ProseMirror](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDIwOC4xIDIzOC4wIj48cGF0aCBkPSJNMTA0IDJBMTAyIDEwMiAwIDAgMCAyIDEwNGExMDIgMTAyIDAgMCAwIDEwMiAxMDIgMTAyIDEwMiAwIDAgMCAxMDItMTAyQTEwMiAxMDIgMCAwIDAgMTA0IDJ6bTAgMTQuOWE4Ny4xIDg3LjEgMCAwIDEgODcuMSA4Ny4xIDg3LjEgODcuMSAwIDAgMS04Ny4xIDg3LjFBODcuMSA4Ny4xIDAgMCAxIDE2LjkgMTA0IDg3LjEgODcuMSAwIDAgMSAxMDQgMTYuOXoiLz48cGF0aCBkPSJNMTQ3LjEgOTIuN2MtNi45IDgzLjkgMTAuOCAxMDMuNCAxMC44IDEwMy40cy01NS4xIDUuNS04Mi43LTEzLjRjLTMwLjUtMjAuOS0yNi4wLTY3LjUtMjUuOS05NC42LjEtMjguNCAyNS42LTQ1LjggNDkuOS00NS4zQzEyOC4zIDQzLjMgMTQ5LjQgNjQuNCAxNDcuMSA5Mi43eiIvPjxwYXRoIGQ9Ik04Mi4xIDEzOS41YzExLjMgMzYuMyA1MC42IDYyLjQgNTAuNiA2Mi40bDE4LjUtMS40eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik04Mi4xIDEzOS41YzMgMTMuMyAxNy45IDI5LjkgMzAuNCA0MS42IDI0LjggMjMuMiA0MiAyMi40IDg2IDU0LjctMTguMi01MS44LTE4LjgtNjItNDMuNS0xMDYuMS0yNC43LTQ0LTY3LjYtMjAuMy02Ny42LTIwLjNTNzkgMTI2IDgyLjEgMTM5LjN6Ii8+PHBhdGggZD0iTTEwOC45IDc2LjBzLTQuMC0xMS42LTE4LjAtMTEuNWMtMzAuMC4yLTI4LjggNTIuMSAxNi45IDUyLjAgMzkuNi0uMSAzOS4yLTQ5LjQgMTYuMS00OS42LTEwLjItLjItMTUuMCA5LjEtMTUuMCA5LjF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTEwOS40IDk1LjBjMTAuOC4wIDIuMCAxNC45LS42IDIwLjktMS44LTguNC0xMC4yLTIwLjkuNi0yMC45ek05My4xIDgwLjFjLTUuNiAwLTEwLjIgNC41LTEwLjIgMTAuMiAwIDUuNiA0LjUgMTAuMiAxMC4yIDEwLjIgNS42IDAgMTAuMi00LjUgMTAuMi0xMC4yIDAtNS42LTQuNS0xMC4yLTEwLjItMTAuMnptMzAuNS0uMWMtNC44IDAtOC44IDQuNS04LjggMTAuMiAwIDUuNiAzLjkgMTAuMiA4LjggMTAuMiA0LjggMCA4LjgtNC41IDguOC0xMC4yIDAtNS42LTMuOS0xMC4yLTguOC0xMC4yeiIvPjwvc3ZnPg== 'ProseMirror')

- [文档 (Documents)](#文档-documents)
  - [索引 (Indexing)](#索引-indexing)
  - [切片 (Slices)](#切片-slices)
  - [修改 (Changing)](#修改-changing)
- [模式 (Schemas)](#模式-schemas)
  - [节点类型 (Node Types)](#节点类型-node-types)
  - [内容表达式 (Content Expressions)](#内容表达式-content-expressions)
  - [标记 (Marks)](#标记-marks)
  - [属性 (Attributes)](#属性-attributes)
  - [序列化和解析 (Serialization and Parsing)](#序列化和解析-serialization-and-parsing)
  - [扩展模式 (Extending a Schema)](#扩展模式-extending-a-schema)
- [文档变换 (Document transformations)](#文档变换-document-transformations)
  - [为什么 (Why?)](#为什么-why)
  - [变换 (Transforms)](#变换-transforms)
  - [映射 (Mapping)](#映射-mapping)
  - [重新基准化 (Rebasing)](#重新基准化-rebasing)
  - [编辑状态 (The editor state)](#编辑状态-the-editor-state)
- [视图组件 (The view component)](#视图组件-the-view-component)
  - [可编辑的 DOM](#可编辑的-dom)
  - [数据流 (Data flow)](#数据流-data-flow)
  - [高效更新 (Efficient updating)](#高效更新-efficient-updating)
  - [属性 (Props)](#属性-props)
  - [装饰 (Decorations)](#装饰-decorations)
  - [节点视图 (Node views)](#节点视图-node-views)
- [命令 (Commands)](#命令-commands-1)
- [协同编辑 (Collaborative editing)](#协同编辑-collaborative-editing)
  - [算法 (Algorithm)](#算法-algorithm)
  - [协调服务 (The Authority)](#协调服务-the-authority)
  - [`collab` 模块](#collab-模块)

本指南介绍了 ProseMirror 库中使用的各种概念，以及它们之间的相互关系。为了对系统
有一个完整的理解，建议按照内容顺序依次阅读，至少阅读到“视图组件(The view
component)”部分。ProseMirror 提供了一套用于构建富文本编辑器（rich text editors）
的工具和概念，它的灵感源自所见即所得（WYSIWYG）的用户界面，但试图避免这种编辑方
式的陷阱。ProseMirror 的主要原则是让我们的代码完全掌控文档(document)以及对文档的
所有操作。这个文档并不是一堆 HTML，而是一个自定义的数据结构（custom data
structure），其中只包含我们明确允许其包含的元素及我们指定关系的元素。所有更新都
通过单一入口点进行，您可以在此检查更新并作出反应。

核心库并不是一个简单的即插即用组件（drop-in component）——我们更注重模块化和可定
制性，而不是简单性，希望未来人们能基于 ProseMirror 构建可直接使用的编辑器。因此
，本库更像是一套乐高积木（Lego set），而不是一辆火柴盒小汽车（Matchbox car）
。ProseMirror 拥有 4 个**核心模块**：

- **prosemirror-model** 定义了编辑器的文档模型（document model），即用来描述编辑
  器内容的数据结构。
- **prosemirror-state** 提供了描述编辑器**状态**（state）的数据结构，包括当前选
  区（selection）和用于从一个状态移动到下一个状态的事务系统（transaction
  system）。
- **prosemirror-view** 实现了一个用户界面组件，它将一个给定的编辑状态以可编辑元
  素的形式显示在浏览器中，并处理与该元素的用户交互。
- **prosemirror-transform** 包含用于修改文档的功能，这些更改可以被记录和重放，这
  构成了 `state` 模块中事务的基础，并使得撤销历史（undo history）和协同编辑
  （collaborative editing）成为可能。

此外，还有一些由核心团队维护的扩展模块，它们提供了额外的功能，但您可以根据需要省
略或使用其它模块替代。例如，以下模块也很有用：**基本编辑命令**（basic editing
commands）、**键绑定**（binding keys）、**撤销历史**（undo history）、**输入
宏**（input macros）、**协作编辑**（collaborative editing）、一个**简单文档模
式**（simple document schema）等。这些都可以在 GitHub 上的
[ProseMirror 组织](https://github.com/prosemirror) 找到。

由于 ProseMirror 不是以单个浏览器可加载脚本的形式分发的，您可能需要使用打包工具
（bundler）来使用它。打包工具是一种能够自动查找脚本依赖并将它们合并为一个大文件
的工具，方便在网页中加载。您可以在网上阅读更多关于打包的内容，例
如[此处](https://medium.freecodecamp.org/what-is-module-bundling-1368c7a97af6)。

### 我的第一个编辑器

各个乐高积木组件就这样组合在一起，以创建一个非常简化的编辑器：

```js
import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

let state = EditorState.create({ schema });
let view = new EditorView(document.body, { state });
```

这里 `schema`（模式(schema)）是一个基本模式，它被用来创建一个状态（state），该状
态将生成一个符合该模式的空文档，并在文档的开头生成一个默认的选区。最后，我们为这
个状态创建了一个视图，并将其附加到 `document.body`。这样做会将状态中的文档渲染为
一个可编辑的 DOM 节点，并让用户在其中键入时生成状态事务（state transactions）。

此时，这个编辑器还不太好用。例如，如果我们按下回车键(enter)，什么也不会发生，因
为核心库并不决定回车键应该执行什么操作。我们将在稍后介绍如何处理这些操作。

### 事务 (Transactions)

当用户键入或以其他方式与视图交互时，将产生“状态事务”（state transactions）。这意
味着 ProseMirror 并不是就地修改文档并隐式地更新状态。相反，每次更改都会创建一个
事务（transaction），该事务描述了对状态所做的更改。我们可以应用该事务来创建一个
新的状态，然后使用这个新状态来更新视图。

默认情况下，这一切都在内部完成，但是我们可以通过编写插件（plugins）或配置视图来
介入。例如，下面的代码添加了一个 `dispatchTransaction` 属性（prop），该属性会在
每次创建事务时被调用：

```js
// （忽略了 import 语句）

let state = EditorState.create({ schema });
let view = new EditorView(document.body, {
  state,
  dispatchTransaction(transaction) {
    console.log(
      'Document size went from',
      transaction.before.content.size,
      'to',
      transaction.doc.content.size
    );
    let newState = view.state.apply(transaction);
    view.updateState(newState);
  },
});
```

每次状态的更新都必须通过 `view.updateState` 方法完成，而普通的编辑更新都会通过派
发（dispatch）事务来触发。

### 插件 (Plugins)

**插件（plugins）** 用于以各种方式扩展编辑器和编辑状态的行为。有些插件比较简单，
例如将用户操作绑定到键盘输入的 `keymap` 插件；还有一些则更复杂，比如实现撤销历史
功能的 `history` 插件，它通过观察事务并存储它们的逆操作来实现撤销功能。

例如，我们可以给编辑器添加以下两个插件，以获得撤销/重做的功能：

```js
// （忽略了重复的 import 语句）
import { undo, redo, history } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';

let state = EditorState.create({
  schema,
  plugins: [history(), keymap({ 'Mod-z': undo, 'Mod-y': redo })],
});
let view = new EditorView(document.body, { state });
```

插件会在创建状态时注册（因为它们可以访问状态事务）。在为启用了历史功能的状态创建
视图之后，我们可以通过按下 **Ctrl-Z**（在 macOS 上是 **Cmd-Z**）来撤销我们上一次
的更改。

### 命令 (Commands)

前一个示例中绑定到键上的 `undo` 和 `redo` 的值是一种特殊的函数，称为**命令
（commands）**。大多数编辑操作都可以写成命令，这些命令可以绑定到键盘或菜单等，以
便用户触发。命令在定义上稍显复杂。在最基本的形式中，一个命令是这样定义的函数：它
接受一个编辑器状态（state）和一个调度函数（dispatch function）作为参数（该函数可
以是 `EditorView.dispatch` 或者其他接受事务的函数），并返回一个布尔值。例如，一
个非常简单的命令函数可能是：

```js
function deleteSelection(state, dispatch) {
  if (state.selection.empty) return false;
  if (dispatch) dispatch(state.tr.deleteSelection());
  return true;
}
```

当命令不适用时，它应该返回 `false` 并且不做任何事情。当命令适用时，它应该派发一
个事务并返回 `true`。例如，在 `keymap` 插件中，当一个按键绑定的命令被执行后，会
检测该命令是否返回了 `true`，如果是则停止该键的后续处理。命令函数的 `dispatch`
参数是可选的：如果您只想查询该命令是否可用，而不执行操作，只需要调用命令函数时传
入 `dispatch = null` 或不传 `dispatch`。因此，菜单栏可以调用
`deleteSelection(view.state, null)` 来判断选区是否可删除，如果要真正执行删除，则
调用 `deleteSelection(view.state, view.dispatch)`。

默认情况下，命令无法访问实际的视图对象（view）。不过有些命令需要与 DOM 交互，例
如检查某个位置是否位于文本块的末尾，或者需要打开一个对话框。这种情况下，调用命令
的插件可以将编辑视图对象作为第三个参数传入命令函数。例如：

```js
function blinkView(_state, dispatch, view) {
  if (dispatch) {
    view.dom.style.background = 'yellow';
    setTimeout(() => (view.dom.style.background = ''), 1000);
  }
  return true;
}
```

上述例子演示了命令不一定非要派发事务——命令调用通常是为了产生副作用(side
effect)，在这里的例子中它只是闪烁视图的背景色。

ProseMirror 的
[`prosemirror-commands`](https://prosemirror.net/docs/ref/#commands) 模块提供了
一系列常用编辑命令，涵盖从简单命令（例如删除选区）到复杂命令（如处理退格键合并块
的 `joinBackward`）。该模块还提供了一
个[**基本键盘映射**（basic keymap）](https://prosemirror.net/docs/ref/#commands.basicKeymap)，
将一些与模式无关的命令绑定到常见的按键上。例如，在该键盘映射中，退格键
(backspace)被绑定到如下命令链：先尝试 `deleteSelection`（当选区不为空时生效）、
再尝试 `joinBackward`（当光标位于文本块开头时生效）、最后尝试
`selectNodeBackward`（当前两个都不适用时选中光标前面的节点）。当所有这些命令都不
适用时，浏览器会执行自己的退格行为，例如在文本块内部删除一个字符。

命令模块还导出了一些命令构造函数，例如 `toggleMark(markType, attrs)`，它接受一个
标记类型和可选的属性集，返回一个命令函数，用于在当前选区上切换该标记。一些其他模
块也会导出命令，例如历史模块提供了 `undo` 和 `redo` 命令。要定制您的编辑器，或让
用户能够与文档中的自定义节点交互，您也可能需要编写自己的命令。

```tsx
import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { useEffect } from 'react';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';

function SetupExample() {
  useEffect(() => {
    const view = new EditorView(document.querySelector('#setup-editor'), {
      state: EditorState.create({
        schema,
        plugins: [keymap(baseKeymap)],
      }),
    });

    return () => view.destroy();
  }, []);

  return (
    <div id='setup-editor' className='editor'>
      <div id='setup-content'></div>
    </div>
  );
}

export default SetupExample;
```

此时，我们已经有了一个基本正常工作的编辑器。

要为特定于模式添加菜单、附加键绑定等，我们可能需要查看
[prosemirror-example-setup](https://github.com/prosemirror/prosemirror-example-setup)
包。这是一个为我们实现基础编辑器的一系列插件的模块，但顾名思义，它更多的是作为示
例而不是生产级库。对于实际部署，我们可能希望用自定义代码替换它，这些代码可以完全
按照我们想要的方式设置东西。

### 内容 (Content)

状态（state）中的文档对象保存在 `doc` 属性中。这个属性是一个只读的数据结构，表示
文档作为节点树（树形层次结构）。一个简单的文档可能是一个类型为 `"doc"` 的节点，
它包含两个 `"paragraph"` 节点，每个 `"paragraph"` 节点都包含一个 `"text"` 节点（
文本）。在初始化状态时，您可以提供一个初始文档（如 HTML 片段），如果提供了初始文
档，则 `schema` 字段可选，因为可以从文档中推断出使用的模式。

例如，下面的示例使用 `DOMParser` 通过基本模式(`prosemirror-schema-basic` 提供)将
页面上 id 为 `content` 的 DOM 元素的内容解析为文档，并用该结果来创建初始状态：

```js
import { DOMParser } from 'prosemirror-model';

let state = EditorState.create({
  schema,
  doc: DOMParser.fromSchema(schema).parse(document.querySelector('#content')),
});
```

在此示例中，我们使用了从模式生成的 `DOMParser`，它会将 DOM 元素的内容转换为
ProseMirror 文档节点。

## 文档 (Documents)

ProseMirror 为内容文档定义了一种自有的数据结构。由于文档是构建编辑器其他功能的核
心元素，理解它们的工作原理非常重要。ProseMirror 的文档本质上是一个树形结构：文档
（顶层 `"doc"` 节点）包含若干子节点，而每个子节点又可以包含自己的子节点，以此类
推。大多数情况下，我们会将文档想象为块级节点（block nodes）的序列，其中包含文本
块（textblocks）和其它块元素。

在浏览器的 HTML 中，一个带有格式标记的段落通常表现为一个嵌套结构。例如：

```html
<p>
  This is <strong>strong text with <em>emphasis</em></strong>
</p>
```

这个 HTML 片段对应一个树形结构：`<p>` 节点包含文本和一个 `<strong>` 节点
，`<strong>` 节点包含文本和 `<em>` 节点，以此类推。**而在 ProseMirror 中**，内联
内容（如加粗、斜体）被建模为一个扁平序列，并将这些样式标记作为元数据附加到文本节
点上。这与我们直觉上处理文本的方式更相符，也允许我们通过字符偏移来定位段落中的位
置，而不必在树中一路计数。

这种设计还有其他好处：它意味着每个文档只有一种有效的表示。具有相同标记的相邻文本
节点会被自动合并，空的文本节点是不允许存在的，标记在节点中出现的顺序由模式
（schema）指定，确保文档始终符合定义的约束。

因此，ProseMirror 文档是由块级节点组成的树，其中大多数叶子节点是文本块
（textblocks），它们代表可以包含文本的块级元素。您也可以有一些空的块级节点作为叶
子节点，例如水平线（`horizontal_rule`）、内联图片等。每个节点对象具有一些属性，
用于表示它们在文档结构中的角色：

- `isBlock` 与 `isInline` 表示节点是块级的还是内联的。
- `inlineContent` 如果节点期待内联内容，则为 `true`。
- `isTextblock` 如果一个块级节点允许包含内联内容，则为 `true`。
- `isLeaf` 如果节点不允许任何内容（即叶子节点），则为 `true`。

例如，常见的 `"paragraph"` 节点通常是文本块（textblock），而像 `<blockquote>` 这
样的引用块可能是一个块级节点，它的内容由其他块组成。文本节点、硬换行（hard
break）和内联图片（inline image）是内联的叶子节点，而水平线节点是块级的叶子节点
。

模式（schema）定义了哪些节点可以出现在何处。例如，即使某个节点允许块级内容，模式
也可以限制只允许特定类型的块级节点作为其子节点。要通过编程方式创建节点，必须使用
其所属模式提供的方法，例如使用模式对象的 `node` 和 `text` 方法。

```js
import { schema } from 'prosemirror-schema-basic';
// 第一个参数是节点类型名，第二个参数是属性对象，
// 第三个参数是子节点列表。
let doc = schema.node('doc', null, [
  schema.node('paragraph', null, [schema.text('One.')]),
  schema.node('horizontal_rule'),
  schema.node('paragraph', null, [schema.text('Two!')]),
]);
```

### 索引 (Indexing)

ProseMirror 节点支持两种类型的索引：一种是将其视为树结构来遍历，可以使用节点的
`child` 方法和 `childCount` 属性访问子节点，或者写递归函数遍历所有节点（也可以使
用 `descendants` 或 `nodesBetween` 方法快速遍历）；另一种则是将文档视为一个扁平
的标记序列（token sequence），在这种序列中可以将文档中任意位置表示为一个整数。

使用标记序列索引更适合精确定位文档中的位置：

- 文档开始（第一个内容之前）的位置为 **0**。
- 进入或离开一个非叶子节点（即允许内容的节点）时，算作一个标记。例如，如果文档以
  一个段落开始，那么段落的开始就被计为位置 1。
- 文本节点中的每个字符算作一个标记。例如，如果开头段落的内容是 `"hi"`，那么位置
  **2** 表示在字母 `"h"` 之后，位置 **3** 表示在字母 `"i"` 之后，位置 **4** 表示
  整个段落之后。
- 不允许包含内容的叶子节点（例如图片）也算作一个标记。

如果文档内容等价于以下 HTML：

```html
<p>One</p>
<blockquote>
  <p>Two<img src="..." /></p>
</blockquote>
```

那么对应的标记序列和位置可能如下（`<p>`、`<blockquote>` 等被视为标记边界）：

```
0   1 2 3 4    5
<p> O n e </p>

5            6   7 8 9 10    11   12            13
<blockquote> <p> T w o <img> </p> </blockquote>
```

每个节点有一个 `nodeSize` 属性，表示整个节点（包括开始和结束标记）的大小。您可以
使用 `node.content.size` 来获取节点内容的大小。请注意，对于最外层的文档节点来说
，它的开始和结束标记不算在文档大小内（因为您不能将光标放在文档之外），因此文档的
大小是 `doc.content.size`，而不是 `doc.nodeSize`。

手动按照上述方式计算位置可能很麻烦。您可以调用节点的 `resolve` 方法来获得一个更
详细的结构，该结构会告诉您该位置所在的父节点以及相对于父节点的偏移等信息。请注意
区分“子节点索引”（child index）、文档范围位置（document-wide position）和节点内
部偏移（node-local offset）。

### 切片 (Slices)

在处理复制粘贴或拖放时，需要使用**文档切片**（slice）来表示文档中两个位置之间的
内容。这种切片不同于完整的节点或片段，因为切片可以包含**打开的节点**：即在切片的
开始或结束位置，文档节点可能只被部分包含，没有完整的开始或结束标记。

例如，如果您从一个段落的中间选择到下一个段落的中间，那么选择的切片将包含两个段落
：第一个段落在起始处是“打开”的，第二个段落在结束处是“打开”的；而如果您以节点方式
选择一个段落，那么选择的就是一个完整的段落节点。对于打开的节点，如果将其视为完整
内容来解析，可能会违反模式的约束（因为某些必需的子节点可能不在此切片中）。

ProseMirror 提供了 `Slice` 数据结构用于表示这样的文档片段。它存储了一个
`Fragment`（fragment）对象以及切片两端的打开深度（open depth）。您可以使用节点的
`slice` 方法来获取文档的一段内容切片。例如，假设文档包含两个段落，分别为 `"a"`
和 `"b"`：

```js
// 初始文档 doc：<p>a</p><p>b</p>
let slice1 = doc.slice(0, 3); // 从位置0到3，对应第一个段落
console.log(slice1.openStart, slice1.openEnd); // → 0 0

let slice2 = doc.slice(1, 5); // 从第一个段落的位置1到第二个段落的结束
console.log(slice2.openStart, slice2.openEnd); // → 1 1
```

在上例中，`slice1` 是一个完整的段落（左右边界都闭合），而 `slice2` 则在两端各“打
开”了一个节点。

### 修改 (Changing)

由于节点和片段是持久化（immutable）的，您永远不应直接修改它们。每个文档、节点或
片段在创建后都被视为一个固定值。如果您想要更新文档，就需要**创建一个新的文档
值**。幸运的是，如果您创建了一个修改后的新文档，新文档会与旧文档共享所有未改变的
子节点，从而避免重复创建，提高性能。

大多数情况下，您会使用变换（transforms）来更新文档，而不必直接操作节点。变换会记
录下所有更改，这是编辑器状态管理和协同编辑所依赖的机制。如果您确实需要手动创建一
个修改后的文档，可以使用 `Node` 和 `Fragment` 提供的一些辅助方法。例如，您可以使
用 `Node.replace` 方法来替换文档的某个范围，或者使用 `copy` 方法复制节点并替换其
内容。`Fragment` 类型也提供了类似的更新方法，比如 `replaceChild` 和 `append` 等
。

## 模式 (Schemas)

每个 ProseMirror 文档都有一个关联的模式（schema）。模式描述了文档中可能出现的节
点类型及其嵌套关系。例如，一个模式可能规定：顶层文档节点(`doc`)可以包含一个或多
个块级节点（如段落），段落节点可以包含任意数量的内联节点和标记。ProseMirror 提供
了一个基础的模式包
（[`prosemirror-schema-basic`](https://prosemirror.net/docs/ref/#schema-basic)）
，但 ProseMirror 的优势之一是您可以自定义自己的模式以满足需求。

### 节点类型 (Node Types)

在模式中，您需要列举出所有可能出现的节点类型，并为每个节点类型提供一个规范对象
（spec），说明该类型的名称、内容模型和属性等。例如：

```js
const trivialSchema = new Schema({
  nodes: {
    doc: { content: 'paragraph+' },
    paragraph: { content: 'text*' },
    text: { inline: true },
    /* ... 其他节点类型 ... */
  },
});
```

以上示例定义了这样一个模式：文档(`doc`)节点可以包含一个或多个段落(`paragraph`)，
每个段落可以包含零个或多个文本节点(`text`)。每个模式至少需要定义一个顶层节点类型
（默认为 `"doc"`，也可以配置）以及一个文本节点类型（`text`）。对于内联节点，通常
需要在规范中声明 `inline: true`，但 `text` 类型默认为内联，所以可省略该属性。

### 内容表达式 (Content Expressions)

示例中 `content` 字段使用的字符串称为内容表达式（content expression）。它指定了
该节点类型可接受的子节点序列。例如，`"paragraph+"` 表示一个或多个段落
，`"paragraph*"` 表示零个或多个段落，`"caption?"` 表示零个或一个标题节点。您还可
以在名称后使用大括号来限定重复次数，例如 `{2}`（恰好两个）、`{1,5}`（至少一个，
最多五个）、`{2,}`（至少两个）等。您也可以组合表达式，例如
`"heading paragraph+"` 表示一个标题后跟一个或多个段落；使用管道符可以指定选择，
例如 `"(paragraph|blockquote)+"` 表示一个或多个段落或块引用。

有时您希望某些节点类型可以复用在模式的多个位置，例如，定义一个名为 `"block"` 的
节点组，其中包含段落和块引用。可以在节点类型的规范中使用 `group` 属性，例如：

```js
const groupSchema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { group: 'block', content: 'text*' },
    blockquote: { group: 'block', content: 'block+' },
    text: {},
  },
});
```

在这个模式中，`"block+"` 等价于 `"(paragraph|blockquote)+"`。建议要求块级节点类
型（如示例中的 `doc` 或 `blockquote`）至少有一个子节点（使用 `+` 而非 `*`），因
为如果一个元素为空，浏览器通常会折叠它，使其变得不可见，这会导致编辑体验很差。

在或表达式（or expression）中，顺序很重要。当编辑器需要创建一个节点的默认实例（
比如在执行 `replace` 之类的变换后确保文档仍然有效时），它会选择表达式中的第一个
类型。如果第一个是组名，则选第一个组成员。例如，如果交换了上例中 `"paragraph"`
和 `"blockquote"` 的顺序，编辑器可能会尝试创建一个 `blockquote`，而根据内容模型
，`blockquote` 中又需要一个块节点，结果再次尝试创建 `blockquote`，如此循环下去会
导致错误。若需要确保编辑器能自动填充缺失的节点，请始终将模式的第一个可选类型放在
最前。

需要注意的是，并非所有节点操作函数都会检查内容的有效性。变换（transforms）会检查
模式约束，但原始的节点创建函数通常不会，因此您可以通过 `NodeType.create` 创建不
符合模式的节点。对于存在此需求的场景，这是一种合理的做法（例如在切片边界上创建“
打开”节点时）。ProseMirror 也提供了 `createChecked` 方法和 `check` 方法，可以在
创建后检查或断言节点的内容是否合法。

### 标记 (Marks)

\*\*标记（marks）\*\*用于为内联内容添加额外的样式或信息。模式必须声明所有可能出
现的标记类型。标记类型类似于节点类型，也是由模式定义的名称，用于标记文本或节点上
所应用的特定样式（如粗体、斜体、下划线、链接等）。默认情况下，具有内联内容的节点
允许应用模式中定义的所有标记。您可以在节点规范中通过 `marks` 属性限制允许的标记
。例如：

```js
const markSchema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { group: 'block', content: 'text*', marks: '_' },
    heading: { group: 'block', content: 'text*', marks: '' },
    text: { inline: true },
  },
  marks: {
    strong: {},
    em: {},
  },
});
```

这个模式定义了两个标记类型：`strong` 和 `em`。段落节点允许使用这些标记
（`marks: "_"` 表示允许任何标记），而标题节点 (`heading`) 规定不允许任何标记
（`marks: ""` 表示空集）。在内容表达式中，标记集合可以写成用空格分隔的标记名称或
分组名称；`"_"` 表示通配符，空字符串表示不允许任何标记。

### 属性 (Attributes)

模式还可以为每个节点类型或标记类型定义属性（attrs）。如果一个节点类型需要存储额
外的信息（例如 `heading` 类型通常会有一个 `level` 属性表示标题级别），可以在其规
范中使用 `attrs` 字段。属性集是普通的对象，每个键对应一个属性名，值为该属性的设
置。例如：

```js
heading: {
  content: "text*",
  attrs: {level: {default: 1}}
}
```

在此示例中，每个 `heading` 节点都有 `.attrs.level` 属性，如果在创建时没有指定级
别，则默认为 1。如果某个属性没有提供默认值，那么当您尝试创建该节点而没有指定该属
性时，将会抛出错误。这也意味着编辑器无法自动生成此类节点来满足模式的约束，因此不
能将必须出现却没有默认值的节点放在必需位置（required position）。换言之，只有为
每个可能的属性提供了默认值时，编辑器才能在必要时插入空节点来填补缺失内容。

### 序列化和解析 (Serialization and Parsing)

为了在浏览器中编辑文档节点，必须能够将文档节点渲染到 DOM 中。最简单的方法是，在
模式中为每个节点类型指定它的 DOM 表现方式，这可以通过在节点规范中添加 `toDOM` 函
数来实现。例如：

```js
const schema = new Schema({
  nodes: {
    doc: { content: 'paragraph+' },
    paragraph: {
      content: 'text*',
      toDOM(node) {
        return ['p', 0];
      },
    },
    text: { inline: true },
  },
});
```

上述代码中的 `["p", 0]` 表明段落节点在 DOM 中应渲染为一个 `<p>` 标签，`0` 表示一
个“占位符”，节点的内容将被渲染到此处。您也可以在标签后面添加一个对象来指定 HTML
属性，例如 `["div", {class: "c"}, 0]`。叶子节点（如 `image`）如果没有内容，则其
`toDOM` 返回的数组中不需要占位符，因为没有额外内容要渲染。

您还需要能够从 DOM 解析文档，例如在用户粘贴或拖放时。ProseMirror 提供了解析功能
，您可以在模式中使用 `parseDOM` 指定解析规则：每个规则描述了如何将某种 DOM 结构
映射为节点或标记。例如，`prosemirror-schema-basic` 对 `em`（斜体）标记提供了如下
解析规则：

```js
parseDOM: [
  { tag: 'em' }, // 匹配 <em> 元素
  { tag: 'i' }, // 匹配 <i> 元素
  { style: 'font-style=italic' }, // 匹配内联样式 'font-style: italic'
];
```

在上例中，`tag` 可以是一个 CSS 选择器，例如 `"div.highlight"`；`style` 可以匹配
内联的 CSS 样式。若模式中包含了 `parseDOM` 规则，您可以通过
`DOMParser.fromSchema(schema)` 创建一个默认的 DOM 解析器，编辑器会使用它来处理剪
贴板内容的粘贴，也可以自行覆盖该解析器。

最后，ProseMirror 文档还支持内置的 JSON 序列化格式。您可以调用文档对象的
`toJSON` 方法生成一个可用于 `JSON.stringify` 的表示，然后使用模式的
`nodeFromJSON` 方法将其解析回文档对象。

### 扩展模式 (Extending a Schema)

传递给 `Schema` 构造函数的 `nodes` 和 `marks` 选项可以是有序映射 (OrderedMap) 对
象或普通对象。模式实例的 `spec.nodes` 和 `spec.marks` 属性总是有序映射，这使得在
此基础上创建新模式更加方便。这些映射支持一些方法来派生更新的映射。例如，假设有一
个现有模式 `schema`，您可以执行 `schema.spec.nodes.remove("blockquote")` 来得到
一个去除了 `blockquote` 节点的节点集合，然后将其作为新的 `nodes` 传给 `Schema`
来构造一个新模式。另外
，[prosemirror-schema-list](https://prosemirror.net/docs/ref/#schema-list) 模块
导出了一个便捷方法，可以将列表模块中的节点类型（如嵌套列表）添加到现有模式中。

## 文档变换 (Document transformations)

变换（transforms）是 ProseMirror 工作的核心。它们构成事务（transaction）的基础，
并让撤销历史和协同编辑成为可能。为什么不直接就地修改文档？原因有很多：首先，使用
不可变数据结构（immutable data structure）可以让代码更健壮；更重要的是，变换系统
可以记录更新轨迹，以步骤（steps）的形式描述从旧文档到新文档所做的具体更改。这对
于实现撤销历史至关重要，因为撤销历史需要存储这些步骤的逆操作。另外，协同编辑系统
将这些步骤发送给其它用户或服务器，以确保多个编辑者的文档可以自动合并。

### 为什么 (Why?)

每次更改都会生成一个或多个步骤（Step）。虽然您一般不需要直接操作步骤，但了解它们
的原理很有帮助。例如，`ReplaceStep` 用于在文档中替换一段内容，`AddMarkStep` 用于
在指定范围内添加标记。一个步骤可以应用到文档上以生成一个新文档：

```js
console.log(myDoc.toString()); // → p("hello")
// 一个删除 3 到 5 之间内容的步骤
let step = new ReplaceStep(3, 5, Slice.empty);
let result = step.apply(myDoc);
console.log(result.doc.toString()); // → p("heo")
```

应用步骤不会自动填补模式约束或调整节点，它只会字面地修改文档。如果步骤无法应用（
例如，仅删除了一个标签的起始令牌，这会导致不平衡），则 `apply` 方法会返回一个包
含错误信息的结果对象而不是文档。因此，我们通常会使用更高级的工具来生成步骤，而不
手动构造它们。

### 变换 (Transforms)

一次编辑操作可能产生多个步骤。方便的方法是创建一个 `Transform` 对象（若在编辑器
状态范围内工作，可以使用其子类 `Transaction`）。`Transform` 对象维护一个可修改的
文档副本，并提供一系列方法来编辑它：

```js
let tr = new Transform(myDoc);
tr.delete(5, 7); // 删除位置5到7的内容
tr.split(5); // 在位置5拆分其父节点
console.log(tr.doc.toString()); // 查看修改后的文档
console.log(tr.steps.length); // → 2
```

大多数变换方法会返回 `Transform` 对象本身，以便您可以链式调用，例如
`tr.delete(5, 7).split(5)`。`Transform` 提供了许多方法，包括删除（`delete`）、替
换（`replace`）、添加或删除标记（`addMark`/`removeMark`）、以及执行诸如拆分
（`split`）、合并（`join`）、提升（`lift`）、包裹（`wrap`）等操作。这些方法会为
您创建适当的步骤，并更新内部文档副本。

### 映射 (Mapping)

当您对文档进行更改时，原始文档的位置将会发生变化。比如，往文档位置 5 处插入了两
个字符，那么原来位置 10 就变成了位置 12；如果删除了一段内容，那么这些位置可能就
不存在了。为了在文档更改后保持对位置的跟踪，步骤（Step）提供了映射（map）。例如
：

```js
let step = new ReplaceStep(4, 6, Slice.empty); // 删除4到6之间的内容
let map = step.getMap();
console.log(map.map(8)); // → 6
console.log(map.map(2)); // → 2 （变动前的位置保持不变）
```

`Transform` 对象会自动收集它包含的所有步骤的映射，形成一个 `Mapping` 管道，您可
以通过它来一次性将位置映射过所有步骤：

```js
let tr = new Transform(myDoc);
tr.split(10); // 在位置10拆分节点，文档在此处增加2个标记
tr.delete(2, 5); // 从位置2到5删除3个标记
console.log(tr.mapping.map(15)); // → 14
console.log(tr.mapping.map(6)); // → 3
console.log(tr.mapping.map(10)); // → 9
```

在某些情况下，位置恰好位于变动的边界上，映射的行为并不唯一。例如上例中，位置 10
是拆分点前的位置，映射到 9。如果您希望“位置随前面的变化移动”，可以使用带
`bias = -1` 的映射调用：

```js
console.log(tr.mapping.map(10, -1)); // → 7
```

这样可以让位置尽量向后保留原位不动。定义小而简单的步骤使得映射成为可能，也让步骤
可以被无损地反转（invert）并在多个映射之间相互转换。

### 重新基准化 (Rebasing)

在做更复杂的操作时，可能需要“重新基准化”（rebasing）。简单来说，重新基准化是指：
如果有两个步骤 _stepA_ 和 _stepB_ 都是从同一个旧文档出发的，但您想先应用
_stepA_（得到文档 `docA`），然后再应用原本为旧文档设计的 _stepB_，那么您需要对
_stepB_ 进行重新基准化，得到一个新的步骤 _stepB′_，使其能正确地作用于 `docA`。这
可以通过将 _stepB_ 映射到 _stepA_ 的映射结果来实现
（`stepB.map(stepA.getMap())`）。

当需要将一连串步骤重新基准化到另一串步骤上时，情况就更复杂。例如，假设有步骤序列
`stepA1, stepA2` 和 `stepB1, stepB2`。如果您想将 `stepB1, stepB2` 应用到
`stepA1, stepA2` 之后的文档，您需要先对 `stepB1` 进行映射，然后再对 `stepB2` 进
行复杂的映射。ProseMirror 的 `Mapping` 管道能够处理这类多步骤的映射，包括使用逆
映射（invert）来确保步骤仍然有效。尽管技术细节较多，但一般情况下，如果步骤无法映
射（例如其目标内容已被删除），则映射会失败并返回 null，这时通常会放弃该步骤。

### 编辑状态 (The editor state)

编辑器的状态由哪些部分组成？当然有文档（`doc`），还有当前的选区（`selection`）。
此外，当您激活某个标记但还没有输入时，需要记录当前的“预置标记”（`storedMarks`）
。这三个是 ProseMirror 状态对象的主要组成部分，它们分别以
`state.doc`、`state.selection` 和 `state.storedMarks` 属性存在。以下示例演示了初
始化状态和查看其内容：

```js
import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';

let state = EditorState.create({ schema });
console.log(state.doc.toString()); // 一个空段落
console.log(state.selection.from); // 1，即段落开始的位置
```

插件可能也需要在状态中存储自己的数据（例如历史插件需要保存历史记录）。这就是为什
么创建状态时可以传入插件数组 `plugins`，这些插件会在状态对象中占据槽位，保存它们
自己的状态。插件本身由 `Plugin` 类的实例表示，可以通过 `state` 属性在其中定义自
己的状态片段。例如：

```js
let transactionCounter = new Plugin({
  state: {
    init() {
      return 0;
    },
    apply(tr, value) {
      return value + 1;
    },
  },
});

function getTransactionCount(state) {
  return transactionCounter.getState(state);
}
```

上例中的插件定义了一个简单的状态：一个计数器，用于记录应用到状态的事务数量
。`init` 方法返回初始值（这里是 0），`apply` 方法在每次事务应用时返回一个新的计
数值。`getTransactionCount` 函数可以使用插件对象的 `getState` 方法从整个编辑器状
态对象中提取这个插件的状态。

由于编辑器状态是持久化的（immutable），插件的状态部分也必须保持不可变。也就是说
，如果插件状态需要改变，它的 `apply` 方法必须返回一个新值，而不是修改现有值，并
且外部代码也不应修改它们。

插件通常还需要向事务添加元数据（metadata）。例如，当执行撤销操作时，历史插件可能
会给产生的事务打上一个标记，以表明它不应被记录到历史中。事务对象提供了 `setMeta`
和 `getMeta` 方法来设置和读取元数据。例如，我们可以修改上面的计数插件，不对带有
特定元数据的事务进行计数：

```js
let transactionCounter = new Plugin({
  state: {
    init() {
      return 0;
    },
    apply(tr, value) {
      if (tr.getMeta(transactionCounter)) return value;
      else return value + 1;
    },
  },
});

function markAsUncounted(tr) {
  tr.setMeta(transactionCounter, true);
}
```

在这个例子中，如果事务附加了 `transactionCounter` 插件的元数据，则计数器不会增加
。您可以使用插件对象本身作为元数据的键，以避免与其他键名冲突。ProseMirror 也使用
了一些预定义的键名，例如可以通过设置键 `"addToHistory"` 为 `false` 来阻止事务被
记录进历史，以及在粘贴事件中，编辑器视图会自动将事务上的 `"paste"` 属性设置为
`true`。

## 视图组件 (The view component)

**视图组件（EditorView）** 是 ProseMirror 的用户界面部分。它负责将一个编辑状态展
示给用户，并允许用户在其中进行编辑交互。核心视图组件的职责范围很专一：它只处理与
编辑表面直接相关的交互，例如键入、点击、复制、粘贴、拖放等。其他诸如显示工具栏菜
单或提供完整键盘快捷键等功能，都超出了核心视图的职责，需要通过插件或外部代码来实
现。

### 可编辑的 DOM

浏览器允许我们将 DOM 的某些部分设置为可编辑（contenteditable），这样就可以在这些
区域内获得焦点并插入文本。视图会根据文档状态创建一个 DOM 结构（默认使用模式的
`toDOM` 方法），并将其所在的元素设为可编辑。当这个可编辑元素获得焦点时
，ProseMirror 会确保浏览器的 DOM 选区与编辑状态中的选区保持一致。

视图还会注册大量的事件处理器，将 DOM 事件翻译为相应的编辑器事务。例如，当用户粘
贴内容时，事件处理器会将粘贴的内容解析为 ProseMirror 文档切片（slice）并插入到文
档中。浏览器自身也会处理很多事件，例如光标移动和文本输入，这样可以利用浏览器的原
生编辑能力（如拼写检查、移动光标的准确度等）。在这种情况下，浏览器会先更新 DOM，
然后 ProseMirror 检测 DOM 的更改，把更改的内容重新解析成事务应用到状态中。对于光
标和选区的变化，只有当浏览器选区与状态选区不一致时，编辑器才会更新选区事务，以避
免破坏浏览器维护的一些隐藏状态（例如在光标从一行较短的文本移动到下一行时记忆水平
位置等）。

### 数据流 (Data flow)

编辑器视图会显示给定的编辑状态，当用户执行操作时，它会创建一个事务并**广播**出去
。通常，这个事务会被应用到当前状态以生成一个新状态，然后使用
`view.updateState(newState)` 将新状态提供给视图。流程可以用如下图示概念化：

```
      DOM 事件
       ↗   ↘
   EditorView
       ↖   ↙
    事务 (Transaction)
       ↗   ↘
    新的 EditorState
```

这种设计形成了一个简单而循环的数据流，相比传统的、依赖大量直接事件处理回调的方式
，这种结构更清晰。您可以通过在 `EditorView` 构造时提供 `dispatchTransaction` 属
性来“拦截”事务，以将此循环数据流整合到您的应用程序的状态管理之中（例如与 Redux
之类的数据流架构结合）。例如：

```js
// 应用的整体状态
let appState = {
  editor: EditorState.create({ schema }),
  score: 0,
};

let view = new EditorView(document.body, {
  state: appState.editor,
  dispatchTransaction(transaction) {
    update({ type: 'EDITOR_TRANSACTION', transaction });
  },
});

// 简陋的应用状态更新函数
function update(event) {
  if (event.type == 'EDITOR_TRANSACTION')
    appState.editor = appState.editor.apply(event.transaction);
  else if (event.type == 'SCORE_POINT') appState.score++;
  draw();
}

// 更新 DOM 的函数
function draw() {
  document.querySelector('#score').textContent = appState.score;
  view.updateState(appState.editor);
}
```

在上例中，我们将 ProseMirror 的事务集成到了自定义的应用状态流中。每当我们收到一
个 `EDITOR_TRANSACTION` 事件时，就将事务应用到编辑器状态，并调用
`view.updateState` 来更新视图。

### 高效更新 (Efficient updating)

一种最朴素的实现 `updateState` 的方法是每次都重新绘制整个文档。但对于大型文档，
这样会非常慢。ProseMirror 的视图知道旧文档和新文档，因此它会比较两者，只对有所不
同的部分进行更新，而保持其余部分不变。这样做使得典型更新所需的工作非常少。

在某些情况下，例如用户键入一个字符时，浏览器已经直接将字符插入到 DOM 中
。ProseMirror 此时的更新只需检查 DOM 与状态是否一致，就可能不需要做任何修改。如
果用户随后撤销输入或发生其他情况导致需要回滚，视图会撤销浏览器的更改以保持同步。
类似地，对于光标位置，只有在状态选区与 DOM 选区不一致时才会进行更新，以免打乱浏
览器内部维护的光标状态。

### 属性 (Props)

在 React 等框架中，“属性”（props）是传递给组件的一组配置参数，决定了组件的行为。
在 ProseMirror 中也借用了这一概念。对于编辑器视图来说，状态（state）是一个属性，
其它属性（例如 `editable`, `handleDoubleClick` 等）在构造视图时提供，并定义了视
图的行为。下面是一个示例：

```js
let view = new EditorView({
  state: myState,
  editable() {
    return false;
  }, // 使编辑器只读
  handleDoubleClick() {
    console.log('Double click!');
  },
});
```

上例中，`state` 和 `editable`、`handleDoubleClick` 都是传递给视图的属性。插件也
可以声明额外的属性（props），例如前面示例中的 `maxSizePlugin`：它通过属性决定编
辑器是否可编辑：

```js
function maxSizePlugin(max) {
  return new Plugin({
    props: {
      editable(state) {
        return state.doc.content.size < max;
      },
    },
  });
}
```

如果同一个属性被多次声明，其处理方式取决于属性本身的类型：通常直接提供给视图的属
性优先级最高，然后按插件顺序依次应用。例如，对于某些只取第一个值的属性（如
`domParser`），后续的定义会被忽略；对于事件处理函数属性，返回 `true` 的第一个处
理器会处理事件并停止继续调用；而对于像 `attributes`（可以为可编辑 DOM 节点设置属
性）和接下来要介绍的装饰（decorations）这类属性，会将所有插件提供的值合并起来。

### 装饰 (Decorations)

\*\*装饰（Decorations）\*\*让您控制视图如何在页面上为文档绘制内容。您可以通过插
件的 `decorations` 属性返回一个 `DecorationSet` 来创建装饰。装饰主要有三种类型：

- **节点装饰（Node decorations）**：为文档树中某个节点的 DOM 表现添加样式或属性
  。
- **小部件装饰（Widget decorations）**：在文档中的某个位置插入一个自定义的 DOM
  节点，该节点不属于文档内容本身。
- **内联装饰（Inline decorations）**：类似节点装饰，为一段范围内的所有内联节点添
  加样式或属性，但仅影响它们的显示，不改变文档结构。

为了高效地管理装饰，需要使用 `DecorationSet`。`DecorationSet` 是一种模仿文档树结
构的数据结构，可以对装饰进行快速比较和更新。例如，我们可以创建一个插件，在整个文
档范围内为内容添加紫色字体的装饰：

```js
let purplePlugin = new Plugin({
  props: {
    decorations(state) {
      return DecorationSet.create(state.doc, [
        Decoration.inline(0, state.doc.content.size, {
          style: 'color: purple',
        }),
      ]);
    },
  },
});
```

如果装饰数量较多，您可能希望将装饰集合保存在插件状态中，并在事务中使用 `map` 方
法将其前移，只在需要时更新它。例如：

```js
let specklePlugin = new Plugin({
  state: {
    init(_, { doc }) {
      let speckles = [];
      for (let pos = 1; pos < doc.content.size; pos += 4)
        speckles.push(
          Decoration.inline(pos - 1, pos, { style: 'background: yellow' })
        );
      return DecorationSet.create(doc, speckles);
    },
    apply(tr, set) {
      return set.map(tr.mapping, tr.doc);
    },
  },
  props: {
    decorations(state) {
      return specklePlugin.getState(state);
    },
  },
});
```

该插件初始化状态时，会在每第 4 个位置添加一个黄色背景的内联装饰。在状态更新时，
插件的 `apply` 方法会使用映射（mapping）将装饰集自动前移，使装饰在文档变更后仍保
持在正确位置。这样，只有文档实际变化过的部分装饰才会被重新计算，其余部分保持不变
。

最后，当编辑器渲染时，`decorations` 属性返回的装饰集合会被应用到视图中，从而使装
饰生效。

### 节点视图 (Node views)

还有一种方式可以影响编辑器视图对节点的渲染——节点视图（Node views）。节点视图允许
您为文档中的特定节点类型定义一个“迷你 UI 组件”，自定义它们的 DOM 表现并处理交互
。例如：

```js
let view = new EditorView({
  state,
  nodeViews: {
    image(node) {
      return new ImageView(node);
    },
  },
});

class ImageView {
  constructor(node) {
    // 这将作为图像节点的 DOM 表现
    this.dom = document.createElement('img');
    this.dom.src = node.attrs.src;
    this.dom.addEventListener('click', (e) => {
      console.log('You clicked me!');
      e.preventDefault();
    });
  }

  stopEvent() {
    return true;
  }
}
```

上述示例为 `image` 节点定义了一个视图，它创建了一个自定义的 `<img>` DOM 元素，并
为其添加了点击处理器。通过定义 `stopEvent() { return true }`，这个节点视图告诉
ProseMirror 应该忽略这个 DOM 元素上的所有事件，让您完全掌控它。

通常我们希望节点视图中的交互能够影响文档本身。为此，节点视图可以获得一个
`getPos` 回调函数，用于获取该节点在文档中的当前位置。例如，我们修改上述示例，让
点击图片时弹出对话框输入新的 alt 文本：

```js
let view = new EditorView({
  state,
  nodeViews: {
    image(node, view, getPos) {
      return new ImageView(node, view, getPos);
    },
  },
});

class ImageView {
  constructor(node, view, getPos) {
    this.dom = document.createElement('img');
    this.dom.src = node.attrs.src;
    this.dom.alt = node.attrs.alt;
    this.dom.addEventListener('click', (e) => {
      e.preventDefault();
      let alt = prompt('New alt text:', '');
      if (alt)
        view.dispatch(
          view.state.tr.setNodeMarkup(getPos(), null, {
            src: node.attrs.src,
            alt,
          })
        );
    });
  }
  stopEvent() {
    return true;
  }
}
```

在这个例子中，当用户点击图片时会弹出 `prompt` 对话框输入新的 alt 文本。我们使用
`view.dispatch(view.state.tr.setNodeMarkup(getPos(), null, {...}))` 来发送一个事
务，调用 `setNodeMarkup` 方法更改该图片节点的属性（其中包含新的 `alt` 文本）
。`getPos()` 提供了该节点在文档中的位置。

在默认情况下，当节点被更新时，编辑器会保留节点的外层 DOM 元素，仅更新子节点部分
。节点视图可以覆盖这一行为。例如，如果我们想根据段落的内容为空情况给段落加上或去
掉一个 CSS 类，可以这样做：

```js
let view = new EditorView({
  state,
  nodeViews: {
    paragraph(node) {
      return new ParagraphView(node);
    },
  },
});

class ParagraphView {
  constructor(node) {
    this.dom = this.contentDOM = document.createElement('p');
    if (node.content.size == 0) this.dom.classList.add('empty');
  }

  update(node) {
    if (node.content.size > 0) this.dom.classList.remove('empty');
    else this.dom.classList.add('empty');
    return true;
  }
}
```

在这个例子中，我们为 `paragraph` 节点定义了视图：如果段落内容为空
（`node.content.size == 0`），就添加 `empty` 类；否则移除该类。我们把
`this.contentDOM` 设置成 `this.dom` 本身，表示段落的内容直接编辑在 `<p>` 标签内
。`update` 方法会在节点内容变化时调用，用于更新外层 DOM 的类名，并返回 `true` 表
示更新成功，ProseMirror 会继续更新其内容部分。

## 命令 (Commands)

在 ProseMirror 中，命令（Commands）是一种函数，用于实现用户可执行的编辑操作。这
些操作可以通过快捷键、菜单等触发。命令通常会接收一个编辑器状态（state）和一个可
选的调度函数（dispatch）。如果命令可以执行，则它应该使用 `dispatch` 来派发一个事
务并返回 `true`；如果命令不适用，则返回 `false`。这是我们之前介绍过的内容。以下
是另一个示例：

```js
function deleteSelection(state, dispatch) {
  if (state.selection.empty) return false;
  if (dispatch) dispatch(state.tr.deleteSelection());
  return true;
}
```

要判断某个命令是否可用但不执行它，您可以调用它时不传入 `dispatch`（或传 `null`）
。例如：如果要判断当前选区是否可删除，可以调用
`deleteSelection(view.state, null)`；而要真正执行该命令，就调用
`deleteSelection(view.state, view.dispatch)`。菜单栏可以利用这一机制来决定哪些菜
单项需要置灰（disabled）。

命令函数可以返回 `true`（表示命令已被处理并且不应继续处理）或 `false`。在默认键
盘映射中，这一返回值用于阻止键事件的传播。

## 协同编辑 (Collaborative editing)

实时协同编辑允许多个用户同时编辑同一个文档。他们的更改会立即应用到各自的本地文档
上，并随后发送给其他用户。其它用户会自动合并这些更改（无需手动解决冲突），从而保
证文档最终保持一致。本指南接下来将介绍如何连接 ProseMirror 的协同编辑功能。

### 算法 (Algorithm)

ProseMirror 的协同编辑系统使用一个**中央协调服务**（central authority）来确定更
改的应用顺序。如果两个编辑者同时提交更改，它们都会将更改发送到该服务。服务会接受
其中一个编辑者的更改并广播给所有编辑者；另一个编辑者的更改会暂时被拒绝。当该编辑
者接收到服务器的更新时，它将把自己的更改**重新基准化**（rebase）到新的文档基础上
，然后再次尝试提交。这种方式使得所有编辑者最终都能得到相同的文档。

### 协调服务 (The Authority)

协调服务（Authority）的作用很简单：它需要追踪当前的文档版本，接受编辑者提交的更
改并按顺序累积这些更改，以及在编辑者查询时提供指定版本之后的所有新更改。以下是一
个运行在同一 JavaScript 环境中的简单实现示例：

```js
class Authority {
  constructor(doc) {
    this.doc = doc;
    this.steps = []; // 已接受的所有步骤
    this.stepClientIDs = []; // 记录每个步骤来自哪个客户端
    this.onNewSteps = []; // 当有新步骤时的回调列表
  }

  receiveSteps(version, steps, clientID) {
    if (version != this.steps.length) return;

    // 应用并累积新步骤
    steps.forEach((step) => {
      this.doc = step.apply(this.doc).doc;
      this.steps.push(step);
      this.stepClientIDs.push(clientID);
    });
    // 通知监听器
    this.onNewSteps.forEach((f) => f());
  }

  stepsSince(version) {
    return {
      steps: this.steps.slice(version),
      clientIDs: this.stepClientIDs.slice(version),
    };
  }
}
```

当一个编辑器想要提交其本地更改给协调服务时，它会调用
`authority.receiveSteps(version, steps, clientID)`，传入它所知的最新版本号、刚产
生的新步骤以及它的客户端标识 `clientID`。如果服务接受了这些步骤（版本匹配时），
它就会把它们添加到自己的文档中，并通知所有监听者（通过 `onNewSteps` 回调）。

当这些步骤被接受后，编辑器会通过 `onNewSteps` 回调知道有新步骤产生，然后取出自己
新产生的步骤来进行操作。在实际部署中，您可以选择让 `receiveSteps` 返回状态来立即
确认收到步骤，但上述机制是确保在不可靠连接上也能同步的基础。

此实现会无限累积步骤列表，因此列表的长度就是当前文档的版本号。您可能希望让协调服
务在某个时候丢弃旧步骤以释放内存，但总体思路就是这样。

### `collab` 模块

`prosemirror-collab` 模块导出了一个 `collab` 函数，它生成一个插件，用于追踪本地
更改、接收远程更改并指示何时发送更改到协调服务。下面是一个示例：

```js
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema } from 'prosemirror-schema-basic';
import collab from 'prosemirror-collab';

function collabEditor(authority, place) {
  let view = new EditorView(place, {
    state: EditorState.create({
      doc: authority.doc,
      plugins: [collab.collab({ version: authority.steps.length })],
    }),
    dispatchTransaction(transaction) {
      let newState = view.state.apply(transaction);
      view.updateState(newState);
      let sendable = collab.sendableSteps(newState);
      if (sendable) {
        // 将本地未确认的步骤发送给协调服务
        authority.receiveSteps(
          sendable.version,
          sendable.steps,
          sendable.clientID
        );
      }
    },
  });

  authority.onNewSteps.push(() => {
    let newData = authority.stepsSince(collab.getVersion(view.state));
    // 将从服务收到的步骤应用到本地状态
    view.dispatch(
      collab.receiveTransaction(view.state, newData.steps, newData.clientIDs)
    );
  });

  return view;
}
```

`collabEditor` 函数创建了一个带有 `collab` 插件的编辑器。每当状态更新时，它调用
`collab.sendableSteps(newState)` 来检查是否有本地步骤需要发送给协调服务。如果有
，就调用 `authority.receiveSteps` 发送它们。同时，我们为协调服务的 `onNewSteps`
事件注册回调：当有新步骤到来时，获取自当前状态版本以来的新步骤，并使用
`collab.receiveTransaction` 创建一个更新本地状态的事务并派发它。

如果协调服务拒绝了某些步骤，这些步骤会保持未确认状态，直到收到来自服务器的新步骤
。在收到之后，由于 `onNewSteps` 回调会触发一次 dispatch，本地的未确认步骤就会再
次尝试提交。

以上就是设置协同编辑的基本步骤。在实际应用中，您还需要处理异步通信（如使用
WebSocket 或轮询）、错误处理以及如何让协调服务定期丢弃旧步骤等问题。但基本原理由
上述示例完整描述。
