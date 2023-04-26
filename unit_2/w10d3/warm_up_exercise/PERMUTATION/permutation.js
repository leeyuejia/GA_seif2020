// PERMUTATION
nums = [1,2,3]

let result = [];
let usedChar = []

// permutation 
// technique used : recursive, backtracking algorithm 

//////////////[1,2,3] //////////////
//////////////// 1 ///////////////////////// 2 ///////////////////////// 3 //////////////
///////// 2 ///////// 3 ///////////// 1 ///////// 3 ///////////// 1 ////////// 2 ///////////
//////// 3 ///////////// 2 ///////// 3 ///////////// 1 ///////// 2 ////////////// 1 ///////////

// const permute = function(nums) {
//     let char = []
//     for (let i=0; i < nums.length; i++) {
//         char = nums.splice(i,1)[0];
//         console.log(char)
//         usedChar.push(char)
//         console.log(usedChar)
//     if (nums.length === 0) {
//         result.push(usedChar.slice());
//     }
//     permute(nums);
//     nums.splice(i,0, char);
//     usedChar.pop();
//     }
//     return result
// };

// console.log(permute(nums))

const permute2 = function (num, used =[], ans= []) {
    if(!num.length) {
        ans.push([...used])
    }
    for (let i = 0; i <num.length; i++) {
        const available= num.filter(e => e != num[i]);
        used.push(num[i]); // push nums[0]
        console.log('push is ' + used)
        permute2(available,used, ans);
        used.pop(); // this is to backtrack and remove num[0]
        console.log('pop is ' + used)
    }
    return ans;
}

console.log(permute2(nums))

// non recursive, using queue data structure a series of memory. (FIFO --> first in first out data structure)