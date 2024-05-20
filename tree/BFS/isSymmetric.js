/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    let queue = []
    queue.push(root.left)
    queue.push(root.right)

    while(queue.length > 0) {
          console.log("queue ==>",queue)
         for(let i = 0; i < queue.length; i++) {
            let node1 = queue.shift()
            let node2 = queue.shift()
            if(node1 == null && node2 == null) continue
            if(node1 == null || node2 == null) return false
            if(node1.val !== node2.val) {
                return false
            }
            queue.push(node1.left)
            queue.push(node2.right)
             queue.push(node1.right)
             queue.push(node2.left)
            console.log("queue ==>",queue)
         }
    }
  return true
};