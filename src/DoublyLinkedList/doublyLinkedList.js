class Node {
  constructor(val) {
    this.val = val;
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
  push(val){
    const newNode = new Node(val);
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
  unshift(val){
    if(!this.head) return this.push(val)
    const newNode = new Node(val)
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
  set(position, val){
    const currentNode = this.get(position)
    if(currentNode){
      currentNode.val = val
      return true
    } else return false
  }
  insert(position, val){
    if(position === 0) return this.unshift(val)
    if(position === this.length) return this.push(val)
    const currentNode = this.get(position)
    if(currentNode){
      const prevNode = currentNode.prev
      const newNode = new Node(val)
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
  reverse(){
    // A B C D E || 5
    if(this.length === 0) return
    //const tmpHead = this.head;
    this.head = this.tail;
    let currentNode = this.head // E
    for(let i= 0; i< this.length; i++){ // 0 1 2 3 4
        if(i === this.length -1) {
            this.tail.prev = currentNode.next; // B <- A
            this.tail = currentNode // A
            this.tail.next = null // A -> null
        } else {
        const nextNode = currentNode.prev; // A
        const prevRef = currentNode.next // C
        currentNode.next = nextNode; // E -> D -> C -> B -> A
        currentNode.prev = prevRef; //  null <- E <- D <- C <- B
        currentNode = nextNode;    // A
        }
    }
    return this
}
}

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.set(0,10) // true
doublyLinkedList.length // 4
doublyLinkedList.head.val // 10
 
doublyLinkedList.set(10,10) // false
 
doublyLinkedList.set(2,100) // true
doublyLinkedList.head.next.next.val; // 100

module.exports = { DoublyLinkedList }