class Node {
    constructor() {
        this.val = val
        this.left = null
        this.right = null
    }

}
function levelOrderTraversal(root) {
    if(!root) return null;

    let queue = [root]
    let result = []

    while( queue.length > 0) {
        let currentSize = queue.length
        let currentLevel = []

        for(let i = 0; i < currentSize; i++) {
            let data = queue.unshift()
            currentLevel.push(data)

            if(root.left) queue.push(root.left)
            if(root.right) queue.push(root.right)
        }
        result.push(currentLevel)

    }
    return result
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.lefrightt = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)