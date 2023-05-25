const { DoublyLinkedList } = require('./doublyLinkedList');

describe('Test all methods on DoublyLinkedList', ()=> {

  it('add up to 3 elments in the doubly linked list', ()=> {
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    expect(dbly.head.value).toBe(dbly.tail.value);
    dbly.push('Text 2')
    dbly.push('Text 3')
    expect(dbly.head.next.value).toBe('Text 2')
    expect(dbly.tail.prev.value).toBe('Text 2')
  })

  it('pop value from an empty doublyLinkedList must return undefined', ()=>  {
    const dbly = new DoublyLinkedList();
    expect(dbly.pop()).toBeUndefined();
  })

  it('pop value from an one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    expect(dbly.pop().value).toBe('Text 1');
    expect(dbly.head).toBeNull();
    expect(dbly.tail).toBeNull();
  })

  it('pop value from an more than one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    dbly.push('Text 2')
    expect(dbly.pop().value).toBe('Text 2');
    expect(dbly.head.value).toBe('Text 1');
    expect(dbly.tail.value).toBe('Text 1');
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
    expect(dbly.shif().value).toBe('Text 1');
    expect(dbly.head).toBeNull();
    expect(dbly.tail).toBeNull();
  })

  it('shift value from an more than one item doublyLinkedList', ()=>{
    const dbly = new DoublyLinkedList();
    dbly.push('Text 1')
    dbly.push('Text 2')
    expect(dbly.shif().value).toBe('Text 1');
    expect(dbly.head.value).toBe('Text 2');
    expect(dbly.tail.value).toBe('Text 2');
    expect(dbly.head.next).toBeNull();
    expect(dbly.tail.next).toBeNull();
    expect(dbly.head.prev).toBeNull();
    expect(dbly.tail.prev).toBeNull();
  })

  it('unshift up to 2 elments in the doubly linked list', ()=> {
    const dbly = new DoublyLinkedList();
    dbly.unshift('Text 1')
    expect(dbly.head.value).toBe(dbly.tail.value);
    dbly.unshift('Text 2')
    expect(dbly.head.value).toBe('Text 2');
    expect(dbly.head.next.value).toBe('Text 1')
    expect(dbly.tail.value).toBe('Text 1')
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
    expect(dbly.get(1).value).toBe('Text 2')
    expect(dbly.get(2).value).toBe('Text 3')
    expect(dbly.get(3).value).toBe('Text 4')
  })

})