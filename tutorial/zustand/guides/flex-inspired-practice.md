---
title: 受Flux启发的实践
description: 受Flux启发的实践
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 5
last_update:
  date: 2025-01-15
  author: hbche
---

尽管 Zustand 是一个无观点的库，但我们确实推荐一些模式。这些模式最初受到 Flux 实
践的启发，最近又受到 Redux 的影响，所以如果你是从另一个库转过来的，你应该会感到
很熟悉。

然而，Zustand 在一些基本方面确实有所不同，因此某些术语可能不会与其他库完全对应。

### 推荐的模式

#### 单一 store

我们应用程序的全局状态应该位于一个单独的 Zustand store 中。

如果我们有一个大型应用程序，Zustand 支持将 store
[分割成多个切片](./slices-pattern)。

#### 使用 `set` / `setState` 更新 store

始终使用 `set`（或 `setState`）来对 store 进行更新。`set`（和 `setState`）确保所
描述的更新被正确地合并，监听器被适当地通知。

#### 将 store action 放在一起

在 Zustand 中，状态可以在没有 Flux 库中找到的分派操作和 reducer 的情况下更新。这
些存储操作可以直接添加到存储中，如下所示。

可选地，通过使用 `setState`，它们可
以[位于 store 之外](./practice-with-no-store-actions)。

```ts
onst useBoundStore = create((set) => ({
  storeSliceA: ...,
  storeSliceB: ...,
  storeSliceC: ...,
  updateX: () => set(...),
  updateY: () => set(...),
}))
```

### Redux 风格的模式

如果我们习惯类似 Redux 的 reducer，我们可以在 store 的根级别定义一个 dispatch 函
数：

```ts
import { create } from 'zustand';

const types = {
  increase: 'INCREASE',
  decrease: 'DECREASE',
} as const;

type TypeEnum = (typeof types)[keyof typeof types]; // 获取 `types` 对象值的联合类型

type State = {
  grumpiness: number;
};

type ReducerAction = {
  // 使用 keyof 和索引类型创建类型别名
  type: TypeEnum;
  by?: number;
};

const reducer = (state: State, { type, by = 1 }: ReducerAction) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by };
    case types.decrease:
      return { grumpiness: state.grumpiness - by };
    default:
      return state;
  }
};

type Action = {
  dispatch: (action: ReducerAction) => void;
};

const useGrumpyStore = create<State & Action>((set) => ({
  grumpiness: 0,
  dispatch: (action: ReducerAction) => {
    set((state) => reducer(state, action));
  },
}));

const dispatch = useGrumpyStore((state) => state.dispatch);
dispatch({ type: types.increase, by: 2 });
```

我们也可以使用 redux 中间件。它连接我们的主 reducer，设置初始状态，并将 dispatch
函数添加到状态本身以及原生 API 中。

```tsx
import { redux } from 'zustand/middleware';

const useReduxStore = create(redux(reducer, initialState));
```

另一种更新 store 的方式可能是通过包装状态函数的函数。这些函数也可以处理动作的副
作用。例如，处理 HTTP 调用。若想以非响应式的方式使用 Zustand，请参阅
[README](https://github.com/pmndrs/zustand#readingwriting-state-and-reacting-to-changes-outside-of-components)。
