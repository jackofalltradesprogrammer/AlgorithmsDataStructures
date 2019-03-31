// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.head; // it steps 1 node at a time
  let fast = list.head; // it steps 2 node at a time and when it gets to the last,
  // and breaks the loop and at that time slow must be pointing to the middle regardless list is even or odd in size

  while (fast.next && fast.next.next) {
    slow = start.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
