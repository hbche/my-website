---
id: algorithm-main
title: 数据结构与算法
description: 数据结构与算法知识库
keywords: ['algorithm']
tags: ['algorithm']
sidebar_position: 1
last_update:
  date: 2024-02-20
  author: hbche
---

- [x] 数组
- [x] 栈
- [x] 队列
- [ ] 链表
- [ ] 集合
- [ ] 字典和散列表
- [ ] 递归
- [ ] 树
- [ ] 二叉堆和堆排序
- [ ] 图
- [ ] 排序和搜索算法
- [ ] 算法设计与技巧
- [ ] 算法复杂度

## 数组

## 栈

- 栈数据结构
- 向栈添加元素
- 从栈移除元素
- 使用 Stack 类
- 十进制转 n 进制

```js
/** 栈 */
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = [];
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

// 栈的应用
// 将十进制转换成二进制
function decimalToBinary(value) {
  const stack = new Stack();
  while (value !== 0) {
    stack.push(value % 2);
    value = Math.floor(value / 2);
  }
  let binaryString = '';
  while (stack.size() > 0) {
    binaryString = `${binaryString}${stack.pop()}`;
  }
  return binaryString;
}

console.log(decimalToBinary(111));

function baseConvert(value, base) {
  const digits = '0123456789ABCDEF';
  const stack = new Stack();
  while (value !== 0) {
    stack.push(value % base);
    value = Math.floor(value / base);
  }
  let result = '';
  while (!stack.isEmpty()) {
    result = `${result}${digits[stack.pop()]}`;
  }
  return result;
}
console.log(baseConvert(111, 2));
console.log(baseConvert(111, 8));
console.log(baseConvert(111, 16));
```

## 队列和双端队列

- 队列数据结构
- 双端队列数据结构
- 向队列和双端队列添加元素
- 用击鼓传花游戏模拟循环队列
- 用双端队列检查一个词组是否构成回文

### 队列数据结构

队列是遵从**先进先出**原则的一组有序的项。队列再尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

### 创建队列

```js
class Queue {
  constructor() {
    /** 队列大小 */
    this.count = 0;
    /** 队列顶部的索引 */
    this.lowestCount = 0;
    /** 队列数据 */
    this.items = [];
  }

  /** 向队列尾部添加一个或多个新的项 */
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 移除队列的第一项并返回被移除的项 */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  /** 返回队列中第一个元素 */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /** 队列是否为空 */
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  /** 清空队列 */
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let i = this.lowestCount;
    let objString = `${this.items[i++]}`;
    while (i !== this.count) {
      objString = `${objString}, ${this.items[i++]}`;
    }
    return objString;
  }

  size() {
    return this.count;
  }
}
```

### 双端队列

```js
class Dequeue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = item;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = item;
    }
  }

  addBack(item) {
    this.items[this.count++] = item;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount + this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let i = this.lowestCount;
    let objString = `${this.items[i++]}`;
    while (i !== this.count) {
      objString = `${objString}, ${this.items[i++]}`;
    }
    return objString;
  }
}
```

### 循环队列

利用队列实现击鼓传花

```js
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  enqueue(item) {
    this.items[this.count++] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}

/**
 * 使用双端队列实现击鼓传花
 * @param {*} elementList
 * @param {*} num
 * @returns
 */
function hotPotato(elementList, num) {
  const queue = new Queue();
  // 被淘汰的选手
  const eliminatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  // 直到选手只剩一位时，其就是最后的赢家
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 当🌼在移动时，不停的从队列顶部移除元素，将其添加到队列的尾部
      queue.enqueue(queue.dequeue());
    }
    // 本轮传🌼结束后，淘汰队列结尾的选手，即🌼所在选手，再从队列顶部开始新一轮的击鼓传花
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 11);
result.eliminatedList.forEach((name) => {
  console.log(`${name}在击鼓传花游戏中被淘汰。`);
});
console.log(`胜利者： ${result.winner}`);
```

### 回文检查器

**双端队列**是一种允许我们同时从前端和后端增加和移除元素的特殊队列。在计算机科学中，双端队列的一个常见应用是存储一些列的撤销操作。

```js
class Dequeue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = item;
    } else {
      for (let i = this.count; i > this.lowestCount; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.items[this.lowestCount] = item;
      this.lowestCount = 0;
      this.count++;
    }
  }

  addBack(item) {
    this.items[this.count++] = item;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;

    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = [];
  }
}

/**
 * 回文检查
 * @param {*} aString
 * @returns
 */
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  // 创建双端队列，存储字符串
  const dequeue = new Dequeue();
  // 将字符串转换成全小写并且去除空格
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  // 默认是回文
  let isEqual = true;
  // 用于记录第一个字符和最后一个字符
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    // 将字符存储在双端队列中
    dequeue.addBack(lowerString.charAt(i));
  }
  // 如果不是回文字符串则没有必要继续判断字符串剩余字符是否是回文字符串了
  while (dequeue.size() > 1 && isEqual) {
    // 从队列的顶部移除元素
    firstChar = dequeue.removeFront();
    // 从队列的尾部移除元素
    lastChar = dequeue.removeBack();
    // 比较当前队列首尾字符，如果不一致则不是回文字符串
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log(
  'Was it a car or a cat I saw',
  palindromeChecker('Was it a car or a cat I saw')
);
console.log('Step on no pets', palindromeChecker('Step on no pets'));
```

## 链表

## 集合

## 字典和散列表

## 递归

## 树

## 二叉堆和堆排序

## 图

## 排序和搜索算法

## 算法设计与技巧

## 算法复杂度
