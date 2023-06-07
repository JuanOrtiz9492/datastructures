class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  enqueue(val) {
    const newNode = new Node(val)
    if(this.size === 0){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return this.size ++
  }
  dequeue() {
    if(this.size === 0) return null
    const currentNode = this.first;
    if(this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = currentNode.next;
    }
    this.size--
    return currentNode.val
  }
}

module.exports = Queue;