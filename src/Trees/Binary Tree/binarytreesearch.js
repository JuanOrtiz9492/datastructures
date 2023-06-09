class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(val){
    const newNode = new Node(val)
    if(this.root === null){
      this.root = newNode
    } else {
     const helper = (val, node) => {
      if(val > node.val) {
        if(node.right === null) {
          node.right = newNode
          return
        } else {
         return helper(val, node.right)
        }
      } else {
        if(node.left === null) {
          node.left = newNode
          return
        } else {
          return helper(val, node.left)
        }
      }
     }
     helper(val, this.root)
    }
    return this
  }
}

const BST = new BinarySearchTree();
BST.add(10).add(6).add(12).add(8).add(11)