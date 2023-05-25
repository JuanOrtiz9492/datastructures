const SinglyLinkedList = require('./linkedList')

test('list return undefined when no values', ()=> {
  const list = new SinglyLinkedList()
  expect(list.pop()).toBe(undefined)
})

test('add a item and remove it, list must be empty', ()=> {
  const list = new SinglyLinkedList();
  list.push("text")
  expect(list.pop()).toEqual({val:"text", next: null})
  expect(list.pop()).toEqual(undefined)
})

test('add two items, remove last one, tail and head must be equal', ()=> {
  const list = new SinglyLinkedList();
  list.push("text1");
  list.push("text2");
  expect(list.pop()).toEqual({val:"text2", next: null})
  expect(list.head).toEqual(list.tail);
  
})

test('remove the first element of the list, on a empty list must return undefined', ()=> {
  const list = new SinglyLinkedList();
  expect(list.shift()).toBe(undefined);
})

test('remove the first element of the list of only one element must have the initial values', ()=> {
  const list = new SinglyLinkedList();
  list.push("text1");
  list.shift();
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
})

test('remove the first element of the list',()=> {
  const list = new SinglyLinkedList();
  list.push("text1");
  list.push("text2");
  expect(list.shift().val).toBe("text1")
  expect(list.head).toEqual({val:"text2", next: null})
})

test('remove the first element of the list, third item must be next of new head',()=> {
  const list = new SinglyLinkedList();
  list.push("text1");
  list.push("text2");
  list.push("text3");
  list.shift();
  expect(list.head).toEqual({val:"text2", next: list.tail})
})

test('add a number at the begining in an empty list', ()=> {
  const list = new SinglyLinkedList();
  list.unshift("text1");
  expect(list.length).toBe(1);
  expect(list.head).toEqual({val:"text1", next: null});
})

test('add two number at the begining in an empty list', ()=> {
  const list = new SinglyLinkedList();
  list.unshift("text1");
  list.unshift("text2");
  expect(list.length).toBe(2);
  expect(list.head).toEqual({val:"text2", next: list.tail});
  expect(list.tail).toEqual({val:"text1", next: null});
})

test('get a element in a list', ()=> {
  const list = new SinglyLinkedList();
  list.push("text1");
  list.push("text2");
  list.push("text3");
  expect(list.get(1)).toEqual({val:"text2", next: list.head.next.next})
})

test('get a element outside list boundaries should return null', ()=> {
  const list = new SinglyLinkedList();
  list.push("text1");
  list.push("text2");
  list.push("text3");
  expect(list.get(-1)).toBe(undefined);
  expect(list.get(3)).toBe(undefined);
})

test('set the value in a valid position', ()=> {
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.push("text3")
  list.set(1, "text4")
  expect(list.get(1)).toEqual({val:"text4", next: list.tail})
  expect(list.length).toBe(3);
})

test('set the value in a invalid position', ()=>{
  const list = new SinglyLinkedList()
  list.set(-1, undefined)
  expect(list.length).toBe(0)
  expect(list.head).toBe(null)
  list.set(1, undefined)
  expect(list.length).toBe(0)
  expect(list.head).toBe(null)
})

test('set the value in the begining and end of the list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.set(0,"text2")
  expect(list.head).toEqual({val:"text2", next:null})
  list.push("text1")
  list.set(1, "text3")
  expect(list.tail).toEqual({val:"text3", next:null})

})

test('instert an element at the beginig of an empty list', ()=> {
  const list = new SinglyLinkedList()
  list.insert(0, "text1")
  expect(list.head).toEqual(list.tail);
})

test('instert an element at the end of a list', ()=> {
  const list = new SinglyLinkedList()
  list.push("text1")
  list.insert(1, "text2")
  expect(list.get(1)).toEqual(list.tail);
})

test('instert an element in the middle of a list', ()=> {
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.insert(1,"text3")
  expect(list.get(1)).toEqual({val:"text3", next: list.tail})
})

test('insert an element in a outside of list boundaries', ()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  expect(list.insert(-1,"text3")).toBe(false)
  expect(list.insert(3,"text4")).toBe(false)
  expect(list.length).toBe(2)
})
test('remove an element in the middle of the list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.push("text3")
  expect(list.remove(1).val).toBe("text2")
  expect(list.head.next).toBe(list.tail)
})
test('remove the first element in the list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.push("text3")
  expect(list.remove(0).val).toBe("text1")
})
test('remove the last element of the list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.push("text3")
  expect(list.remove(2).val).toBe("text3")
})

test('reverse a 3 item list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.push("text3")
  list.reverse()
  expect(list.head.val).toBe("text3")
  expect(list.head.next.val).toBe("text2")
  expect(list.tail.val).toBe("text1")
})

test('reverse a 2 item list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.push("text2")
  list.reverse()
  expect(list.head.val).toBe("text2")
  expect(list.tail.val).toBe("text1")
  expect(list.tail.next).toBe(null)
})

test('reverse a 1 item list',()=>{
  const list = new SinglyLinkedList()
  list.push("text1")
  list.reverse()
  expect(list.head.val).toBe("text1")
  expect(list.tail.val).toBe("text1")
  expect(list.tail.next).toBe(null)
})