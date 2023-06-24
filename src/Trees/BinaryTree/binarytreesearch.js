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
      } else if (val < node.val) {
        if(node.left === null) {
          node.left = newNode
          return
        } else {
          return helper(val, node.left)
        }
      } else {
        return
      }
     }
     helper(val, this.root)
    }
    return this
  }
  find(val){
    const helper = (node)=> {
      if (node === null) {
        return false
      } else if (node.val === val) {
        return true
      } else {
        if(val < node.val) {
          return helper(node.left)
        } else {
          return helper(node.right)
        }
      }
    }
      return helper(this.root)
  }
}

module.exports = BinarySearchTree