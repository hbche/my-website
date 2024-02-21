/** 双端队列 */
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
    return this.items[this.count - 1];
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

const deque = new Dequeue();
console.log(deque.isEmpty()); // 输出true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // 输出3
console.log(deque.isEmpty()); // 输出false
deque.removeFront(); // 移除John
console.log(deque.toString()); // Jack, Camila
deque.removeBack(); // Camila决定离开
console.log(deque.toString()); // Jack
deque.addFront('John'); // John回来询问一些信息
console.log(deque.toString()); // John, Jack
