class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  append(data) {
      const newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
          return;
      }

      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = newNode;
  }

  display() {
      let current = this.head;
      while (current) {
          console.log("linked list",current.data);
          current = current.next;
      }
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.display();
