
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current != null) {
            // Swap prev and next pointers of the current node
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            // Move to the next node
            current = current.prev;
        }

        // Check if the list is empty or only has one node
        if (temp != null) {
            this.head = temp.prev;
        }
    }

    // Other methods for adding, deleting, and printing nodes can be implemented here
}

// Example usage
let list = new DoublyLinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.prev = list.head;
list.head.next.next = new Node(3);
list.head.next.next.prev = list.head.next;
list.head.next.next.next = new Node(4);
list.head.next.next.next.prev = list.head.next.next;

console.log("Original list:");
let current = list.head;
while (current != null) {
    console.log(current.data);
    current = current.next;
}

list.reverse();

console.log("Reversed list:");
current = list.head;
while (current != null) {
    console.log(current.data);
    current = current.next;
}

// appraoch ================================
// // javascript program to reverse a doubly linked list

// var head;

// 	class Node {
// 			constructor(val) {
// 				this.data = val;
// 				this.prev = null;
// 				this.next = null;
// 			}
// 		}
// 	/* Function to reverse a Doubly Linked List */
// 	function reverse() {
// var temp = null;
// var current = head;

// 		/*
// 		* swap next and prev for all nodes of doubly linked list
// 		*/
// 		while (current != null) {
// 			temp = current.prev;
// 			current.prev = current.next;
// 			current.next = temp;
// 			current = current.prev;
// 		}

// 		/*
// 		* Before changing head, check for the cases like empty list and list with only
// 		* one node
// 		*/
// 		if (temp != null) {
// 			head = temp.prev;
// 		}
// 	}

// 	/* UTILITY FUNCTIONS */
// 	/*
// 	* Function to insert a node at the beginning of the Doubly Linked List
// 	*/
// 	function push(new_data) {
// 		/* allocate node */
// var new_node = new Node(new_data);

// 		/*
// 		* since we are adding at the beginning, prev is always NULL
// 		*/
// 		new_node.prev = null;

// 		/* link the old list of the new node */
// 		new_node.next = head;

// 		/* change prev of head node to new node */
// 		if (head != null) {
// 			head.prev = new_node;
// 		}

// 		/* move the head to point to the new node */
// 		head = new_node;
// 	}

// 	/*
// 	* Function to print nodes in a given doubly linked list This function is same
// 	* as printList() of singly linked list
// 	*/
// 	function printList(node) {
// 		while (node != null) {
// 			document.write(node.data + " ");
// 			node = node.next;
// 		}
// 	}

	

// 		/*
// 		* Let us create a sorted linked list to test the functions Created linked list
// 		* will be 10->8->4->2
// 		*/
// 		push(2);
// 		push(4);
// 		push(8);
// 		push(10);

// 		document.write("Original linked list <br/>");
// 		printList(head);

// 		reverse();
// 		document.write("<br/>");
// 		document.write("The reversed Linked List is <br/>");
// 		printList(head);

// // This code contributed by gauravrajput1
