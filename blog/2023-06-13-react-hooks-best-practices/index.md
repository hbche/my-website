---
title: React Hooks 最佳实践：释放效率与优雅
authors:
  name: Hanbin Che
  title: Front End Engineer
  url: https://github.com/hbche
  image_url: https://github.com/hbche.png
description: React Hooks 最佳实践
tags: ['react', 'hook', '翻译']
date: 2023-06-13
---

[原文](https://medium.com/womenintechnology/react-hooks-best-practices-unlocking-efficiency-and-elegance-da23f7e1418a)

React Hooks 彻底改变了我们在 React 函数组件中处理状态管理和副作用的方式。它们提
供了一种干净简洁的方式来组织和重用逻辑，从而产生更多的可维护的和高效的代码。在本
文中，我们将深入研究一些实际的例子，并探索最佳实践，帮助您利用 React Hooks 的全
部潜力，少一些理论，多一些可操作的见解。。

## 在顶层使用 Hooks

为了确保一致的行为并防止意外的问题，请始终在功能组件的顶层调用 Hooks。避免将它们
放在循环、条件或嵌套函数中。通过遵循此实践，您可以保证在每次渲染时以相同的顺序执
行 Hooks，从而提供可预测的结果。

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects here
  }, [count]);

  if (count === 10) {
    // Avoid calling Hooks here
  }

  return (
    // JSX code here
  );
}
```

## 使用依赖数组优化 useEffect

useEffect Hook 是管理副作用的强大工具，但它需要仔细处理依赖项以避免不必要的重新
呈现。提供一个依赖数组作为 useEffect 的第二个参数，指定副作用所依赖的变量。这可
确保仅当指定的依赖项更改时才运行副作用函数。

```jsx
function UserLoader({ userId }) {
  useEffect(() => {
    // Fetch user data based on userId
    fetchUser(userId);
  }, [userId]);

  // ...
}
```

## 缓存昂贵的计算

要优化性能，请使用 useCallback 和 useMemo 钩子。useCallback 会缓存一个函数，避免
它在每次渲染时被重新创建。useCallback 在将函数作为 prop 传递给子组件时的场景下特
别有用。useMemo 会缓存昂贵计算的结果，避免不必要的重复计算。

```jsx
function List({ items, onItemClick }) {
  const handleClick = useCallback(
    (item) => {
      onItemClick(item);
    },
    [onItemClick]
  );

  const processedItems = useMemo(() => {
    // Expensive computation
    return processItems(items);
  }, [items]);

  // ...
}
```

## 将逻辑封装到自定义 hooks 中

自定义 Hook 提供了一种封装和重用多个组件之间的逻辑的方法。通过将共享功能提取到自
定义 Hook 中，可以提高代码的可重用性和可维护性。自定义 Hook 应该以“use”前缀开头
，以表明它们的钩子性质。

```jsx
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
}

function MyComponent() {
  const { width, height } = useWindowDimensions();

  // ...
}
```

## 使用 useEffect 的清理函数

利用 useEffect 钩子的清理函数来处理资源清理和取消订阅或事件侦听器。如果清理失败
，可能会导致内存泄漏和意外行为。

```jsx
import React from 'react';

const Timer = () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <p>Time: {time} seconds</p>;
};
```

## 使用 useEffect 分离副作用

避免将多个不相关的副作用捆绑在一个 useEffect 中。相反，创建单独的 useEffect 钩子
来清楚地表达意图，并保持干净和可预测的代码结构。

```jsx
import React from 'react';

const Post = ({ postId }) => {
  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    fetchPost(postId).then((data) => {
      setPost(data);
    });
  }, [postId]);

  React.useEffect(() => {
    fetchComments(postId).then((data) => {
      setComments(data);
    });
  }, [postId]);

  return (
    <div>
      <h1>{post ? post.title : 'Loading...'}</h1>
      {comments.length > 0 ? (
        comments.map((comment) => <p key={comment.id}>{comment.text}</p>)
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};
```

## 让钩子保持专注和简单

为了保持代码的可读性和模块化，必须让 Hooks 专注于一个关注点。每个钩子都应该管理
一个特定的状态或处理一个特定的副作用。如果您的组件需要多个相关状态或副作用，请考
虑将它们拆分为单独的 Hook。

```jsx
function usePagination(initialPage) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const previousPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return { currentPage, nextPage, previousPage };
}

function MyComponent() {
  const { currentPage, nextPage, previousPage } = usePagination(1);

  // ...
}
```

## 总结

React Hooks 为 React 开发带来了范式转变，使代码更干净，更高效。通过遵循这些最佳
实践，例如在顶层使用 Hooks，使用依赖数组优化 useEffect，利用 useCallback 和
useMemo 提高性能，将逻辑封装在自定义 Hooks 中，以及保持 Hooks 的专注和简单，您可
以充分利用 Hooks 提供的功能和优雅。拥抱这些实践，并将您的 React 开发提升到新的高
度！
