// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
    return this;
  }

  removeFromHead() {
    if(!this.head) return undefined
    let current = this.head
    this.head = current.next
    this.length--
    return current
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
