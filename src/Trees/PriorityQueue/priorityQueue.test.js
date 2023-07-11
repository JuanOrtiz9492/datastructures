const PriorityQueue = require('./priorityQueue')

describe('test PriorityQueue', ()=> {
  it('test a valid priority queue', ()=> {
    const queue = new PriorityQueue()
    queue.enqueue('A', 5)
    queue.enqueue('B', 4)
    queue.enqueue('C', 3)
    queue.enqueue('D', 2)
    queue.enqueue('E', 1)
    expect(queue.dequeue()).toBe('A')
    expect(queue.dequeue()).toBe('B')
    expect(queue.dequeue()).toBe('C')
    expect(queue.dequeue()).toBe('D')
    expect(queue.dequeue()).toBe('E')
  })
})