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
//assume that the first number in the array is the minimum
//then find if there is any number that has smaller value then swaps
  for (let i = 0; i < arr.length; i++){
    let indexOfMin = i;
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] < arr[indexOfMin]){
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i){
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
