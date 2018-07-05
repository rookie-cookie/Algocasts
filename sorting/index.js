// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//bubblesort and selectionsort - n^2 runtime
//poor algorithm for large data sets

function bubbleSort(arr) {
//compares each pair of adjacent items and swaps them if they are in the wrong order
  for (let i=0; i < arr.length; i++){
    for (let j=0; j < (arr.length - i - 1); j++){
      if (arr[j] > arr[j+1]){
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
