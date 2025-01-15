---
title: 使用 props 初始化状态
description: 使用 props 初始化状态
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 14
last_update:
  date: 2025-01-15
  author: hbche
---

在需要依赖注入的情况下，例如当一个 store 需要使用来自组件的属性进行初始化时，推
荐的方法是使用原生 store 结合 React.context。

### 使用 `createStore` 创建 store

```ts
import { createStore } from 'zustand';

interface BearProps {
  bears: number;
}

export interface BearState extends BearProps {
  addBear: () => void;
}

export type BearStore = ReturnType<typeof createBearStore>;

export const createBearStore = (initProps?: BearProps) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };

  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addBear: () =>
      set((state) => ({
        bears: state.bears + 1,
      })),
  }));
};
```

### 使用 `React.createContext` 创建上下文

```ts
import React from 'react';
import { BearStore } from './create-bear-store';

export const BearContext = React.createContext<BearStore | null>(null);
```

#### 基础的组件使用

```tsx
import { useRef } from 'react';
import { BearContext } from './bear-context';
import { createBearStore } from './create-bear-store';
import BasicConsumer from './basic-consumer';

export default function InitializeStateWithPropsDemo() {
  const store = useRef(createBearStore()).current;

  return (
    <BearContext.Provider value={store}>
      <BasicConsumer />
    </BearContext.Provider>
  );
}
```

```tsx
import { useContext } from 'react';
import { BearContext } from './bear-context';
import { StoreApi, useStore } from 'zustand';
import { BearState } from './create-bear-store';

export default function BasicConsumer() {
  const store = useContext(BearContext);

  if (!store) throw new Error('Missing BearContext.Provider in the tree.');

  const bears = useStore<StoreApi<BearState>, BearState['bears']>(
    store,
    (state: BearState) => state.bears
  );
  const addBear = useStore<StoreApi<BearState>, BearState['addBear']>(
    store,
    (state: BearState) => state.addBear
  );

  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}
```

### 通用模式

#### 封装上下文 Provider 组件

```tsx
import { useRef } from 'react';
import { BearProps, BearStore, createBearStore } from './create-bear-store';
import { BearContext } from './bear-context';

type BearProviderProps = React.PropsWithChildren<BearProps>;

export default function BearProvider({
  children,
  ...props
}: BearProviderProps) {
  const storeRef = useRef<BearStore>();
  if (!storeRef.current) {
    storeRef.current = createBearStore(props);
  }

  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
}
```

#### 将上下文逻辑提取到一个自定义 hook

```ts
import { useContext } from 'react';
import { BearContext } from './bear-context';
import { useStore } from 'zustand';
import { BearState } from './create-bear-store';

export default function useBearContext<T>(
  selector: (state: BearState) => T
): T {
  const store = useContext(BearContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree.');
  return useStore(store, selector);
}
```

```tsx
import { BearState } from './create-bear-store';
import useBearContext from './use-bear-context';

export default function BasicConsumer() {
  const bears = useBearContext<BearState['bears']>((state) => state.bears);
  const addBear = useBearContext<BearState['addBear']>(
    (state) => state.addBear
  );

  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}
```

#### 可选地允许使用自定义的相等性函数

```ts
import { useContext } from 'react';
import { useStoreWithEqualityFn } from 'zustand/traditional';

function useBearContext<T>(
  selector: (state: BearState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(BearContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree');
  return useStoreWithEqualityFn(store, selector, equalityFn);
}
```
