const arr = [12,6,3,7,13,8];

function quickSort2(arr){
    // YOUR CODE HERE
    // variables that u want to return
    const sortedArray = [...arr];
    // comparator function
    const comparator = (a,b) => {
      if(a < b) {
        return -1;
      } 
      if (a > b) {
        return 1;
      }
      return 0;
    };
    // sorting function to be recursive
    recursiveSort = (start, end) => {
      if(end - start < 1) { // if sub-array is empty, return as it is.
        return;
      }
      
      const pivotValue = sortedArray[end]
      let positionIndex = start;
      for (let i = start; i < end; i++) {
        const sort = comparator(sortedArray[i], pivotValue)
        // if value is less than pivot value
        if(sort === -1) {
         if(positionIndex !== i) {
           [sortedArray[positionIndex], sortedArray[i]] = [sortedArray[i], sortedArray[positionIndex]]
         }
          positionIndex ++;
        }
        
      }
      sortedArray[end] = sortedArray[positionIndex];
      sortedArray[positionIndex] = pivotValue;
      recursiveSort(start, positionIndex -1 );
      recursiveSort(positionIndex +1, end);
    };   
    recursiveSort(0, arr.length -1)
    return sortedArray
  }


  
// yinsheng example 
  function quickSort(arr){
    // YOUR CODE HERE
    function quickSortRecursive(arr, start, end) {
      if(start < end) {
        pIndex = partition(arr, start, end);    
        quickSortRecursive(arr, start, pIndex - 1);
        quickSortRecursive(arr, pIndex + 1, end);
      }
    }
    quickSortRecursive(arr, 0, arr.length - 1);
    return arr;
  }
  function partition(arr, start, end) {
    const pivot = arr[end]; // choose the last value as the pivot
    let pIndex = 0;
    for(let i = 0; i < end; i++) {
      if(arr[i] < pivot) {
        [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]]; //swap arr[i] with arr[pIndex]
        pIndex++;
      }
    }
    [arr[pIndex], arr[end]] = [arr[end], arr[pIndex]]; //swap arr[pIndex] with arr[end]
    return pIndex; // return the pivot partition index
  }

  console.log(quickSort(arr))
  console.log(quickSort2(arr))