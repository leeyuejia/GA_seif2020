// Number Of Longest Increasing SubSequence problem. 
// given an unsorted array of integers, find the no. of longest increasing subsequences

// example 1,
// unsortedArr = [1,3,5,4,7]
// LIS output = 2
// longestIncreasing or LIS = [
//     [1,3,4,7],
//     [1,3,5,7],
//  ]

// FOR DYNAMIC programming
// LIS = longest increasing subsequences
// LengthOfLIS = what is the longest length in the LIS? [1,3,4,7].length
// Strategies is to computate all the result and then derive a solution. (calculating all the intermediate result)
// Do not use a fixed criteria
// array  |  1  |  3  |  5  |  4  |  7  |
// LIS    |  1  |  1  |  1  |  1  |  2  |
// Length |  1  |  2  |  3  |  3  |  4  |



// YS example

// var findNumberOfLIS = function(nums) {
//     let N = nums.length;
//     if(N === 0) return 0;
//     let numberLongestIncresingSubsequences = new Array(N).fill(1);
//     let lengthLongestIncreasingSubsequences = new Array(N).fill(1);
//     for(let i = 1; i < N; i++) {
//         for(let j = 0; j < i; j++) {
//             if(nums[j] < nums[i]) {
//                 if(lengthLongestIncreasingSubsequences[j] + 1 > lengthLongestIncreasingSubsequences[i]) {
//                     lengthLongestIncreasingSubsequences[i] = lengthLongestIncreasingSubsequences[j] + 1;
//                     numberLongestIncresingSubsequences[i] = numberLongestIncresingSubsequences[j];
//                 } else if(lengthLongestIncreasingSubsequences[j] + 1 === lengthLongestIncreasingSubsequences[i]) {
//                     numberLongestIncresingSubsequences[i] += numberLongestIncresingSubsequences[j];
//                 }
//             }
//         }
//     }
//     // find the max Length out of lengthLongestIncreasingSubsequences;
//     const maxLength = lengthLongestIncreasingSubsequences.reduce((maxLength, curLength) => Math.max(maxLength, curLength));
//     let sum = 0;
//     for(let i = 0; i < N; i++) {
//         if(maxLength === lengthLongestIncreasingSubsequences[i]) {
//             sum += numberLongestIncresingSubsequences[i];
//         }
//     }
//     return sum;
// };
// [1, 3, 5, 4, 7]
// [1, 2, 3, 3, 4]
// [1, 1, 1, 1, 2]
// [2, 2, 2, 2, 2]
// [1, 1, 1, 1, 1]
// [1, 1, 1, 1, 1]
            // j  i
// 1, 3, 5, 4, 7   --> [1, 3, 5] => [1, 3, 5, 7]
// 1, 1, 1, 1, 2   --> [1, 3, 4] - > [1, 3, 4, 7]
// 1, 2, 3, 3, 4
               // j  i
// 1, 3, 5, 4, 2, 6
// 1, 1, 1, 1, 1, 2
// 1, 2, 3, 3, 2, 4         
// 1 , 3 , 5
// 1 , 1 , 1
// 1 , 2 , 3
// 1, 3, 5, 6
// 1, 1, 1, 1 => numberLongestIncresingSubsequences - each element of array is representing the LISs ending with the current number
// 1, 2, 3, 3 => lengthLongestIncreasingSubsequences
// [1, 3, 5, 4] => 2
// LIS - longest increasing susbsequence
// 1
// LIS = 1 the number of LIS is 1 the lenght of LIS is 1
// 1, 3
// the # of LIS is 1, the length of LIS is 2
// 1, 3, 5
// the # of LIS is 1, the length of LIS is 3
// 1, 3, 5, 4
// the # of LIS is 2, the length of LIS is 3
                        // j  i
// input =>       1, 3, 5, 4
// numberOfLIS -> 1, 1, 1, 1  -> [1, 3, 5]  [1, 3, 4]
// lengthOfLIS => 1, 2, 3, 3
                    
