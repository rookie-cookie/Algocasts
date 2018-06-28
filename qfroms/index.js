// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

//implement 'queue' using stack
//queue - fifo
//stack - filo
const Stack = require('./stack');

class Queue {
  //create the two stacks for the class queueu instance
  constructor(){
    this.first = new Stack();
    this.second = new Stack();
  }

  //implement the add moethod - meaning, take the record and push it to stack A
  add(record){
    this.first.push(record);
  }

  //implement the remove method
  remove(){
    //iterate every record in stack A
    //for every record, peek (iterate through) and push it to stack B
    while (this.first.peek()){
      //as long as there is still a record in A
      //push that record into B
      const record = this.first.pop();
      this.second.push(record);
    }

    //once all record is moved to stack B
    const record = this.second.pop();
    while (this.second.peek()){
      //then iterate through B
      //as long as there is a reocrd, push it back to A
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek(){
    //stack B to A
    while(this.first.peek()){
      this.second.push(this.first.pop());
    }
    //peek first
    const record = this.second.peek();

    while (this.second.peek()){
      this.first.push(this.second.pop());
    }
    return record;
  }
}

module.exports = Queue;
