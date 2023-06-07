const Queue = require('./queue');

describe('test Queue', ()=> {
  it('enqueue and dequeue elements',()=>{
    const queue = new Queue();
    queue.enqueue(10)
    queue.enqueue(5)
    queue.enqueue(3)
    queue.enqueue('A')
    expect(queue.size).toBe(4)
    expect(queue.dequeue()).toBe(10)
    expect(queue.dequeue()).toBe(5)
    expect(queue.dequeue()).toBe(3)
    expect(queue.dequeue()).toBe('A')
    expect(queue.size).toBe(0)
    expect(queue.first).toBeNull()
    expect(queue.last).toBeNull()
  })
})