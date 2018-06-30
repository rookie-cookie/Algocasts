// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    //initialize data variable and children array
    this.data = data;
    this.children = [];
  }

  add(data){
    this.children.push(new Node(data));
  }

  remove(data){
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  //traverse by breadth first - start by iterating at each level of the Tree
  traverseBF(fn){
    //take the root node and push it in a new array
    const arr = [this.root];
    //then remove the elements in the array
    while(arr.length){
      const node = arr.shift();
      //check if current element have children nodes
      //add children nodes at the end of the array
      //ES2015 Spread Operator - this will take every element in node.children
      //and push that to the arr array
      arr.push(...node.children);
      fn(node);
    }
  }

  //traverse by depth first - start at the root and try to hit the bottom of the tree as quick as possible
  traverseDF(fn){
    //take the root node and push it in a new array
    const arr = [this.root];
    while(arr.length){
      const node = arr.shift();
      //unshift - add an element to the front of an array
      arr.unshift(...node.children);
      fn(node);
    }
  }

}

module.exports = { Tree, Node };
