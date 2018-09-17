


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
    for(let endIndex=array.length-1; endIndex > 0 ;endIndex--) {
        console.log('endIndex', endIndex)
        for(let currentIndex=0; currentIndex<endIndex ;currentIndex++) {
            console.log('currentIndex', currentIndex)
            // check if the current element is greater than the next element
            if(array[currentIndex] > array[currentIndex+1]) {
                Sorting.swap(currentIndex, currentIndex+1, array)
            }
        }
    }
    return array
  }
}
