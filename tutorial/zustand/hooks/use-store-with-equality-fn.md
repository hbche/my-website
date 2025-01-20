---
title: useStoreWithEqualityFn ⚛️
description: 如何在React中高效使用原始store
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 29
last_update:
  date: 2025-01-20
  author: hbche
---

`useStoreWithRedirectityFn`是一个 React Hook，可以让你在 React 中使用一个
vanilla store，就像 `useStore`。

```js
const someState = useStoreWithEqualityFn(store, selectorFn, equalityFn);
```

- [类型](#类型)
  - [签名](#签名)
- [参考](#参考)
  - [`useStoreWithEqualityFn(store, selectorFn, equalityFn)`](#usestorewithequalityfnstore-selectorfn-equalityfn)
    - [参数](#参数)
    - [返回值](#返回值)
- [使用](#使用)
  - [在 React 中使用全局 vanila store](#在-react-中使用全局-vanila-store)
  - [在 React 中动态使用全局 vanila store](#在-react-中动态使用全局-vanila-store)
  - [在 React 中使用局部 vanila store](#在-react-中使用局部-vanila-store)
  - [在 React 中动态使用局部 vanila store](#在-react-中动态使用局部-vanila-store)
- [故障排除](#故障排除)

## 类型

### 签名

```ts
useStoreWithEqualityFn<T, U = T>(store: StoreApi<T>, selectorFn: (state: T) => U, equalityFn: (a: T, b: T) => boolean): U
```

## 参考

### `useStoreWithEqualityFn(store, selectorFn, equalityFn)`

#### 参数

- `storeApi`: 允许你访问 store API 实用程序的实例。
- `selectorFn`: 允许你基于当前 state 返回数据的函数
- `equalityFn`: 允许你跳过重新渲染的方法

#### 返回值

`useStoreWithEqualityFn` 根据选择器函数返回基于当前状态的任何数据并允许你使用相
等函数跳过重新渲染。它需要一个 store，一个选择器函数和一个相等性比较函数作为参数
。

## 使用

### 在 React 中使用全局 vanila store

首先，让我们设置一个 store，它将保存屏幕上的点的位置。我们将定义 store 来管
理`x`和`y`坐标并提供更新这些坐标动作。

```ts
type PositionStoreState = {
  position: {
    x: number;
    y: number;
  };
};

type PositionStoreActions = {
  setPosition: (position: PositionStoreState['position']) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

export const positionStore = createStore<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));
```

接下来，我们将创建一个 `MovingDot` 组件，它呈现一个表示点的 div。此组件将使用
store 来跟踪和更新点的位置。

```tsx
export function MovingDot() {
  const position = useStoreWithEqualityFn(
    positionStore,
    (state) => state.position,
    shallow
  );
  const setPosition = useStoreWithEqualityFn(
    positionStore,
    (state) => state.setPosition,
    shallow
  );

  return (
    <div>
      <h2>Moving dot with global store</h2>
      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </div>
  );
}
```

最后，我们在 `App` 组件中渲染 `MovingDot` 组件。

```tsx
export function App() {
  return <MovingDot />;
}
```

### 在 React 中动态使用全局 vanila store

首先，让我们设置一个 store，它将保存屏幕上的点的位置。我们将定义 store 来管
理`x`和`y`坐标并提供更新这些坐标动作。

```ts
import { createStore } from 'zustand';

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: () => void;
};

type CounterStore = CounterState & CounterActions;

export const createCOunterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
```

接下来，我们将创建一个工厂函数来管理计数器 store 的创建和检索。这允许每个选项卡
都有自己的独立计数器。

```ts
import { createCounterStore } from './create-counter-store';

const defaultCounterStores = new Map<
  string,
  ReturnType<typeof createCounterStore>
>();

const createCounterStoreFactory = (
  counterStores: typeof defaultCounterStores
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.get(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }
    return counterStores.get(counterStoreKey);
  };
};

export const getOrCreateCounterStoreByKey =
  createCounterStoreFactory(defaultCounterStores);
```

现在，让我们构建 Tabs 组件，用户可以在其中切换选项卡并递增每个选项卡的计数。

```tsx
export function TabsCount() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useStoreWithEqualityFn(
    getOrCreateCounterStoreByKey(`tab-${currentTabIndex}`),
    (state) => state,
    shallow
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

最后，我们将创建`App`组件，它呈现选项卡及其各自的计数器。每个选项卡的计数器状态
都是独立管理的。

```tsx
export default function App() {
  return <Tabs />;
}
```

### 在 React 中使用局部 vanila store

首先，让我们设置一个 store，它将保存屏幕上的点的位置。我们将定义 store 以管理
`x` 和 `y` 坐标并提供更新这些坐标动作。

```ts
type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState['position']) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const createPositionStore = () => {
  return createStore<PositionStore>()((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position }),
  }));
};
```

接下来，我们将创建一个上下文和一个提供程序组件，以通过 React 向下传递 store。组
件树这允许每个 `MovingDot` 组件具有其自己的独立状态。

```tsx
const PositionStoreContext = React.createContext<ReturnType<
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

为了简化对 store 的访问，我们将创建一个 React 自定义挂钩 `usePositionStore`。这
个钩子将从上下文读取 store，并允许我们选择状态的特定部分。

```ts
export const usePositionSore = <U>(selector: (state: PositionStore) => U) => {
  const positionStore = useContext(PositionStoreContext);

  if (!positionStore) {
    throw new Error(
      'usePositionStore must be used within PositionStoreProvider'
    );
  }

  return useStoreWithEqualityFn(positionStore, selector, shallow);
};
```

现在，让我们创建 `MovingDot` 组件，它将呈现一个跟随鼠标光标的点在它的容器里。

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

### 在 React 中动态使用局部 vanila store

首先，我们将创建一个工厂函数，它生成一个用于管理计数器状态的 store。每个选项卡都
有自己的这个商店的实例。

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
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};
```

接下来，我们将创建一个工厂函数来管理计数器 store 的创建和检索。这允许每个选项卡
都有自己的独立计数器。

```ts
export const createCounterStoreFactory = (
  counterStores: Map<string, ReturnType<typeof createCounterStore>>
) => {
  return (counterStoreKey: string) => {
    if (!counterStores.get(counterStoreKey)) {
      counterStores.set(counterStoreKey, createCounterStore());
    }

    return counterStores.get(counterStoreKey)!;
  };
};
```

接下来，我们需要一种在整个应用中管理和访问这些 store 的方法。

```tsx
export const CounterStoreContext = React.createContext<Map<
  string,
  ReturnType<typeof createCounterStore>
> | null>(null);

export function CounterStoreProvider({ children }: PropsWithChildren) {
  const [counterStores] = useState(
    () => new Map<string, ReturnType<typeof createCounterStore>>()
  );

  return (
    <CounterStoreContext.Provider value={counterStores}>
      {children}
    </CounterStoreContext.Provider>
  );
}
```

现在，我们将创建一个自定义钩子 `useCounterStore` ，它允许我们访问给定选项卡的
store。

```ts
export function useCounterStore<U>(
  storeKey: string,
  selector: (state: CounterStore) => U
) {
  const stores = useContext(CounterStoreContext);

  if (stores === undefined) {
    throw new Error(
      'useCounterStore must be used within CounterStoresProvider'
    );
  }

  const getOrCreateCounterStoreByKey = useCallback(
    (storeKey: string) => createCounterStoreFactory(stores!)(storeKey),
    [stores]
  );

  return useStoreWithEqualityFn(
    getOrCreateCounterStoreByKey(storeKey),
    selector,
    shallow
  );
}
```

现在，让我们构建 `Tabs` 组件，用户可以在其中切换选项卡并递增每个选项卡的计数器。

```tsx
function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const counterState = useCounterStore(
    `tab-${currentTabIndex}`,
    (state) => state
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

最后，我们将创建 `App` 组件，它呈现选项卡及其各自的计数器。每个选项卡的计数器状
态都是独立管理的。

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
