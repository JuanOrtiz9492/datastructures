const BinarySearchTree = require('../../BinaryTree/binarytreesearch');
const { preOrder, postOrder, inOrder } = require('./depthFirstSearch');

describe('Test different methods to traverse a tree', ()=> {
  it('test preOrder method for a small tree' ,()=> {
    const BST = new BinarySearchTree();
    BST.add(10).add(6).add(15).add(3).add(8).add(20);
    /**
     *            10
     *      6           15
     *  3       8             20
     * 
     * [10 6 3 8  15 20]
     */
    expect(preOrder(BST)).toEqual([10, 6, 3, 8,  15, 20])
  })
  it('test preOrder method for a large tree' ,()=> {
    const BST = new BinarySearchTree()
    BST.add(30).add(20).add(40).add(25).add(15).add(35).add(45).add(23).add(28).add(12).add(18)
    
    /**
     * 
     *              30
     *       20             40
     *   15      25     35      45
     * 12   18 23   28 
     * 
     * [30 20 15 12 18 25 23 28 40 35 45]
     * 
     */
    expect(preOrder(BST)).toEqual([30, 20, 15, 12, 18, 25, 23, 28, 40, 35, 45])
  })
  it('test postOrder method for a small tree' ,()=> {
    const BST = new BinarySearchTree();
    BST.add(10).add(6).add(15).add(3).add(8).add(20);
    /**
     *            10
     *      6           15
     *  3       8             20
     * 
     * [3 8 6 20 15 10]
     */
    expect(postOrder(BST)).toEqual([3, 8, 6, 20, 15, 10])
  })
  it('test postOrder method for a large tree' ,()=> {
    const BST = new BinarySearchTree()
    BST.add(30).add(20).add(40).add(25).add(15).add(35).add(45).add(23).add(28).add(12).add(18)
    
    /**
     * 
     *              30
     *       20             40
     *   15      25     35      45
     * 12   18 23   28 
     * 
     * [12 18 15 23 28 25 20 35 45 40 30]
     * 
     */
    expect(postOrder(BST)).toEqual([12, 18, 15, 23, 28, 25, 20, 35, 45, 40, 30])
  })
  it('test inOrder method for a small tree' ,()=> {
    const BST = new BinarySearchTree();
    BST.add(10).add(6).add(15).add(3).add(8).add(20);
    /**
     *            10
     *      6           15
     *  3       8             20
     * 
     * [3 6 8 10 15 20]
     */
    expect(inOrder(BST)).toEqual([3, 6, 8, 10, 15, 20])
  })
  it('test inOrder method for a large tree' ,()=> {
    const BST = new BinarySearchTree()
    BST.add(30).add(20).add(40).add(25).add(15).add(35).add(45).add(23).add(28).add(12).add(18)
    
    /**
     * 
     *              30
     *       20             40
     *   15      25     35      45
     * 12   18 23   28 
     * 
     * [12 15 18 20 23 25 28 30 35 40 45]
     * 
     */
    expect(inOrder(BST)).toEqual([12, 15, 18, 20, 23, 25, 28, 30, 35, 40, 45])
  })
})