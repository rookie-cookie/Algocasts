// --- Directions
// Implement classes Node and Linked Lists
// See 'directions.html' document

//node implementation
class Node {
  //node - next node along the chain
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }

}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    //remember the node class takes 2 arguments
    //this.head becomes the second argument - it becomes the 'next' node
    //and the 'data' node is inserted
    this.head = new Node(data, this.head);
  }
}

/*
test:
const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list
*/

module.exports = { Node, LinkedList };
