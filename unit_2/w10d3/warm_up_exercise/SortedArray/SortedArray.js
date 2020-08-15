// Given an array of integers nums SORTED in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

const arrNum = [5,7,7,8,8,10]
const target = 8

// Solution 1 - loop thru the array and if arr[i] = tar, push i into a newarry
//O(n) time complexity. but interview will not pass. 

// solution 2 - binary search 

function ExtremeBinarySearch (nums, target, isFirst = true) {
    // isFirst is to indicate which arr are u searching? left or right
    let pos = -1  // first element position initialized as -1
    let start = 0 
    let end = nums.length - 1
    let mid = 0
    while(start <= end) {
        mid = start + Math.floor((end-start +1) /2);
        if(nums[mid] > target) {
            end = mid - 1;
        } else if(nums[mid] < target ) {
            start = mid +1;
        } else if (nums[mid] === target && isFirst) {
            pos = mid;
            end = mid - 1;
        } else if (nums[mid] === target && !isFirst) {
            pos = mid;
            start = mid +1;
        }
    }
    return pos;
}

function binSearch (arr, target) {
    // find the first element index
    // if ( 1st element doest exist, then it return -1)
    // return [-1,-1]
    // else return first element
    // find the last element index
    const result = [-1,-1];
    const firstIndex = ExtremeBinarySearch(arr, target) 
    if(firstIndex === -1) {
        return result;
    }
    result[0] = firstIndex;
    const lastIndex = ExtremeBinarySearch(arr,target, false);
    result[1] = lastIndex;
    return result
};

console.log(binSearch (arrNum, target))