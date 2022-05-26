// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let prevTail = this.tail;
      this.tail = newNode;
      prevTail.next = this.tail;
      newNode.prev = prevTail;
    }
    this.length++;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead.value;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode.value;
  }

  peekAtHead() {
    if(!this.head) return undefined
    return this.head.value
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
