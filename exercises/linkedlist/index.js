// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // head holds a reference only and so it is similar to next in node
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
  //   let node = this.head;
  //   if (!node) {
  //     return null;
  //   }
  //   while (node.next) {
  //     node = node.next;
  //   }
  //   return node;
  // 
  return this.getAt(this.size()-1);
}

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previousNode = this.getAt(index - 1);
    if (previousNode && previousNode.next) {
      previousNode.next = previousNode.next.next;
    }
    return;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // if the value is null return this.getLast();
    let previousNode = this.getAt(index - 1) || this.getLast();

    previousNode.next = new Node(data, previousNode.next);
  }

  forEach(func){
    for(let i=0; i< this.size(); i++){
      func(this.getAt(i), i);
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
