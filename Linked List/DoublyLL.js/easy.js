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

    // print() {
    //     let current = this.head
    //     while (current !== null) {
    //         console.log("current", current.data)
    //         current = current.next
    //     }
    //     return 
    // }

    // 1.Program to find size of Doubly Linked List
    findSize() {
        let current = this.head;
        let count = 0
        while(current !== null) {
            count++
            current = current.next;
        }
        return count
    }
}


let obj = new DoublyLinkedList()
obj.insert(1)
obj.insert(2)
obj.insert(3)
obj.insert(4)
obj.insert(5)
console.log("-->",obj);
// console.log("print ----->",obj.print())

let current = this.head
while (current !== null) {
    console.log("current", current.data)
    current = current.next
}

console.log("Print size of the doubly linked list", obj.findSize());


    
