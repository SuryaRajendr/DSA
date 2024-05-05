class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function preOrderTraverasl (root) {
    if(!root) return null

    let result = []
    let stack  = [root]

    while(stack.length > 0) {
        let node = stack.pop()
       // console.log("before",result)
        result.push(node.val)
        //console.log("after",result)

        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return result
}

function postOrderTraverasl (root) {
    if(!root) return null

    let result = []
    let stack  = [root]

    while(stack.length > 0) {
        let node = stack.pop()
        //console.log("before",result)
        result.unshift(node.val)
        //console.log("after",result)
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return result
}
const inorderTraversal = function(root) {
    const stack = [];
    const result = [];
    let curr = root;

    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        console.log("stack",stack)
        curr = stack.pop();
        console.log("cur",curr)
        result.push(curr.val);
        console.log("result",result)
        curr = curr.right;
    }

    return result;
};
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

console.log("Iteratively preorder traveral -", preOrderTraverasl(root))
console.log("Iteratively postorder traveral -", postOrderTraverasl(root))
console.log("Iteratively postorder traveral -", inorderTraversal(root))