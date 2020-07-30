// problem : given a sorted integer array a [2,3,5,10,23,25,30,35,40], search for the target value n, check whether n exists in the array
// solution is to divide and conquer. 
// 1. get the middle index of the array and compare it with target value
// 2. if the value of middle index is the same as the target value, return true. 
// 3. if middle index < target value, search target value in the right half of the array;
// 4. if middle index > target value, search target value in the left half of the array; 
const arr1 = [2,3,5,10,23,25,30,35,40]
console.log('i')
const binarySearch = (arr, target) => {
    let startIndex = 0, endIndex = arr.length -1;
    while ( startIndex <= endIndex) {
        const middleIndex = Math.floor((endIndex - startIndex +1)/2);
        if(arr[middleIndex] === target) return true;
        else if (arr[middleIndex] < target) {
            startIndex = middleIndex + 1;
        } else if (array[middleIndex] > target) {
            endIndex = middleIndex - 1;
        }
    }
    return false;
}

console.log(binarySearch (arr1, 30))
console.log('i')