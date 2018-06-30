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

  getLast(){
    if (!this.head){
      return null;
    }
    let node = this.head;
    while (node){
      //if node is null, that means it is the last node
      if (!node.next){
        return node;
      }
      node = node.next
    }
  }

  clear(){
    return this.head = null;
  }

  removeFirst(){
    if (!this.head){
      return;
    }
    //point the this.head to the second node (next)
    this.head = this.head.next;
  }

  removeLast(){
    //if list is empty
    if(!this.head){
      return;
    }
    //if there is only 1 node
    if (!this.head.next){
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data){
    const last = this.getLast();
    if (last){
      last.next = new Node(data);
    }else {
      //list is empty
      this.head = new Node(data);
    }
  }

  //return the node at the provided index
  getAt(index){
    //if there is nothing in the list
    if (!this.head){
      return null;
    }
    let node = this.head;
    let counter = 0;
    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }
    //if index does not exist
    return null;
  }

  //remove node at a particular index
  removeAt(index){
    //if there is nothing in the list
    if (!this.head){
      return null;
    }
    //remove first element
    if(index === 0){
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index-1);
    if(!previous || !previous.next){
      return;
    }
    //skips the index that needs to be removed
    previous.next = previous.next.next;
  }

  insertAt(data, index){
    if (!this.head){
      this.head = new Node(data);
      return;
    }
    if (index === 0){
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index-1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
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
