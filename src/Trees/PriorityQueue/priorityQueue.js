class Node {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority = 0) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    let newValueIndex = this.values.length -1
    let parentIndex = this.getParentIndex(newValueIndex)
    while(priority > this.values[parentIndex].priority ) {
      this.swap(parentIndex, newValueIndex)
      newValueIndex = parentIndex
      parentIndex = this.getParentIndex(newValueIndex)
    }
    return this
  }

  dequeue() {
    const removed = this.values[0]
    let lastChild = this.values.pop()
    if(this.values.length !== 0) {
    let oldRootIndex = 0
    this.values[0] = lastChild
    let leftChildIndex = this.getLeftIndex(0)
    let rightChildIndex = this.getRightIndex(0)
    while(this.values[leftChildIndex]?.priority > lastChild.priority || this.values[rightChildIndex]?.priority > lastChild.priority) {
      if(this.values[leftChildIndex]?.priority > this.values[rightChildIndex]?.priority) {
        this.swap(oldRootIndex, leftChildIndex)
        oldRootIndex = leftChildIndex
      } else {
        this.swap(oldRootIndex, rightChildIndex)
        oldRootIndex = rightChildIndex
      }
      leftChildIndex = this.getLeftIndex(oldRootIndex)
      rightChildIndex = this.getRightIndex(oldRootIndex)
    }
    }
    return removed.val
  }
  getParentIndex(index){
    return index === 0 ? 0 : Math.floor((index - 1)/2)
  }
  getLeftIndex(index){
    const leftChildIndex = (index * 2)+1
    return leftChildIndex < this.values.length  ? leftChildIndex : index
  }
  getRightIndex(index){
    const rightChildIndex = (index * 2)+2
    return rightChildIndex < this.values.length ?  rightChildIndex : index
  } 
  swap(indexA, indexB) {
    const valA = this.values[indexA]
    const valB = this.values[indexB]
    this.values[indexA] = valB
    this.values[indexB] =valA
  }

  toString() {
    return JSON.stringify(this.values, null, 2)
  }
}

module.exports = PriorityQueue