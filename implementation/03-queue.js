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
    // Remove node from front of queue (linked list)
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
