// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor (){
    this.data = [];
  }
  //add to the beginning of the queue
  add(record){
    //unshift adds an element at the start of an array
    this.data.unshift(record);
  }
  //remove the last record from the queue
  remove(){
    return this.data.pop();
  }
}

module.exports = Queue;
