---
title: 更新状态
description: 更新状态
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
tags: ['前端', '状态管理', 'zustand', '翻译']
sidebar_position: 3
last_update:
  date: 2025-01-15
  author: hbche
---

### 扁平化更新

使用 Zustand 更新状态非常简单！调用提供的 `set` 函数并传入新的状态，它将与存储中
的现有状态浅层合并。注意 有关嵌套状态，请参阅下一节。

```tsx
import { create } from 'zustand';

type State = {
  firstName: string;
  lastName: string;
};

type Action = {
  updateFirstName: (firstName: State['firstName']) => void;
  updateLastName: (lastName: State['lastName']) => void;
};

const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set({ firstName }),
  updateLastName: (lastName) => set({ lastName }),
}));

export default function App() {
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  return (
    <div>
      <label>
        First name
        <input
          // 更新 "firstName" 状态
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </div>
  );
}
```

### 深度嵌套对象

如果我们有一个像这样的深度状态对象：

```ts
type State = {
  deep: {
    nested: {
      obj: {
        count: number;
      };
    };
  };
};
```

更新嵌套状态需要付出一些努力，以确保过程是不可变的。

#### 正常方法

类似于 React 或 Redux，正常的方法是复制状态对象的每一级。这是通过扩展运算符 ...
和手动合并新的状态值来完成的。像这样：

```ts
normalInc: () => {
  set((state) => ({
    deep: {
      ...state.deep,
      nested: {
        ...state.deep.nested,
        obj: {
          ...state.deep.nested.obj,
          count: state.deep.nested.obj.count + 1,
        },
      },
    },
  }));
};
```

这太繁琐了！让我们探索一些可以让我们的生活更轻松的替代方案。

#### 使用 Immer

许多人使用 [Immer](https://github.com/immerjs/immer) 来更新嵌套值。可以在任何需
要更新嵌套状态的地方使用 Immer，如 React、Redux，当然还有 Zustand ！

你可以使用 Immer 来缩短你的深度嵌套对象的状态更新。让我们看一个例子：

```ts
immerInc: () =>
    set(produce((state: State) => { ++state.deep.nested.obj.count })),
```

这是多么大的简化啊！请注意这里列出
的<a href="../zustand/zustand-immer-middleware" target="_blank">注意事项</a>。
