---
title: useStore ⚛️
description: 如何在React中使用原始store
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 28
last_update:
  date: 2025-01-17
  author: hbche
---

`useStore` 是一个让我们在 React 中使用原始 Store 的 Hook。

```js
const someStore = useStore(store, selectorFn);
```

- [类型](#类型)
  - [签名](#签名)
- [参考](#参考)
  - [`useStore(store, selectorFn)`](#usestorestore-selectorfn)
    - [参数](#参数)
    - [返回值](#返回值)
- [用法](#用法)
  - [在 React 中使用全局原始 store](#在-react-中使用全局原始-store)
  - [在 React 中使用动态全局原始 store](#在-react-中使用动态全局原始-store)
  - [在 React 使用作用域(非全局)原始 store](#在-react-使用作用域非全局原始-store)
  - [在 React 中使用动态作用域(非全局)原始 store](#在-react-中使用动态作用域非全局原始-store)
- [故障排除](#故障排除)

## 类型

### 签名

```ts
useStore<StoreApi<T>, U = T>(store: StoreApi<T>, selectorFn?: (state: T) => U) => UseBoundStore<StoreApi<T>>
```

## 参考

### `useStore(store, selectorFn)`

#### 参数

- `storeApi`: 该实例允许我们访问 store 上的 API
- `selectorFn`: 允许我们基于当前状态返回数据的函数

#### 返回值

`useStore` 根据选择器函数返回基于当前状态的任何数据。需要将 store 和 选择器函数
作为参数传入。

## 用法

### 在 React 中使用全局原始 store

首先，让我们创建一个 store 实例来存储屏幕上点的坐标。我们将定义 store 来管理 `x`
和 `y` 坐标并且提供一个更新这些坐标的 action。

```tsx
type PositionStoreState = {
  position: { x: number; y: number };
};

type PositionStoreActions = {
  setPosition: (position: PositionStoreState['position']) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));
```

接下来，我们将创建一个 `MovingDot` 组件，它呈现一个表示点的 div。这个组件将使用
store 跟踪和更新点的坐标。

```tsx
import { useStore } from 'zustand';
import { positionStore } from './position-store';

export function MovingDot() {
  const position = useStore(positionStore, (state) => state.position);
  const setPosition = useStore(positionStore, (state) => state.setPosition);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        style={{
          position: 'absolute',
          transform: `translate(${position.x}px, ${position.y}px)`,
          top: -10,
          left: -10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'red',
        }}
      ></div>
    </div>
  );
}
```

最后，我们将在 `App` 组件中渲染 `MovingDot` 组件。

```tsx
export default function App() {
  return <MovingDot />;
}
```

### 在 React 中使用动态全局原始 store

首先，我们创建一个工厂函数生成 store 来管理 counter 的状态。每一个 tab 都有它自
己的 store 实例。

```ts
import { createStore } from 'zustand';

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: () => void;
};

type CounterStore = CounterState & CounterActions;

export const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({
        count: state.count + 1,
      }));
    },
  }));
};
```

接下来，我们将创建一个工厂方法来管理计数器 store 的创建和检索。让每个选项卡都有
自己独立的计数器。

```ts
import { createCounterStore } from './create-counter-store';

const defaultCounterStores = new Map<
  string,
  ReturnType<typeof createCounterStore>
>();

const createCounterStoryFactory = (
  counterStores: typeof defaultCounterStores
) => {
  return (counterStoreKey: string) => {
    if (!defaultCounterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }

    return defaultCounterStores.get(counterStoreKey);
  };
};

export const getOrCreateCounterStoreByKey =
  createCounterStoryFactory(defaultCounterStores);
```

现在，让我们创建 Tabs 组件，用户可以在选项卡之间切换并且可以更新每个选项卡的计数
器。

```tsx
import { useState } from 'react';
import { getOrCreateCounterStoreByKey } from './create-counter-factory';
import { useStore } from 'zustand';

export function TabsCounter() {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const counterState = useStore(
    getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`)
  );

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid salmon',
          paddingBottom: 4,
        }}
      >
        <button
          type='button'
          style={{
            border: '1px solid salmon',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type='button'
          style={{
            border: '1px solid salmon',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type='button'
          style={{
            border: '1px solid salmon',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type='button' onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}
```

最后，我们将创建 `App` 组件，它将呈现选项卡及其各自的计数器。每个选项卡的计数器
状态都是独立管理的。

```tsx
export default funciton App() {
    return <TabsCounter />;
}
```

### 在 React 使用作用域(非全局)原始 store

首先，让我们设置一个 store，它将保存屏幕上的点的位置。我们将定义 store 以管理
`x` 和 `y` 坐标并提供更新这些坐标的 action。

```tsx
import { createStore } from 'zustand';

type PositionStoreState = {
  position: { x: number; y: number };
};

type PositionStoreActions = {
  setPosition: (position: PositionStoreState['position']) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

export const createPositionStore = () => {
  return createStore<PositionStore>()((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }));
};
```

接下来，我们将创建一个上下文和一个 provider 组件，以通过 React 向下传递 store。

```tsx
import React, { PropsWithChildren, useState } from 'react';
import { createPositionStore } from './position-store';

export const PositionStoreContext = React.createContext<ReturnType<
  typeof createPositionStore
> | null>(null);

export function PositionStoreProvider({ children }: PropsWithChildren) {
  const [positionStore] = useState(createPositionStore);

  return (
    <PositionStoreContext.Provider value={positionStore}>
      {children}
    </PositionStoreContext.Provider>
  );
}
```

为了简化对 store 的访问，我们将创建一个 React 自定义钩子`usePositionStore`。这个
钩子将从上下文读取存储，并允许我们选择状态的特定部分。

```ts
import React from 'react';
import { PositionStoreContext } from './position-store-provider';
import { useStore } from 'zustand';
import { PositionStore } from './position-store';

export function usePositionStore<U>(selector: (state: PositionStore) => U) {
  const positionStore = React.useContext(PositionStoreContext);

  if (!positionStore) {
    throw new Error(
      'usePositionStore must be used within PositionStoreProvider'
    );
  }

  return useStore(positionStore, selector);
}
```

现在，让我们创建`MovingDot`组件，它将呈现一个跟随鼠标光标的点在它的容器里。

```tsx
function MovingDot({ color }: { color: string }) {
  const position = usePositionStore((state) => state.position);
  const setPosition = usePositionStore((state) => state.setPosition);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x:
            e.clientX > e.currentTarget.clientWidth
              ? e.clientX - e.currentTarget.clientWidth
              : e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: 'relative',
        width: '50vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: color,
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
```

最后，我们将把所有东西都放在 `App` 组件中，在那里我们呈现两个 `MovingDot` 每个组
件都有自己的独立状态。

```tsx
export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <PositionStoreProvider>
        <MovingDot color='red' />
      </PositionStoreProvider>
      <PositionStoreProvider>
        <MovingDot color='blue' />
      </PositionStoreProvider>
    </div>
  );
}
```

### 在 React 中使用动态作用域(非全局)原始 store

首先，我们将创建一个工厂函数，它生成一个用于管理计数器状态的 store。每个选项卡都
有自己的这个 store 的实例。

```ts
import { createStore } from 'zustand';

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: () => void;
};

type CounterStore = CounterState & CounterActions;

export const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({
        count: state.count + 1,
      }));
    },
  }));
};
```

接下来，我们将创建一个工厂函数来管理计数器 store 的创建和检索。这允许每个选项卡
都有自己独立的计数器。

```ts
const createCounterStoreFactory = (
  counterStores: Map<string, ReturnType<typeof createCounterStore>>
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.has(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey)!;
  };
};
```

接下来，我们需要一种方法来管理和访问整个应用程序中的这些 store。我们将使用上下文
传递这些 store。

```tsx
import React, { PropsWithChildren, useState } from 'react';
import { createCounterStore } from './create-counter-store';

const CounterStoresContext = React.createContext<Map<
  string,
  ReturnType<typeof createCounterStore>
> | null>(null);

export function CounterStoresProvider({ children }: PropsWithChildren) {
  const [stores] = useState(
    () => new Map<string, ReturnType<typeof createCounterStore>>()
  );

  return (
    <CounterStoresContext.Provider value={stores}>
      {children}
    </CounterStoresContext.Provider>
  );
}
```

现在，我们将创建一个自定义钩子 `useCounterStore`，它允许我们根据给定选项卡找到响
应的 store。

```ts
export const useCounterStore = <U>(
  name: string,
  selector: (state: CounterStore) => U
) => {
  const stores = useContext(CounterStoresContext);

  if (!stores) {
    throw new Error(
      'useCounterStore must be used within CounterStoresProvider'
    );
  }

  const getOrCreateCounterStoreByKey = useCallback(
    (key: string) => createCounterStoreFactory(stores)(key),
    [stores]
  );

  return useStore(getOrCreateCounterStoreByKey(name), selector);
};
```

现在，让我们构建 Tabs 组件，用户可以在每一个选项卡之间切换。

```tsx
import { useState } from 'react';
import { useCounterStore } from './use-counter-store';

export function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useCounterStore(
    `tab-${currentTabIndex}`,
    (state) => state
  );

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <h3>Using dynamic scoped (non-global) vanilla stores in React</h3>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid salmon',
          paddingBottom: 4,
        }}
      >
        <button
          type='button'
          style={{
            border: '1px solid salmon',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentTabIndex(0)}
        >
          Tab 1
        </button>
        <button
          type='button'
          style={{
            border: '1px solid salmon',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentTabIndex(1)}
        >
          Tab 2
        </button>
        <button
          type='button'
          style={{
            border: '1px solid salmon',
            backgroundColor: '#fff',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentTabIndex(2)}
        >
          Tab 3
        </button>
      </div>
      <div style={{ padding: 4 }}>
        Content of Tab {currentTabIndex + 1}
        <br /> <br />
        <button type='button' onClick={() => counterState.increment()}>
          Count: {counterState.count}
        </button>
      </div>
    </div>
  );
}
```

最后，我们需要创建一个 `App` 组件，它呈现选项卡及其各自的计数器。每个选项卡的计
数器状态都是独立管理的。

```tsx
export default function App() {
  return (
    <CounterStoresProvider>
      <Tabs />
    </CounterStoresProvider>
  );
}
```

## 故障排除
