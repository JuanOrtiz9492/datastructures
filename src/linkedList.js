class Node {
  constructor(value){
    this.val = value
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const nextNode = new Node(val)
    if(this.head === null){
      this.head = nextNode
      this.tail = nextNode
    } else {
      this.tail.next = nextNode
      this.tail = nextNode
    }
    this.length++;
    return this;
  }
  unshift(val){
    const newNode = new Node(val)
    if(this.head === null){
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(this.length <= 1){
      const current = this.head
      this.head = null
      this.tail = null
      this.length = 0;
      return current === null ? undefined : current;
    } else {
      let current = this.head
      let prevNode;
    while(current){
      if(current.next !== null) {
        prevNode = current;
      }
      current = current.next
    }
    const tail = this.tail
    this.tail = prevNode
    this.tail.next = null
    this.length--
    return tail
    }
  }
  shift() {
    const head = this.head;
    let newHead = head?.next;
    if(this.length <= 1){
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = newHead;
      this.length --;
    }
    
    return head === null ? undefined: head;
  }
  get(position) {
    if(position >= this.length || position < 0) return undefined
    let currentPos = 0;
    let selectedNode = this.head;
    while(currentPos < position) {
      selectedNode = selectedNode.next
      currentPos++
    }
    return selectedNode
  }
  set(position, val){
  const node = this.get(position)
  if(node !== undefined){
      node.val = val
      return true
    }
  return false
  }
  insert(position, val){
    if (position < 0 || position > this.length) return false
    const newNode = new Node(val)
    if(position === 0){
      this.unshift(val)
      return true
    }
    if(position === this.length) {
      this.push(val)
      return true
    }
    const prevNode = this.get(position -1)
    const currentNode = prevNode.next
    newNode.next = currentNode;
    prevNode.next = newNode;
    this.length ++;
    return true;
  }
  remove(position){
    if(position < 0 || position > this.length) return undefined
    if(position === 0) return this.shift()
    if(position === this.length - 1) return this.pop()
    const prevNode = this.get(position - 1)
    const removed = prevNode.next
    prevNode.next = removed.next
    this.length --;
    return removed
  }
  reverse(){
    const head = this.head
    const tail = this.tail
    this.head = tail
    this.tail = head
    const helper = (node, nodeToBeAttached)=> {
      const nextNode = node.next
      node.next = nodeToBeAttached
      if(nextNode !== null){
        return helper(nextNode, node)
      }
      return
    }
    if(this.length > 1 ){
      helper(head.next, this.tail)
      this.tail.next = null
    }
    
    // H -> N1 -> N2 -> N3 -> T
    // T -> N3 -> N2 -> N1 -> H
  }
}

/* const list = new SinglyLinkedList()
list.push("text1")
list.push("text2")
list.push("text3")
list.reverse() */


/*list.push("Hello")
list.push("How")
list.push("are")
list.push("you?")
console.log(list.set(0,'start'))
console.log(list.set(5,'end'))
console.log(list.set(3,'middle')) */

module.exports = SinglyLinkedList