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
//assume that the first element in the array is the minimum
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

function merge(left, right) {
  //create an array that will hold the final sorted values
  const results = [];
  while (left.length && right.length){
    if (left[0] < right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  //es2016 - ...
  //this will add whatever is left to the results array
  return [...results, ...left, ...right];
}

function mergeSort(arr) {
  //split array and recursively join back the array - result is a sorted array
  //check first if array only has 1 element inside of it
  if (arr.length === 1){
    return arr;
  }

  //divide the array into half
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  //recursively pass the elements back into mergeSort 
  return merge(mergeSort(left), mergeSort(right))
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
