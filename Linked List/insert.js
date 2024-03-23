


// (function() {
//   /* 1 & 2: Allocate the Node &
//       Put in the data*/
//   var new_node = new Node(new_data);

//   /* 3. Make next of new Node as head */
//   new_node.next = head;

//   /* 4. Move the head to point to new Node */
//   head = new_node;
//   console.log("head",head)
// }(6)

// creating the linked list node
class Node {
   constructor(data) {
      this.value = data;
      this.next = null;
   }
}
  function push(tail, data){
   var new_node = new Node(data);
   tail.next = new_node;
   tail = tail.next;
   return tail
}
function add(data) {
   var new_node = new Node(data);
   new_node.next = head;
  
   return new_node;
}

var head = new Node(1);
var tail = head;
tail = push(tail, 2)
tail = push(tail, 3)
tail = push(tail, 4)
tail = push(tail, 5)

head = add(7);

var data = 0;
while(head != null) {
   data = data + head.value + " -> ";
   head = head.next;
}
console.log("Linked List after adding a node at starting: ")
console.log(data + "null")



console.log("head",head)
 // =====>>>>> 1 2 3 4 5  6 7


// target = 3

// while(head !== null)
// {
// if(target == head.val) return
//  head = head.next

// }