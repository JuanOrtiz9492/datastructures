class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  push(val) {
    const newNode = new Node(val)
    if(this.size === 0){
      this.first = newNode
      this.last = newNode
    } else {
      const tmp = this.first
      this.first = newNode
      this.first.next = tmp
    }
    return this.size ++
  }
  pop() {
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

module.exports = Stack;