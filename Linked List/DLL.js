class Node {
  constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  insertAtBeginning(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
  }

  insertAtEnd(value) {
      const newNode = new Node(value);
      if (!this.tail) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }

  insertAtPosition(value, position) {
      if (position === 0) {
          this.insertAtBeginning(value);
      } else {
          let current = this.head;
          let count = 0;
          while (current && count < position - 1) {
              current = current.next;
              count++;
          }
          if (current) {
              const newNode = new Node(value);
              newNode.next = current.next;
              newNode.prev = current;
              if (current.next) {
                  current.next.prev = newNode;
              }
              current.next = newNode;
              if (!newNode.next) {
                  this.tail = newNode;
              }
          }
      }
  }

  deleteAtBeginning() {
      if (!this.head) {
          return;
      }
      if (!this.head.next) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }
  }

  deleteAtEnd() {
      if (!this.tail) {
          return;
      }
      if (!this.tail.prev) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
      }
  }

  deleteAtPosition(position) {
      if (position === 0) {
          this.deleteAtBeginning();
      } else {
          let current = this.head;
          let count = 0;
          while (current && count < position) {
              current = current.next;
              count++;
          }
          if (current && current.next) {
              current.prev.next = current.next;
              current.next.prev = current.prev;
          } else if (current) {
              this.tail = current.prev;
              current.prev.next = null;
          }
      }
  }

  traverse() {
      let current = this.head;
      while (current) {
          console.log(current.value);
          current = current.next;
      }
  }

  search(value) {
      let current = this.head;
      while (current) {
          if (current.value === value) {
              return true;
          }
          current = current.next;
      }
      return false;
  }
}

// Example usage
const dll = new DoublyLinkedList();
dll.insertAtEnd(1);
dll.insertAtEnd(2);
dll.insertAtEnd(3);
dll.insertAtEnd(4);

dll.traverse(); // Output: 1 -> 2 -> 3 -> 4
dll.insertAtPosition(5, 2);
dll.traverse(); // Output: 1 -> 2 -> 5 -> 3 -> 4
dll.deleteAtPosition(2);
dll.traverse(); // Output: 1 -> 2 -> 3 -> 4
console.log("from DLL")
console.log(dll.search(3)); // Output: true
console.log(dll.search(6)); // Output: false
