class Node {
constructor(number) {
	this.number = number;
	this.next = null;
}
}

function push(head, number) {
const node = new Node(number);
node.next = head;
head = node;
return head;
}

function deleteN(head, position) {
let temp = head;
let prev = head;

for (let i = 0; i < position; i++) {
	if (i === 0 && position === 1) {
	head = head.next;
	temp = null;
	} else {
	if (i === position - 1 && temp) {
    console.log("temp===>",temp,"position===>",position)
		prev.next = temp.next;
		temp = null;
	} else {
		prev = temp;

		// Position was greater than
		// number of nodes in the list
		if (prev === null) break;

		temp = temp.next;
	}
	}
}
return head;
}

function printList(head) {
while (head) {
	if (head.next === null)
	console.log(`[${head.number}] [${head}]->(nil)`);
	else console.log(`[${head.number}] [${head}]->${head.next}`);
	head = head.next;
}
console.log('\n');
}

// Driver code
let list = new Node(0);
list.next = null;
list = push(list, 1);
list = push(list, 2);
list = push(list, 3);

printList(list);
console.log("list----",list)

// Delete any position from list
list = deleteN(list, 2);
printList(list);
