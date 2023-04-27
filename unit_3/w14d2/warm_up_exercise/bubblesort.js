

//////////////////////////////////////                  LECTURER EXAMPLE              //////////////////////////////////
/*
// [2, 4, 5, 2, 9, 10, 28, -10, -28]

// [-10, 4, 5, 2, 9, 10, 28, 2, -28]
// [-28, 4, 5, 2, 9, 10, 28, 2, -10]

// [-28, 2, 5, 4, 9, 10, 28, 2, -10]
// [-28, -10, 5, 4, 9, 10, 28, 2, 2]
// [-28, -10, 5, 4, 9, 10, 28, 2, 2]
//  i     j
// [-28, -10, 2, 2, 4, 5, 9, 10, 28]
const sort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
};

console.log(sort([2, 4, 5, 2, 9, 10, 28, -10, -28]));

const bubbleSort = (arr) => {
    const n = arr.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

console.log(bubbleSort([2, 4, 5, 2, 9, 10, 28, -10, -28]));
*/

//////////////////////////////////////                  MY EXAMPLE              //////////////////////////////////
const bubbleArr = [5,6,3,1,2,4,7,8]

const bubbleSort =(arr) => {
    let n = arr.length
    console.log ("n =" + n)
    for (let i=0; i< n-1; i++) {
        console.log("i loop")
        for (let j=0; j< n-i-1; j++) {
            console.log("j = " + arr[j] + " j+1 =" + arr[j +1])
            if(arr[j] > arr[j+1]) {

                [arr[j],arr[j+1]] = [arr[j+1], arr[j]]                
            }

        }
    }return arr
}
console.log(bubbleSort(bubbleArr))

//// Time complexity in bubblesort png