const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
    // return ++this.size;

    // Write your hypothesis on the time complexity of this method here
  }

  dequeue() {
    if(!this.head) return null
    let removeNode = this.head
    this.head = this.head.next
    removeNode.next = null
    if(this.length === 1) {
      this.head = null
      this.tail = null
    }
    this.length--
    return removeNode.value
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
