class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  add(value) {
    this.values.push(value)
    let newValueIndex = this.values.length -1
    let parent = this.getParent(newValueIndex)
    while(parent < value ) {
      const parentIndex = this.values.indexOf(parent)
      this.swap(parentIndex, newValueIndex)
      newValueIndex = parentIndex
      parent = this.getParent(newValueIndex)
    }
    return this
  }

  remove() {
    const removed = this.values[0]
    let lastChild = this.values.pop()
    if(this.length !== 0) {
    let oldRootIndex = 0
    this.values[0] = lastChild
    let leftChildIndex = this.getLeftIndex(0)
    let rightChildIndex = this.getRightIndex(0)
    while(this.values[leftChildIndex] > lastChild || this.values[rightChildIndex] > lastChild) {
      if(this.values[leftChildIndex] > this.values[rightChildIndex]) {
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
    return removed
  }
  getParent(index){
    if(index === 0) {
      return this.values[0]
    } else {
      const parentIndex = Math.floor((index -1) / 2)
      return this.values[parentIndex]
    }
  }
  getLeftIndex(index){
    return (index * 2)+1
  }
  getRightIndex(index){
    return (index * 2)+2
  } 
  swap(indexA, indexB) {
    const valA = this.values[indexA]
    const valB = this.values[indexB]
    this.values[indexA] = valB
    this.values[indexB] =valA
  }

  toString() {
    return this.values.toString()
  }
}

const MBH = new MaxBinaryHeap()

module.exports = MaxBinaryHeap
MBH.add(30).add(20).add(10).add(25).add(26).add(22).add(5)
MBH.remove()
console.log(MBH.toString())