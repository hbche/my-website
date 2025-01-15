---
title: 分片模式
description: 分片模式
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 15
last_update:
  date: 2025-01-15
  author: hbche
---

### 将 store 划分为更小的 store

随着我们添加更多功能，我们的 store 可能会变得越来越大，也越来越难以维护。

我们可以将主 store 划分为更小的单独 store，以实现模块化。在 Zustand 中，这很容易
实现！

第一个单独的 store：

```ts
import { StateCreator } from 'zustand';
import { FishSlice } from './use-fish-slice';

export interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

export const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = (set) => {
  return {
    bears: 0,
    addBear: () => set((state) => ({ ...state, bears: state.bears + 1 })),
    eatFish: () => set((state) => ({ ...state, fishes: state.fishes - 1 })),
  };
};
```

另一个单独的 store ：

```ts
import { StateCreator } from 'zustand';
import { BearSlice } from './use-bear-slice';

export interface FishSlice {
  fishes: number;
  addFish: () => void;
}

export const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
```

我们现在可以将这两个 store 合并为一个 **bounded store**：

```ts
const;
```

#### 在 React 组件中使用

```tsx
import useBoundStore from './bound-store';

export default function StoreSliceDemo() {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addBear = useBoundStore((state) => state.addBear);
  const eatFish = useBoundStore((state) => state.eatFish);
  return (
    <div>
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button onClick={() => addBear()}>Add a bear</button>
      <button onClick={() => eatFish()}>Eat a fish</button>
    </div>
  );
}
```

#### 更新多 store

在同一个方法，同一时刻，我们可以更新多个 store。

共享 store：

```ts
import { StateCreator } from 'zustand';
import { BearSlice } from './create-bear-slice';
import { FishSlice } from './create-fish-slice';

export interface SharedSlice {
  addBoth: () => void;
  getBoth: () => number;
}

export const createSharedSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  SharedSlice
> = (_set, get) => {
  return {
    addBoth: () => {
      get().addBear();
      get().addFish();
    },
    getBoth: () => {
      return get().bears + get().fishes;
    },
  };
};
```

更新 bound store，增加共享 store：

```tsx
import { create } from 'zustand';
import { BearSlice, createBearSlice } from './create-bear-slice';
import { FishSlice, createFishSlice } from './create-fish-slice';
import { createSharedSlice, SharedSlice } from './create-shared-slice';

const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createSharedSlice(...a),
}));

export default useBoundStore;
```

### 添加中间件

向合并后的 store 添加中间件的方式与其他普通 store 相同。

添加 `persist` 中间件到我们的 `useBoundStore` 方法中：

```ts
import { create } from 'zustand';
import { BearSlice, createBearSlice } from './create-bear-slice';
import { FishSlice, createFishSlice } from './create-fish-slice';
import { createSharedSlice, SharedSlice } from './create-shared-slice';
import { persist } from 'zustand/middleware';

const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()(
  persist(
    (...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
      ...createSharedSlice(...a),
    }),
    { name: '' }
  )
);

export default useBoundStore;
```

请注意，我们应该只在合并后的 store 中应用中间件。在单独的切片内部应用它们可能会
导致意外的问题。

### 使用 TypeScript

关于如何在 Zustand 中使用 TypeScript 的切片模式的详细指南可以在这里找到
：[这里](https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern)。
