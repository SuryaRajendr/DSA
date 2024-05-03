class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preOrderTraversal(node, result = []) {
    if (node !== null) {
        result.push(node.value);  // Visit the root node
        preOrderTraversal(node.left, result);  // Traverse the left subtree
        preOrderTraversal(node.right, result); // Traverse the right subtree
    }
    return result;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(preOrderTraversal(root)); // Output: [1, 2, 4, 5, 3]
