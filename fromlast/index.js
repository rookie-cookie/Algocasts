// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  //move fast by n steps first
  while (n>0){
    fast = fast.next;
    n--;
  }

  //then move both slow and fast by 1 step until
  //fast reaches the last node
   while(fast.next){
     slow = slow.next;
     fast - fast.next;
   }
   //slow should now be n steps from the last node
   return slow;
}

module.exports = fromLast;
