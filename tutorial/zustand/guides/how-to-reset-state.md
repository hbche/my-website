---
title: 如何重置状态
description: 如何重置状态
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 13
last_update:
  date: 2025-01-16
  author: hbche
---

以下模式可用于将状态重置为其初始值。

```ts
import { StateCreator, create } from 'zustand';

interface State {
  salmon: number;
  tuna: number;
}

interface Action {
  addSalmon: (qty: number) => void;
  addTuna: (qty: number) => void;
  reset: (qty: number) => void;
}

const initialState: State = {
  salmon: 0,
  tuna: 0,
};

const useSlice: StateCreator<State & Action, [], [], State> = create<
  State & Action
>()((set, get) => ({
  ...initialState,
  addSalmon: (qty) => set({ salmon: get().salmon + qty }),
  addTuna: (qty) => set({ tuna: get().tuna + qty }),
  reset: () => set({ ...initialState }),
}));
```

一次重置多个 store：

```ts
import { create as _create } from 'zustand';
import type { StateCreator } from 'zustand';

const storeResetFns = new Set<() => void>();

const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

export const create = (<T extends unknown>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
      store.setState(initialState, true);
    });
    return store;
  };
}) as typeof _create;
```

使用切片模式重置绑定的存储

```ts
import create from 'zustand';
import type { StateCreator } from 'zustand';

const sliceResetFns = new Set<() => void>();

export const resetAllSlices = () => {
  sliceResetFns.forEach((resetFn) => {
    resetFn();
  });
};

const initialBearState = { bears: 0 };

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = (set) => {
  sliceResetFns.add(() => set(initialBearState));
  return {
    ...initialBearState,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
    eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
  };
};

const initialStateFish = { fishes: 0 };

interface FishSlice {
  fishes: number;
  addFish: () => void;
}

const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = (set) => {
  sliceResetFns.add(() => set(initialStateFish));
  return {
    ...initialStateFish,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  };
};

const useBoundStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));

export default useBoundStore;
```
