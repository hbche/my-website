---
title: 使用 useShallow 防止重新渲染
description: 使用 useShallow 防止重新渲染
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 16
last_update:
  date: 2025-01-16
  author: hbche
---

当我们需要从存储中订阅一个计算状态时，推荐的方式是使用选择器。

计算选择器将在输出根据 `Object.is` 改变时导致重新渲染。

在这种情况下，我们希望使用 `useShallow` 来避免如果计算值总是浅相等于前一个值时的
重新渲染。

## 示例

我们有一个 store，它将每只熊与一顿饭关联起来，我们想要渲染他们的名字。

```tsx
import { create } from 'zustand';

const useMeals = create(() => ({
  papaBear: 'large porridge-pot',
  mamaBear: 'middle-size porridge pot',
  littleBear: 'A little, small, wee pot',
}));

export const BearNames = () => {
  const names = useMeals((state) => Object.keys(state));

  return <div>{names.join(', ')}</div>;
};
```

现在爸爸熊想要一块披萨：

```ts
useMeals.setState({
  papaBear: 'a large pizza',
});
```

这个改变导致 `BearNames` 重新渲染，尽管 `names` 的实际输出根据浅相等并没有改变。

我们可以使用 `useShallow` 来修复这个问题！

```tsx
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

const useMeals = create(() => ({
  papaBear: 'large porridge-pot',
  mamaBear: 'middle-size porridge pot',
  littleBear: 'A little, small, wee pot',
}));

export const BearNames = () => {
  const names = useMeals(useShallow((state) => Object.keys(state)));

  return <div>{names.join(', ')}</div>;
};
```

现在他们都可以点其他的餐，而不会导致我们的 `BearNames` 组件不必要的重新渲染。
