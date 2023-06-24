const Queue = require('../../../Queue/queue');
const BinarySearchTree = require('../../BinaryTree/binarytreesearch');

const BST = new BinarySearchTree();
const queue = new Queue();
const values = [];

BST.add(10).add(6).add(15).add(3).add(8).add(20);

queue.enqueue(BST.root);

while (queue.size !== 0) {
  const node = queue.dequeue()
  values.push(node.val)
  if(node.left !== null) {
    queue.enqueue(node.left)
  }
  if(node.right !== null){
    queue.enqueue(node.right)
  }
}
