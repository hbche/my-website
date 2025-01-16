---
title: Map 和 Set 的使用
description: Map 和 Set 的使用
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 11
last_update:
  date: 2025-01-16
  author: hbche
---

我们需要将 `Map` 和 `Set` 包装在一个对象内。当我们希望它的更新被响应（例如，在
React 中）， 我们可以通过调用 `setState` 来实现：

```ts
import { create } from 'zustand';

export const useBoundStore = create(() => ({
  foo: new Map(),
  bar: new Set(),
}));

function doSomething() {
  useBoundStore.setState((state) => ({
    foo: new Map(state.foo).set('newKey', 'newValue'),
    bar: new Set(state.bar).add('newKey'),
  }));
}
```
