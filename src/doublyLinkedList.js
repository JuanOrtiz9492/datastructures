class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length ++
    return this
  }
  pop(){
    if(this.length > 1) {
      const lastNode = this.tail
      const prevLastNode = lastNode.prev
      prevLastNode.next = null
      this.tail = prevLastNode
      this.length --
      lastNode.prev = null
      return lastNode
    } else if ( this.length === 1) {
      const lastNode = this.tail
      this.head = null
      this.tail = null
      this.length --
      lastNode.prev = null
      return lastNode
    } else {
      return undefined
    }
  }
  shif() {
    if(!this.head) return undefined
    if(this.length === 1) {
      const firstNode = this.head;
      this.head = null;
      this.tail = null;
      this.length --
      return firstNode
    } else {
      const firstNode = this.head;
      this.head = firstNode.next;
      this.head.prev = null;
      firstNode.next = null;
      this.length --
      return firstNode
    }
  }
  unshift(value){
    if(!this.head) return this.push(value)
    const newNode = new Node(value)
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
    this.length ++;
    return this
  }
  get(position){
    if(this.length === 0 || position < 0 || position >= this.length) return undefined
    const middle = Math.floor(this.length / 2)
    if(position > middle) {
      let currentPos = this.length -1;
      let currentNode = this.tail
      while(currentPos > 0){
        if(currentPos === position) {
          return currentNode
        }
        currentPos--
        currentNode = currentNode.prev
      }
    } else {
      let currentPos = 0;
      let currentNode = this.head;
      while(currentPos < this.length){
        if(currentPos === position) {
          return currentNode
        }
        currentPos++
        currentNode = currentNode.next
      }
    }
  }
  set(position, value){
    const currentNode = this.get(position)
    if(currentNode){
      currentNode.value = value
    } else return undefined
  }
  insert(position, value){
    if(position === 0) return this.unshift(value)
    if(position === this.length) return this.push(value)
    const currentNode = this.get(position)
    if(currentNode){
      const prevNode = currentNode.prev
      const newNode = new Node(value)
      newNode.prev = prevNode
      prevNode.next = newNode
      newNode.next = currentNode
      currentNode.prev = newNode
      this.length++;
      return this
    } else {
      return undefined
    }
  }
  remove(position){
    if (position === 0) return this.shif()
    if (position === this.length - 1) return this.pop()
    const currentNode = this.get(position)
    if (currentNode){
      const prevNode = currentNode.prev
      const nextNode = currentNode.next
      prevNode.next = nextNode
      nextNode.prev = prevNode
      currentNode.next = null
      currentNode.prev = null
      this.length--;
      return currentNode
    }
    return undefined
  }
}

const DLL = new DoublyLinkedList();
DLL.push('Text 1')
DLL.push('Text 2')
DLL.push('Text 3')
DLL.push('Text 4')
DLL.push('Text 5')
DLL.get(1)
DLL.get(2)
DLL.get(3)

module.exports = { DoublyLinkedList }