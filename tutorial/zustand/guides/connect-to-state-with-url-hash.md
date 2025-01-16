---
title: 将URL连接到状态
description: 将URL连接到状态
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

### 将状态与 URL 哈希连接

如果你想将存储的状态与 URL 哈希连接，你可以创建自己的哈希存储。

```ts
import { create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';

const hashStorage: StateStorage = {
  getItem: (key: string) => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? '';
    return JSON.parse(storedValue);
  },
  setItem: (key: string, newValue: string) => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key: string) => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

interface State {
  fishes: number;
}

interface Action {
  addFish: () => void;
}

export const useBoundStore = create<State & Action>()(
  persist(
    (set, get) => ({
      fishes: 0,
      addFish: () => set({ fishes: get().fishes + 1 }),
    }),
    { name: 'food-storage', storage: createJSONStorage(() => hashStorage) }
  )
);
```

### 持久化并连接状态与 URL 参数（示例：URL 查询参数）

有时候，你可能希望条件性地将状态连接到 URL。 此示例描述了如何使用 URL 查询参数，
同时将其与另一种持久化实现（如 `localstorage`）保持同步。

如果你希望 URL 参数始终填充，可以删除对 `getUrlSearch()`的条件检查。

下面的实现将在相关状态更改时更新 URL，无需刷新。

```ts
import { create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';

const getUrlSearch = () => {
  return window.location.search.slice(1);
};

const persistentStorage: StateStorage = {
  getItem: (name: string): string => {
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch());
      const sortedValue = searchParams.get(name);
      return JSON.parse(sortedValue as string);
    } else {
      return JSON.parse(localStorage.getItem(name) as string);
    }
  },
  setItem: (name: string, value: string): void => {
    if (getUrlSearch()) {
      const searchParams = new URLSearchParams(getUrlSearch());
      searchParams.set(name, JSON.stringify(value));
      window.history.replaceState({}, '', '?' + searchParams.toString());
    }

    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string): void => {
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.delete(name);
    window.location.search = searchParams.toString();
  },
};

type LocalAndUrlStore = {
  typesOfFish: string[];
  addTypeOfFish: (fishType: string) => void;
  numberOfBears: number;
  setNumberOfBears: (newNumber: number) => void;
};

const storageOptions = {
  name: 'fishAndBearsStore',
  storage: createJSONStorage<LocalAndUrlStore>(() => persistentStorage),
};

export const useLocalAndUrlStore = create<LocalAndUrlStore>()(
  persist(
    (set) => ({
      typesOfFish: [],
      addTypeOfFish: (fishType: string) =>
        set((state) => ({ typesOfFish: [...state.typesOfFish, fishType] })),
      numberOfBears: 0,
      setNumberOfBears: (newNumber: number) =>
        set((state) => ({
          ...state,
          numberOfBears: newNumber,
        })),
    }),
    storageOptions
  )
);
```

在从组件生成 URL 时，我们可以调用 buildShareableUrl：

```ts
const buildURLSuffix = (params, version = 0) => {
  const searchParams = new URLSearchParams();

  const zustandStoreParams = {
    state: {
      typesOfFish: params.typesOfFish,
      numberOfBears: params.numberOfBears,
    },
    version: version, // version is here because that is included with how Zustand sets the state
  };

  // The URL param key should match the name of the store, as specified as in storageOptions above
  searchParams.set('fishAndBearsStore', JSON.stringify(zustandStoreParams));
  return searchParams.toString();
};

export const buildShareableUrl = (params, version) => {
  return `${window.location.origin}?${buildURLSuffix(params, version)}`;
};
```

生成的 URL 看起来像这样（为了易读这里没有任何编码）：

```bash
https://localhost/search?fishAndBearsStore={"state":{"typesOfFish":["tilapia","salmon"],"numberOfBears":15},"version":0}}
```
