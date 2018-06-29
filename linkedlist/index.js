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
  //should return the number of nodes in the linked list
  size(){
    let counter = 0;
    let node = this.head;
    //while the node is a truthy value
    //if there is no this.head (which is a node), then then while loop stops
    while (node){
      counter++;
      //next property is either head or null
      //if null, then counter stops
      node = node.next;
    }
    return counter;
  }
  //should return the first node of linked list
  getFirst(){
    return this.head;
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
