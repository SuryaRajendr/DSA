class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data)
        if(!this.head == null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head
            newNode.prev = this.head
            this.head = newNode

        }
    }
}
let obj = new DoublyLinkedList()
obj.insert(1)
obj.insert(2)
obj.insert(3)
obj.insert(4)
obj.insert(9)

let current = this.head
console.log("current -->", current)