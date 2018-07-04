// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  //breadth first traversal to solve for width
  //create counters array that will hold the width of the tree at each level
  const counters = [0];
  //create another array that will act as the queue or buffer for the working
  //elements that is waiting to be processed in the tree - initialize it using the first node of the tree + the stopper value ex. 's'
  const arr = [root, 's'];

  while (arr.length > 1){
    //shift - pulls out the first element
    const node = arr.shift();
    if (node === 's'){
      //push another 0 - means we are counting the next level of the tree
      counters.push(0);
      //add stopper element at the end of the buffer array
      arr.push('s');
    } else {
      //push each children of the current node at the end of the buffer array
      arr.push(...node.children);
      //increment the last value inside the counters array
      counters[counters.length-1]++;
    }
  }
  return counters;

}

module.exports = levelWidth;
