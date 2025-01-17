---
title: Immer中间件
description: 使用Immer更新嵌套状态
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 18
last_update:
  date: 2025-01-15
  author: hbche
---

Immer 中间件使你能够以更便捷的方式使用不可变状态。此外，借助 Immer，你可以简化在
Zustand 中处理不可变数据结构的过程。

### 安装

为了能够在 Zustand 中使用 Immer 中间件，我们需要安装 Immer 依赖

```bash
npm install immer
```

### 使用

更新简单的状态

```tsx
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
  count: number;
};

type Actions = {
  increase: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCountStore = create<State & Actions>()(
  immer((set) => ({
    count: 0,
    increase: (qty) => {
      set((state) => {
        state.count += qty;
      });
    },
    decrement: (qty) => {
      set((state) => {
        state.count -= qty;
      });
    },
  }))
);
```

更新复杂的状态

```ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

type State = {
  todos: Record<string, Todo>;
};

type Actions = {
  toggleTodo: (todoId: string) => void;
};

export const useTodoStore = create<State & Actions>()(
  immer((set) => {
    return {
      todos: {
        '82471c5f-4207-4b1d-abcb-b98547e01a3e': {
          id: '82471c5f-4207-4b1d-abcb-b98547e01a3e',
          title: 'Learn Zustand',
          done: false,
        },
        '354ee16c-bfdd-44d3-afa9-e93679bda367': {
          id: '354ee16c-bfdd-44d3-afa9-e93679bda367',
          title: 'Learn Jotai',
          done: false,
        },
        '771c85c5-46ea-4a11-8fed-36cc2c7be344': {
          id: '771c85c5-46ea-4a11-8fed-36cc2c7be344',
          title: 'Learn Valtio',
          done: false,
        },
        '363a4bac-083f-47f7-a0a2-aeeee153a99c': {
          id: '363a4bac-083f-47f7-a0a2-aeeee153a99c',
          title: 'Learn Signals',
          done: false,
        },
      },
      toggleTodo: (todoId: string) => {
        set((state) => {
          state.todos[todoId].done = !state.todos[todoId].done;
        });
      },
    };
  })
);
```

### 注意事项

在本节中，你会找到一些在使用 Zustand 与 Immer 时需要注意的事项。

如果你正在使用 Immer，请确保你确实遵循了
[Immer 的规则](https://immerjs.github.io/immer/zh-CN/pitfalls/)。

例如，为了让[类对象](https://immerjs.github.io/immer/zh-CN/complex-objects/)能够
正常工作，你必须添加[immerable] = true。如果你没有这样做，Immer 仍然会改变对象，
但不是通过代理来改变，因此它也会更新当前状态。Zustand 会检查状态是否真正发生了变
化，所以如果当前状态和下一个状态相等（如果你没有正确操作），Zustand 就会跳过对订
阅的调用。
