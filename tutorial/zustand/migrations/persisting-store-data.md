---
title: 持久化Store数据
description: 持久化Store数据
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 20
last_update:
  date: 2025-01-16
  author: hbche
---

Persist 中间件允许我们在 storage（例如
：`localStorage`，`AsyncStorage`，`IndexedDB`）存储我们的 Zustand 状态，从而持久
化其数据。

这个中间件同时支持像 `localStorage` 这样的同步存储，还支持像 `AsyncStorage` 这样
的异步存储，但是使用异步存储确实存在一些开销。详情请参
阅[Hydration 和异步存储](#hydration-and-asynchronous-storages)

## 简单示例

```ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
  bears: number;
  addABear: () => void;
}

export const useBearStore = create<State>()(
  persist(
    (set, get) => {
      return {
        bears: 0,
        addABear: () => set({ bears: get().bears + 1 }),
      };
    },
    {
      name: 'food-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
```

## 选项

### `name`

这是唯一需要的选项。 给定的名称将用作存储我们的 Zustand 状态的键，因此它必须是唯
一的。

### `storage`

> 类型: `() => StateStorage`

`StateStorage` 可以像下面这样导入：

```ts
import { StateStorage } from 'zustand/middleware';
```

> 默认: `createJSONStorage(() => localStorage)`

为了能够使用自己的存储。只需传递一个返回我们想要使用的 storage 的函数即可。建议
使用 [`createJSONStorage`](#createJSONStorage) 辅助函数创建符合 `StateStorage`
接口的 `storage` 对象。

示例：

```ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set, get) => {
      return {
        // ...
      };
    },
    {
      // ...
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

### `partialize`

> 类型: `(state: Object) => Object`

> 默认: `(state) => state`

允许我们从 state 中选取部分字段存储到 storage 中。

我们可以使用下面的逻辑省略多余的字段：

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      partialize: (state) => {
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['foo'].includes(key))
        );
      },
    }
  )
);
```

我们也可以使用下面的方式只选取指定的字段：

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      partialize: (state) => ({ bar: state.bar }),
    }
  )
);
```

### `onRehydrateStorage`

> 类型: `(state: Object) => ((state?: Object, error?: Error) => void) | void`

此选项为我们提供了一个监听函数，当 storage 重新注入时会被调用

示例：

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      //   partialize: (state) => ({ bar: state.bar }),
      onRehydrateStorage: (state) => {
        console.log('hydration starts');

        // 可选
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error);
          } else {
            console.log('hydration finished');
          }
        };
      },
    }
  )
);
```

### `version`

> 类型: `number`

> 默认: `0`

如果我们想在存储中引入 breaking change（例如，重命名字段），我们可以指定一个新的
版本号。默认情况下，如果存储中的版本与代码中的版本不匹配，则不会使用存储的值。我
们可以使用下面的 [`migrate`](#migrate) 函数来处理 breaking change，以便持久化以
前存储的数据。

### `migrate`

> 类型: `(persistedState: Object, version: number) => Object | Promise<Object>`

> 默认: `(persistedState) => persistedState`

可以使用此选项来处理版本迁移。 迁移函数接收持久化的 state 和版本号作为参数。 它
必须返回一个符合最新版本（代码中的版本）的 state。

例如，如果我们想重命名一个字段，可以使用以下方法：

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      newField: 0, // let's say this field was named otherwise in version 0
    }),
    {
      // ...
      version: 1, // a migration will be triggered if the version in the storage mismatches this one
      migrate: (persistedState, version) => {
        if (version === 0) {
          // if the stored value is in version 0, we rename the field to the new name
          persistedState.newField = persistedState.oldField;
          delete persistedState.oldField;
        }

        return persistedState;
      },
    }
  )
);
```

### `merge`

> 类型: `(persistedState: Object, currentState: Object) => Object`

> 默认:
> `(persistedState, currentState) => ({...currentState, ...persistedState})`

在某些场景下，我们可能想使用自定义合并函数来合并持久化的状态和当前的状态。

默认情况下，中间件执行浅合并。 如果我们想部分持久化了嵌套对象，浅合并可能不够。

例如，如果存储包含以下内容：

```ts
{
  foo: {
    bar: 0;
  }
}
```

我们的 Zustand store 包含以下内容：

```ts
{
  foo: {
    bar: 0,
    baz: 1,
 },
}
```

浅合并将从 `foo` 对象中擦除 `baz` 字段。 解决这个问题的一种方法是提供一个自定义
的深度合并函数：

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      migrate: (persistedState, currentState) =>
        deepMerge(currentState, persistedState),
    }
  )
);
```

### `skipHydration`

> 类型: `boolean | undefined`

> 默认: `undefined`

默认情况下，存储将在初始化时进行填充。

在某些应用程序中，我们可能需要控制第一次填充何时发生。 例如，在服务器渲染的应用
程序中。

如果我们设置了 skipHydration，则不会调用初始的填充调用， 并且我们需要手动调用
rehydrate()。

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBoundStore = create(
  persist(
    (set, get) => ({
      count: 0,
    }),
    {
      // ...
      skipHydration: true,
    }
  )
);
```

```tsx
import { useEffect } from "react";
import { useBoundStore } from "./persisting-store-data";

export function StoreComsumer() {
    // 在组件挂在之后填充持久化存储
    useEffect(() => {
        useBoundStore.persist.rehydrate();
    }, []);

    return (
        // ...
    );
}
```

## API

> 版本: >= 3.6.3

Persist API 使我们能够与 Persist 中间件进行多种交互，无论是在 React 组件内部还是
外部。

### `getOptions`

> 类型: `() => Partial<PersistOptions>`

> 返回值: Options of the Persist middleware

例如，我们可以获取 storage 名称

```ts
useBoundStore.persist.getOptions().name;
```

### `setOptions`

> 类型: `(newOptions: Partial<PersistOptions>) => void`

修改中间件的 options。 请注意，新选项将与当前选项合并。

例如，这可以用来更改存储名称：

```ts
useBoundStore.persist.setOptions({ name: 'new-name' });
```

或者甚至更改存储引擎：

```ts
useBoundStore.persist.setOptions({
  storage: createJSONStorage(() => sessionStorage),
});
```

### `clearStorage`

> 类型: `() => void`

清除存储在 [`name`](#name) 键下的所有内容。

```ts
useBoundStore.persist.clearStorage();
```

### `rehydrate`

> 类型: `() => Promise<void>`

在某些情况下，我们可能需要手动触发重新水合，这时候只需要调用 `rehydrate` 方法即
可。

```ts
await useBoundStore.persist.rehydrate();
```

### `hasHydrated`

> 类型: `() => boolean`

这是一个非反应性的 getter，用于检查 存储是否已经水合 （注意，当调用
[`rehydrate`](#rehydrate) 时，它会更新）。

### `onHydrate`

> 类型: `(listener: (state) => void) => () => void`

> 返回: `取消订阅`

当水合过程开始时，将调用此监听器。

```ts
const unsub = useBoundStore.persist.onHydrate((state) => {
  console.log('hydration starts');
});

// 取消订阅
unsub();
```

### `onFinishHydration`

> 类型: `(listener: (state) => void) => () => void`

> 返回值: `取消订阅`

```ts
const unsub = useBoundStore.persist.onFinishHydration((state) => {
  console.log('hydration finished');
});

// 取消订阅
unsub();
```

### `createJSONStorage`

> 类型:
> `(getStorage: () => StateStorage, options?: JsonStorageOptions) => StateStorage`

> 返回值: `PersistStorage`

这个辅助函数是我们能够创建一个 [`storage`](#storage) 对象，这在我们想要使用自定
义存储引擎时非常有用。

`getStorage` 是一个返回 storage 引擎的函数，该 storage 引擎实现了
`getItem`，`setItem`和`removeItem`。

`options` 是一个可选的对象，能够用来自定义序列化和反序列化数据
。`options.reviver`是一个传递给 `JSON.parse` 以反序列化数据的函数
。`options.replacer` 是传递给 `JSON.stringify` 以序列化数据的函数。

```ts
import { createJSONStorage } from 'zustand/middleware';

const storage = createJSONStorage(() => sessionStorage, {
  reviver: (key, value) => {
    if (value && value.type === 'date') {
      return new Date(value);
    }
    return value;
  },
  replace: (key, value) => {
    if (value instanceof Date) {
      return { type: 'date', value: value.toISOString() };
    }

    return value;
  },
});
```

## 水合与异步存储

要解释异步存储的"成本"是什么， 我们需要理解什么是水合。

简而言之，水合是一个过程， 从存储中检索持久化状态并将其与当前状态合并。

Persist 中间件执行两种类型的水合： 同步和异步。 如果给定的存储是同步的（例如
，localStorage）， 水合将同步完成。 另一方面，如果给定的存储是异步的（例如
，AsyncStorage）， 水合将异步完成（令人震惊，我知道！）。

但是有什么问题呢？ 对于同步水合， Zustand 存储在创建时已经被水合。 相反，对于异
步水合， Zustand 存储将在稍后的微任务中被水合。

这有什么关系呢？ 异步水合可能会导致一些意外的行为。 例如，如果我们在 React 应用
程序中使用 Zustand， 存储在初始渲染时不会被水合。 当我们的应用程序在页面加载时依
赖于持久化值的情况下， 我们可能希望等到存储已经被水合后再显示任何内容。 例如，我
们的应用程序可能认为用户因为这是默认的，所以没有登录， 但实际上存储还没有被水合
。

## 常见问题解答

### 如何判断我的 store 是否已经水合

下面有一些方法可以实现。

我们可以使用 [`onRehydrateStorage`](#onRehydrateStorage)事件监听函数更新 store
中的字段。

```ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
  bears: number;
  addABear: () => void;
}

interface HydratedState {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useBearStore = create<State & HydratedState>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
      _hasHydrated: false,
      setHasHydrated: (state: boolean) => {
        set({ _hasHydrated: state });
      },
    }),
    {
      name: 'food-storage',
      storage: createJSONStorage(() => sessionStorage),
      // 如果发生重新水合，则更新 _hasHydrated
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    }
  )
);

export function StoreComsumer() {
    const hasHydrated = useBearStore(state => state._hasHydrated);

    if (hasHydrated) {
        return <p>Loading...</p>
    }

    return (
        // ...
    );
}
```

我们也可以使用 `useHydration` hook：

```ts
import { useEffect, useState } from 'react';
import { useBearStore } from './use-bear-store';

export function useHydration() {
  const [hydrated, setHydrated] = useState<boolean>();

  useEffect(() => {
    const unsubHydrate = useBearStore.persist.onHydrate(() => {
      setHydrated(false);
    });

    const unsubFinishHydration = useBearStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    setHydrated(useBearStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
}
```

### 如何使用自定义存储引擎

如果预期的 API 与我们想要的不符，我们可以创建一个自己的存储：

```ts
import { del, get, set } from 'idb-keyval';
import { create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, 'has been retrieved');
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(`${name} with value, ${value} has saved`);
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(`${name} has been removed`);
    await del(name);
  },
};

interface State {
  bears: number;
  addABear: () => void;
}

export const useBoundStore = create<State>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => {
        set({ bears: get().bears + 1 });
      },
    }),
    {
      name: 'food-storage',
      storage: createJSONStorage(() => storage),
    }
  )
);
```

如果我们正在使用一个 `JSON.stringify()` 不支持的类型，我们需要编写自己的序列化/
反序列化代码。然而，如果这很繁琐，我们可以使用第三方库来序列化和反序列化不同类型
的数据。

例如，[`Superjson`](https://github.com/flightcontrolhq/superjson) 可以将数据及其
类型一起序列化，允许数据在反序列化时被解析回其原始类型

```ts
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';
import superjson from 'superjson';
import { create } from 'zustand';

const storage: StateStorage = {
  getItem: (name: string): string | null => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return superjson.parse(str);
  },
  setItem: (name: string, value: string): void => {
    localStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: (name: string): void => {
    localStorage.removeItem(name);
  },
};

interface BearState {
  bear: Map<string, string>;
  fish: Set<string>;
  time: Date;
  query: RegExp;
}
const initialState: BearState = {
  bear: new Map(),
  fish: new Set(),
  time: new Date(),
  query: new RegExp(''),
};

export const useBoundStore = create<BearState>()(
  persist((set, get) => ({ ...initialState }), {
    name: 'food-storage',
    storage: createJSONStorage(() => storage),
  })
);
```

### 如何在 storage 事件中重新水合

我们可以使用 Persist API 来创建我们自己的实现， 类似于下面的例子：

```ts
import { Mutate, StoreApi, create } from 'zustand';
import { persist } from 'zustand/middleware';

type SttorageWithPersist<S = Object> = Mutate<
  StoreApi<S>,
  [['zustand/persist', unknown]]
>;

export const withStorageDOMEvents = (store: SttorageWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate();
    }
  };

  window.addEventListener('storage', storageEventCallback);

  return () => {
    window.removeEventListener('storage', storageEventCallback);
  };
};

const useBoundStore = create()(
    persist(...)
);

withStorageDOMEvents(useBoundStore);
```

### 如何配合 TypeScript 使用

基本的 TypeScript 使用并不需要任何特殊的东西，除了写 `create<State>()(...)` 而不
是 `create(...)`。

```tsx
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface MyState {
  bears: number;
  addABear: () => void;
}

export const useBearStore = create<MyState>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ bears: state.bears }),
    }
  )
);
```

### 如何配合 `Map` 和 `Set` 一起使用

为了持久化诸如 `Map` 和 `Set` 这样的对象类型，它们需要被转换为 JSON 可序列化的类
型，如 `Array`，这可以通过定义自定义的 `storage` 引擎来完成。

假设我们的状态使用 `Map` 来处理一系列的 `transactions`，那么我们可以在 `storage`
属性中将 `Map` 转换为 `Array`，如下所示：

```ts
interface BearState {
  .
  .
  .
  transactions: Map<any>
}

  storage: {
    getItem: (name) => {
      const str = localStorage.getItem(name);
      if (!str) return null;
      const existingValue = JSON.parse(str);
      return {
        ...existingValue,
        state: {
          ...existingValue.state,
          transactions: new Map(existingValue.state.transactions),
        }
      }
    },
    setItem: (name, newValue: StorageValue<BearState>) => {
      // functions cannot be JSON encoded
      const str = JSON.stringify({
        ...newValue,
        state: {
          ...newValue.state,
          transactions: Array.from(newValue.state.transactions.entries()),
        },
      })
      localStorage.setItem(name, str)
    },
    removeItem: (name) => localStorage.removeItem(name),
  },
```
