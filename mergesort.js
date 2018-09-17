// const Sorting = {};

Sorting.split = function(a)  {
  let midPoint = Math.floor(a.length / 2);

  let arrayA = a.slice(0, midPoint);
  let arrayB = a.slice(midPoint);

  return [arrayA, arrayB];
}

Sorting.merge = function(array1, array2)  {
    let mergedArray = []
    while(array1.length || array2.length) {
        if(array1[0] > array2[0]) {
                mergedArray.push(array2.shift())
            } else {
                mergedArray.push(array1.shift())
            }
        }
    return mergedArray;
}

Sorting.mergeSort = function(array)  {
  if(array.length < 2)  {
    return array;
  } else  {
    let [a,b] = this.split(array)
    // return this.merge([this.mergeSort(a)], [this.mergeSort(b)])
  }
}
