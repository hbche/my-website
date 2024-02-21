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
