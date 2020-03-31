class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // default linked list is empty
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let currNode = this.head;
    let str = '';

    while (currNode != null) {
      str += `${currNode.val} -> `;
      currNode = currNode.next;
    }
    str += 'null';
    console.log(str);
    return str;
  }
}

module.exports = LinkedList;