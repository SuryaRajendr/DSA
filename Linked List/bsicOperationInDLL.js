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
      this.tail = null;
  }


  insertAtBegining(data) {
      let newNode = new Node(data)
      if(!this.head) {
          this.head = newNode
          this.tail = newNode
      } else {
          newNode.next = this.head
          this.head.prev = newNode
          this.head = newNode
      }
  }

  inserAtEnd(data) {
      let newNode = new Node(data) 
      if(!this.tail) {
          this.head = newNode;
          this.tail =  newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode
      }

  }

  insertAtPositoin(value, position) {
      if (position == 0) {
          this.insertAtBegining(value)
      } else {
          let current = this.head, count = 0
          while( current) {
              if(count ===  position - 1) {
                  return
              }
              current = current.next
              count++;
          }
          if(current) {
              let newNode = Node(value)
              newNode.next = current.next
              newNode.prev = current
              current.next = newNode
          }
      }
  }


  arrayToDoublyLinkedList(arr) {

      if(arr.length === 0) return null;
      let head = new Node(arr[0])
      let current = head
      for(let i = 1; i < arr.length; i++) {
          let newNode = new Node(arr[i])
          current.next = newNode
          newNode.prev = current
          current = newNode
      }
      return head
  }

}


let dll = new DoublyLinkedList()
dll.inserAtEnd(1)
dll.inserAtEnd(2)
dll.insertAtBegining(3)
dll.insertAtPositoin(7,4)
console.log("dll",dll)

let arr = [11,12,13,14,15,16,17]
head = arr[0]
let doubleLL = dll.arrayToDoublyLinkedList(arr)
console.log("doubleLL",doubleLL)



