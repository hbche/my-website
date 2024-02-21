function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    /** 存储链表中的元素数量 */
    this.count = 0;
    /** 头部指针 */
    this.head = undefined;
    this.equalsFn = defaultEquals;
  }

  push(element) {
    const node = new Node(element);
    let current = this.head;

    if (this.header == null) {
      this.header = node;
    } else {
      current = this.header;
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.header;
        node.next = current.next;
        this.header = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.count++;
      return true;
    }
    return false;
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.header;

      for (let i = 0; i < index; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.header;
    for (i = 0; i < this.count; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.header;
      if (index === 0) {
        this.header = current.next;
      } else {
        let previous = this.getElementAt(index - 1);
        // for (let i = 0; i < index; i++) {
        //   previous = current;
        //   current = current.next;
        // }
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }

    return undefined;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHeader() {
    return this.header;
  }

  toString() {
    if (this.header == null) {
      return '';
    }

    let objString = `${this.header.element}`;
    let current = this.header.next;
    while (current != null) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

class DoubleNode extends Node {
  constructor(element) {
    super(element);
    this.pre = undefined;
  }
}

class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
    /** 尾部指针 */
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new DoubleNode(element);
      let current = this.header;

      if (index === 0) {
        if (current == null) {
          this.header = node;
          this.tail = node;
        } else {
          node.next = this.header;
          current.prev = node;
          this.header = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = node;
        node.next = current;
        node.prev = previous;
        current.prev = node;
      }

      this.count++;
      return true;
    } else {
      return false;
    }
  }
}
