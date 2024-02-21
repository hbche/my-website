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
 * 回文字符串检查
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
