const Stack = require('./stack');

describe('test Stack', ()=> {
  it('push and pop elements',()=>{
    const stack = new Stack();
    stack.push(10)
    stack.push(5)
    stack.push(3)
    stack.push('A')
    expect(stack.size).toBe(4)
    expect(stack.pop()).toBe('A')
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(5)
    expect(stack.pop()).toBe(10)
    expect(stack.size).toBe(0)
    expect(stack.first).toBeNull()
    expect(stack.last).toBeNull()
  })
})