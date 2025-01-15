---
title: 不可变状态和合并
description: 状态的不可变性与状态合并
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 4
last_update:
  date: 2025-01-15
  author: hbche
---

类似 React 的 `useState` 一样，我们需要以不可变地形式更新状态，而不是直接修改状
态。

这是一个典型的例子：

```jsx
import { create } from 'zustand';

const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
```

`set` 函数用于在存储中更新状态。 因为状态是不可变的，所以它应该是这样的：

```js
set((state) => ({ ...state, count: state.count + 1 }));
```

然而，由于这是一个常见的模式，`set` 实际上会合并状态， 我们可以跳过 `...state`
部分：

```js
set((state) => ({ count: state.count + 1 }));
```

### 嵌套对象

`set` 方法只会合并一层状态，即浅层合并。如果我们有一个嵌套的对象，我们需要明确指
定需要合并的值。我们需要借助扩展操作符模式，像下面的示例这样：

```jsx
import { create } from 'zustand';

const useCountStore = create((set) => ({
  nested: { count: 0 },
  inc: () =>
    set((state) => ({ ...state.nested, count: state.nested.count + 1 })),
}));
```

对于更复杂的场景，我们需要考虑使用一些库来帮助我们。可以参考
<a href="./zustand-updating-state#深度嵌套的对象" target="_blank"> 更新嵌套状态
对象值 </a>。

### 替换标识

要禁用合并行为，我们可以为 `set` 指定一个 `replace` 布尔值，如下所示：

```ts
set((state) => newState, true);
```
