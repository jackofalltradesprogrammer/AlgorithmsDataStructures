// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // we can use the stepping approach to find the circular linked list because eventually
  // slow and fast will refer to the same node 
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow.next === fast.next) {
      return true;
    }
  }
  return false;
}

module.exports = circular;
