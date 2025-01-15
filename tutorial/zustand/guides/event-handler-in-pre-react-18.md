---
title: React 18 之前版本在 React 事件处理函数中调用 actions
description: React 18 之前版本在 React 事件处理函数中调用 actions
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 10
last_update:
  date: 2025-01-15
  author: hbche
---

因为 React 在事件处理器外部同步处理
`setState，如果在事件处理器外部更新状态，将强 制 React 同步更新组件。因此，存在遇到僵尸子进程效应的风险。 为了解决这个问题，需 要将操作包装在 `unstable_batchedUpdates`
中，如下所示：

```ts
import { unstable_batchedUpdates } from 'react-dom'; // 或 'react-native'

const useFishStore = create((set) => ({
  fishes: 0,
  increaseFishes: () => set((prev) => ({ fishes: prev.fishes + 1 })),
}));

const nonReactCallback = () => {
  unstable_batchedUpdates(() => {
    useFishStore.getState().increaseFishes();
  });
};
```

#### 什么是"僵尸子组件"效应

“僵尸子组件”效应是指在 React 组件中的一个常见问题。当一个父组件被销毁时，它的子
组件可能仍然存在于内存中，这些子组件被称为“僵尸子组件”。这种情况通常发生在异步操
作中，例如在父组件中发起了一个异步请求，而在请求完成之前，父组件被销毁了。但是，
由于异步请求的回调函数仍然存在于内存中，它们会继续执行，尝试更新已经被销毁的父组
件的状态或引用已经不存在的 DOM 元素。这种情况可能导致一些问题，例如内存泄漏、不
一致的 UI 状态或错误的数据更新。为了避免这种情况，我们可以在父组件销毁时，手动取
消异步操作或在回调函数中判断父组件是否仍然存在。在 React 18 之前的版本中，如果在
事件处理器外部调用 setState，React 会同步处理这些更新，这可能会导致“僵尸子组件”
效应。为了解决这个问题，可以使用 unstable_batchedUpdates 方法来批量更新状态，从
而减少不必要的渲染。例如：

```js
import { unstable_batchedUpdates } from 'react-dom';

const nonReactCallback = () => {
  unstable_batchedUpdates(() => {
    // 更新状态的代码
  });
};
```

这种方法可以确保在异步操作中，状态更新被批量处理，从而避免多次不必要的渲染。
