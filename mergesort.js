// const Sorting = {};

Sorting.split = function(a)  {
  if(a.length === 1) return a
  let midPoint = Math.floor(a.length / 2);

  let arrayA = a.slice(0, midPoint);
  let arrayB = a.slice(midPoint);

  return [arrayA, arrayB];
}

Sorting.merge = function(array1, array2)  {
    let mergedArray = []
    let indexL = 0;
    let indexR = 0;
    while(mergedArray.length <= (array1.length + array2.length)) {
        if(array1[indexL] > array2[indexR]) {
                mergedArray.push(array2[indexR]);
                indexR++;
            } else {
                mergedArray.push(array1[indexL]);
                indexL++;
            }
        }
    return mergedArray;
}

Sorting.mergeSort = function(array)  {
  if(array.length < 2)  {
    return array;
  } else  {
    let [a, b] = this.split(array)
    // Sorting.mergeSort(a)
    // Sorting.mergeSort(b)
    return Sorting.merge(Sorting.mergeSort(a), Sorting.mergeSort(b))
  }
}
