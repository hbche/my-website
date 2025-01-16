---
title: 不带 store actions 的实践方式
description: 不带 store actions 的实践方式
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 7
last_update:
  date: 2025-01-16
  author: hbche
---

推荐的用法是将 actions 和状态放在 store 内部(让 actions 与状态放在一起)。

示例：

```ts
export const useBoundStore = create((set) => ({
  count: 0,
  text: 'hello',
  inc: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => ste((state) => ({ text })),
}));
```

这创建了一个包含数据和 actions 的自包含 store。

另一种方法是在模块级别定义 actions，将其放在 store 外部。

```ts
export const useBoundStore = create(() => ({
  count: 0,
  text: 'hello',
}));

export const inc = () =>
  useBoundStore.setState((state) => ({ count: state.count + 1 }));

export const setText = (text: string) => useBoundStore.setState({ text });
```

这样实现有几个有点：

- 不需要 hook 就可以调用 action
- 便于代码分割

虽然这种模式没有任何缺点,但有些人可能更喜欢将它们放在一起,因为这更符合封装的特性
。
