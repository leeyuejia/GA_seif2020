//divide array until cannot divide anymore
const myArray = [12,6,3,7,13,8];
const sorted = mergeSort(myArray) 
function mergeSort(arr) {
  if(arr.length <=1) {
      return arr;
  }
  const midIndex = Math.floor(arr.length/2);
  const leftArr = arr.slice(0, midIndex)
  const rightArr = arr.slice(midIndex)
  return merge(mergeSort(leftArr),mergeSort(rightArr))
  // YOUR CODE HERE
}

function quickSort(arr){
  // YOUR CODE HERE
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
      console.log(arr1)
      console.log(arr2)
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
    console.log('result is', result)
  }
  console.log('concat' , result)
  return result.concat(arr1, arr2);
}
console.log(sorted)
// Test Script below, DO NOT TOUCH 

// mocha.setup('bdd');
// const expect = chai.expect;

// describe('Merge Sort', ()=>{
//   it('should sort the array', ()=>{
//     const myArray = [12,6,3,7,13,8];
//     const sorted = mergeSort(myArray);
//     expect(sorted).to.deep.equal([3,6,7,8,12,13]);
//     const otherArray = [-3, -1, 5, 100];
//     const otherSorted = mergeSort(otherArray);
//     expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//   })
// });

// describe('Quick Sort', ()=>{
//   it('should sort the array', ()=>{
//     const myArray = [12,6,3,7,13,8];
//     const sorted = quickSort(myArray);
//     expect(sorted).to.deep.equal([3,6,7,8,12,13]);
//     const otherArray = [-3, -1, 5, 100];
//     const otherSorted = quickSort(otherArray);
//     expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//   })
// });

// mocha.run()