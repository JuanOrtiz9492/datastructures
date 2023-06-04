const { DoublyLinkedList } = require('./doublyLinkedList');

describe('Test all methods on DoublyLinkedList', ()=> {

  it('add up to 3 elments in the doubly linked list', ()=> {
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    expect(dbly.head.val).toBe(dbly.tail.val);
    dbly.push('Text 2')
    dbly.push('Text 3')
    expect(dbly.head.next.val).toBe('Text 2')
    expect(dbly.tail.prev.val).toBe('Text 2')
  })

  it('pop value from an empty doublyLinkedList must return undefined', ()=>  {
    const dbly = new DoublyLinkedList();
    expect(dbly.pop()).toBeUndefined();
  })

  it('pop value from an one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    expect(dbly.pop().val).toBe('Text 1');
    expect(dbly.head).toBeNull();
    expect(dbly.tail).toBeNull();
  })

  it('pop value from an more than one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    dbly.push('Text 2')
    expect(dbly.pop().val).toBe('Text 2');
    expect(dbly.head.val).toBe('Text 1');
    expect(dbly.tail.val).toBe('Text 1');
    expect(dbly.head.next).toBeNull();
    expect(dbly.tail.next).toBeNull();
    expect(dbly.head.prev).toBeNull();
    expect(dbly.tail.prev).toBeNull();
  })

  it('shift value from an empty doublyLinkedList must return undefined', ()=>  {
    const dbly = new DoublyLinkedList();
    expect(dbly.shif()).toBeUndefined();
  })

  it('shift value from an one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    expect(dbly.shif().val).toBe('Text 1');
    expect(dbly.head).toBeNull();
    expect(dbly.tail).toBeNull();
  })

  it('shift value from an more than one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    dbly.push('Text 2')
    expect(dbly.shif().val).toBe('Text 1');
    expect(dbly.head.val).toBe('Text 2');
    expect(dbly.tail.val).toBe('Text 2');
    expect(dbly.head.next).toBeNull();
    expect(dbly.tail.next).toBeNull();
    expect(dbly.head.prev).toBeNull();
    expect(dbly.tail.prev).toBeNull();
  })

  it('unshift up to 2 elments in the doubly linked list', ()=> {
    const dbly = new DoublyLinkedList();
    dbly.unshift('Text 1')
    expect(dbly.head.val).toBe(dbly.tail.val);
    dbly.unshift('Text 2')
    expect(dbly.head.val).toBe('Text 2');
    expect(dbly.head.next.val).toBe('Text 1')
    expect(dbly.tail.val).toBe('Text 1')
  })

  it('gets elements on an empty DLL', ()=> {
    const dbly = new DoublyLinkedList();
    expect(dbly.get(0)).toBeUndefined()
  })

  it('gets elements on an DLL out of boundaries', ()=> {
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    dbly.push('Text 2')
    expect(dbly.get(-1)).toBeUndefined()
    expect(dbly.get(2)).toBeUndefined()
  })

  it('gets elements on an DLL', ()=> {
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    dbly.push('Text 2')
    dbly.push('Text 3')
    dbly.push('Text 4')
    dbly.push('Text 5')
    expect(dbly.get(1).val).toBe('Text 2')
    expect(dbly.get(2).val).toBe('Text 3')
    expect(dbly.get(3).val).toBe('Text 4')
  })

  it('set the value in a valid position', ()=> {
    const dll = new DoublyLinkedList()
    dll.push("text1")
    dll.push("text2")
    dll.push("text3")
    dll.set(1, "text4")
    expect(dll.get(1).val).toEqual("text4")
    expect(dll.length).toBe(3);
  })
  
  it('set the value in a invalid position', ()=>{
    const dll = new DoublyLinkedList()
    dll.set(-1, undefined)
    expect(dll.length).toBe(0)
    expect(dll.head).toBe(null)
    dll.set(1, undefined)
    expect(dll.length).toBe(0)
    expect(dll.head).toBe(null)
  })
  
  it('set the value in the begining and end of the dll',()=>{
    const dll = new DoublyLinkedList()
    dll.push("text1")
    dll.set(0,"text2")
    expect(dll.head.val).toEqual("text2")
    dll.push("text1")
    dll.set(1, "text3")
    expect(dll.tail.val).toEqual("text3")
  
  })

  it('instert an element at the beginig of an empty ddl', ()=> {
    const ddl = new DoublyLinkedList()
    ddl.insert(0, "text1")
    expect(ddl.head).toEqual(ddl.tail);
  })
  
  it('instert an element at the end of a ddl', ()=> {
    const ddl = new DoublyLinkedList()
    ddl.push("text1")
    ddl.insert(1, "text2")
    expect(ddl.get(1)).toEqual(ddl.tail);
  })
  
  it('instert an element in the middle of a ddl', ()=> {
    const ddl = new DoublyLinkedList()
    ddl.push("text1")
    ddl.push("text2")
    ddl.insert(1,"text3")
    expect(ddl.get(1).val).toEqual("text3")
  })
  
  it('insert an element outside of ddl boundaries', ()=>{
    const ddl = new DoublyLinkedList()
    ddl.push("text1")
    ddl.push("text2")
    expect(ddl.insert(-1,"text3")).toBe(undefined)
    expect(ddl.insert(3,"text4")).toBe(undefined)
    expect(ddl.length).toBe(2)
  })

  it('remove an element in the middle of the ddl',()=>{
    const ddl = new DoublyLinkedList()
    ddl.push("text1")
    ddl.push("text2")
    ddl.push("text3")
    expect(ddl.remove(1).val).toBe("text2")
    expect(ddl.head.next).toBe(ddl.tail)
  })
  it('remove the first element in the ddl',()=>{
    const ddl = new DoublyLinkedList()
    ddl.push("text1")
    ddl.push("text2")
    ddl.push("text3")
    expect(ddl.remove(0).val).toBe("text1")
  })
  it('remove the last element of the ddl',()=>{
    const ddl = new DoublyLinkedList()
    ddl.push("text1")
    ddl.push("text2")
    ddl.push("text3")
    expect(ddl.remove(2).val).toBe("text3")
  })

  it('test udemy', ()=> {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(5).push(10).push(15).push(20);
expect(doublyLinkedList.set(0,10)).toBe(true)// true
expect(doublyLinkedList.length).toBe(4)// 4
console.log(doublyLinkedList.head)
expect(doublyLinkedList.head.val).toBe(10)// 10
expect(doublyLinkedList.set(10,10)).toBe(false)// false
expect(doublyLinkedList.set(2,100)).toBe(true) // true
expect(doublyLinkedList.head.next.next.val).toBe(100)
  })

})