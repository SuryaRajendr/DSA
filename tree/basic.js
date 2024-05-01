class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (!node) {
        return false;
      }
  
      if (node.value === value) {
        return true;
      }
  
      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else {
        return this.searchNode(node.right, value);
      }
    }
  
    inorderTraversal(callback) {
      this.inorderTraversalNode(this.root, callback);
    }
  
    inorderTraversalNode(node, callback) {
      if (node !== null) {
        this.inorderTraversalNode(node.left, callback);
        callback(node.value);
        this.inorderTraversalNode(node.right, callback);
      }
    }
  }
  
  // Example usage
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(8);
  tree.insert(1);
  tree.insert(4);
  
  console.log("Inorder traversal:");
  tree.inorderTraversal(value => console.log(value));
  
  console.log("Search for 4:", tree.search(4));
  console.log("Search for 6:", tree.search(6));
  