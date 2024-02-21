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
    return this.count - this.lowestCount;
  }
}

const queue = new Queue();
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
queue.enqueue('Camila');
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());
queue.clear();
console.log(queue.toString());
