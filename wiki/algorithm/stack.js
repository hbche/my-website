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
