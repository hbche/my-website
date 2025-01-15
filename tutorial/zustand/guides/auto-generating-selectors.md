---
title: 自动生成选择器
description: 自动生成选择器
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 6
last_update:
  date: 2025-01-15
  author: hbche
---

我们建议在使用 store 中的属性或动作时使用选择器。我们可以像这样访问 store 中的值
：

```ts
const bears = useBearStore((state) => state.bears);
```

然而，写这些可能会很乏味。如果我们也这样觉得，我们可以使用自动生成选择器。

### 创建一个 createSelectors 方法

```ts
import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

function createSelectors<S extends UseBoundStore<StoreApi<object>>>(_store: S) {
  let store = _store as WithSelectors<S>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
}
```

如果我们正好有个像下面这样的 store：

```ts
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const useBearStoreBase = create<BearState>((set) => ({
  bears: 0,
  increase: (by: number) => {
    set((state) => ({ bears: state.bears + by }));
  },
  increment: () => {
    set((state) => ({ bears: state.bears + 1 }));
  },
}));
```

将我们的 store 作为参数调用 createStores 函数：

```ts
const useBearStore = createSelectors(useBearStoreBase);
```

现在 selector 自动生成了，我们可以直接访问了：

```ts
const bears = useBearStore.use.bears();
const increment = useBearStore.use.increment();
```

### 原生 store

如果我们使用用一个原生 store ，我们的 createSelectors 实现如下：

```ts
import { StoreApi, useStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

function createSelectors<S extends StoreApi<object>>(_store: S) {
  let store = _store as WithSelectors<S>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () =>
      useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
}
```

使用方式与 React store 相同。我们有个 store 如下：

```ts
interface BearState {
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const store = createStore<BearState>((set) => ({
  bears: 0,
  increase: (by: number) => {
    set((state) => ({ bears: state.bears + by }));
  },
  increment: () => {
    set((state) => ({ bears: state.bears + 1 }));
  },
}));
```

将我们的放他应用到我们的 store 上来：

```ts
const useBearStore = createSelectors(store);
```

现在 selector 自动生成了，我们可以直接访问了：

```ts
const bears = useBearStore.use.bears();
const increment = useBearStore.use.increment();
```

### 三方库

- [auto-zustand-selectors-hook](https://github.com/Albert-Gao/auto-zustand-selectors-hook)
- [react-hooks-global-state](https://github.com/dai-shi/react-hooks-global-state)
- [zustood](https://github.com/udecode/zustand-x)
- [@davstack/store](https://github.com/DawidWraga/davstack)
