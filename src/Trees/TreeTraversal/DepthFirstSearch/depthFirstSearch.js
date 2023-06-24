const preOrder = (tree)=> {
  const values = []
  const traverse = (node) => {
    values.push(node.val)
    if(node.left !== null) {
      traverse(node.left)
    }
    if(node.right !== null) {
      traverse(node.right)
    }
  }
  traverse(tree.root)
  return values
}

const postOrder = (tree)=> {
  const values = []
  const traverse = (node) => {
    if(node.left !== null) {
      traverse(node.left)
    }
    if(node.right !== null) {
      traverse(node.right)
    }
    values.push(node.val)
  }
  traverse(tree.root)
  return values
}

const inOrder = (tree)=> {
  const values = []
  const traverse = (node) => {
    if(node.left !== null) {
      traverse(node.left)
    }
    values.push(node.val)
    if(node.right !== null) {
      traverse(node.right)
    }
  }
  traverse(tree.root)
  return values
}
module.exports = {
  preOrder,
  postOrder, 
  inOrder
}