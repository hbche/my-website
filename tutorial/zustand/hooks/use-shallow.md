---
title: useShallow ⚛️
description: 如何memorize状态选择器
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

`useShallow` 是一个优化重复渲染的 React Hook。

```js
const memoizedSelector = useShallow(selector);
```

- [类型](#类型)
  - [签名](#签名)
- [参考](#参考)
  - [`useShallow(selectorFn)`](#useshallowselectorfn)
    - [参数](#参数)
    - [返回值](#返回值)
- [用法](#用法)
  - [写一个缓存化的选择器](#写一个缓存化的选择器)
- [故障排除](#故障排除)

## 类型

### 签名

```ts
useShallow<T, U = T>(selectorFn: (state: T) => U): (state: T) => U
```

## 参考

### `useShallow(selectorFn)`

#### 参数

- `selectorFn`: 基于当前 state 返回数据的一个函数

#### 返回值

`useShallow` 返回一个被缓存的版本，该 selector 函数使用浅比较进行换存。

## 用法

### 写一个缓存化的选择器

首先，我们需要创建一个 store 来保存小熊家族的状态。在这个 store 中，我们定义了三
个属性：`papaBear`、`mamaBear` 和 `babyBear`，每一个分别代表小熊家庭的不同成员和
各种对应的燕麦盘尺寸。

```tsx
import { create } from 'zustand';

interface BearState {
  papaBear: string;
  mamaBear: string;
  babyBear: string;
  tinyBear?: string;
}

export const useBearMealsStore = create<BearState>(() => ({
  papaBear: 'large porridge-pot',
  mamaBear: 'middle-size porridge pot',
  babyBear: 'A little, small, wee pot',
}));
```

接下来，我们将创建一个 `BearNames` 的组件，检索我们状态的键（小熊家族的成员）并
展示他们。

```tsx
import { useBearMealsStore } from './use-bear-meals-store';

export function BearNames() {
  const names = useBearMealsStore((state) => Object.keys(state));

  return <div>{names.join(', ')}</div>;
}
```

接着，我们将创建一个 `UpdateBabyBearMeal` 的组件，定期地更新熊宝宝的膳食。

```tsx
import { useEffect } from 'react';
import { useBearMealsStore } from './use-bear-meals-store';

const meals = [
  'A tiny, little, wee bowl',
  'A small, petite, tiny pot',
  'A wee, itty-bitty, small bowl',
  'A little, petite, tiny dish',
  'A tiny, small, wee vessel',
  'A small, little, wee cauldron',
  'A little, tiny, small cup',
  'A wee, small, little jar',
  'A tiny, wee, small pan',
  'A small, wee, little crock',
];

export function UpdateBabyBearMeal() {
  useEffect(() => {
    const timer = setInterval(() => {
      useBearMealsStore.setState({
        tinyBear: meals[Math.floor(Math.random() * (meals.length - 1))],
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}
```

最后，我们将两个组件放入 `App` 组件下，能够在界面上看到他们。

```tsx
export default function App() {
  return (
    <>
      <UpdateTinyBearPorridge />
      <BearNames />
    </>
  );
}
```

一切看着很美好，但是这里有一个小问题：`BearNames` 组件即使在 `names` 没有变化的
情况下仍然会重复渲染。导致这个的原因是组件在状态的每一部分发生改变时都会重新渲染
，即使我们关心的指定部分没有发生改变。

修复这个问题，我们需要使用 `useShallow` 来确保我们组件只在状态的实际 key 发生变
化时才重新渲染。

```tsx
export function BearNames() {
  const names = useBearMealsStore(useShallow((state) => Object.keys(state)));

  return <div>{names.join(', ')}</div>;
}
```

使用 `useShallow` ，我们优化了组件重新渲染的过程，确保组件只在必要的时候重新渲染
，从而提升整体性能。

## 故障排除
