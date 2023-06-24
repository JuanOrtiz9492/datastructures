const BinarySearchTree = require('./binarytreesearch');

describe('test BinarySearchTree', ()=> {
  it('add values to the BST', ()=> {
    const BST = new BinarySearchTree()
    BST.add(25).add(30).add(26).add(32).add(25).add(20).add(10)
    expect(BST.root.val).toBe(25)
    expect(BST.root.right.val).toBe(30)
    expect(BST.root.right.left.val).toBe(26)
    expect(BST.root.right.right.val).toBe(32)
    expect(BST.root.left.val).toBe(20)
    expect(BST.root.left.left.val).toBe(10)
  })
  it('find value on BST',()=> {
    const BST = new BinarySearchTree()
    expect(BST.find(10)).toBeFalsy()
    BST.add(25).add(30).add(26).add(32).add(20).add(10)
    expect(BST.find(100)).toBeFalsy()
    expect(BST.find(25)).toBeTruthy()
    expect(BST.find(30)).toBeTruthy()
    expect(BST.find(26)).toBeTruthy()
    expect(BST.find(32)).toBeTruthy()
    expect(BST.find(20)).toBeTruthy()
    expect(BST.find(10)).toBeTruthy()
  })
})