


const Sorting = {};

Sorting.swap = function(index1, index2, array) {
  let oldNum1 = array[index1];
  array[index1] = array[index2];
  array[index2] = oldNum1;
}

Sorting.bubbleSort = function(array) {
  if(!Array.isArray(array)) {
    return undefined;
  } else if(array.length === 0 || array.length === 1)  {
    return array;
  } else  {
  return array;
  }
}
