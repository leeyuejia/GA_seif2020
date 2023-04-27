const arr = [ [10, 20, 30],
    [40, 50, 60],
    [70, -80, 90] ];

const bigArray =
            [ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
                [ -269, 964, 209, 840, -456, 156, 365, -568 ],
                [ 289, -41, 488, 198, 240, 124, -427, 214 ],
                [ 452, 894, 968, -149, 683, 977, 741, -805 ],
                [ 181, -714, -950, 107, 800, 751, -143, 380 ],
                [ 152, 493, 707, 914, 37, 356, -625, 608 ],
                [ -345, 906, 83, 676, 723, 381, 557, -183 ],
                [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

const greatestSum = (arr) => {
    const n = arr.length;
    const maxRowSum = Math.max.apply(null, arr.map(subArray => subArray.reduce((a, e) => a += e)));
    const colSums = new Array(n).fill(0);
    arr.forEach(subArray => {
        subArray.forEach((element, index) => {
            colSums[index] += element;
        });
    });
    const maxColSum = Math.max.apply(null, colSums);
    const diagonalSums = [0, 0];
    arr.forEach((subArray, rowIndex) => {
        diagonalSums[0] += subArray[rowIndex];
        diagonalSums[1] += subArray[n - 1 - rowIndex];
    });
    const maxDiagSum = Math.max.apply(null, diagonalSums);
    return Math.max(maxRowSum, maxColSum, maxDiagSum);
};

console.log(greatestSum(bigArray));

const intuitiveGreatestSum = (arr) => {
    const n = arr.length;
    const rowSums = new Array(n).fill(0);
    const colSums = new Array(n).fill(0);
    const diagonalSum = [0, 0];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            rowSums[i] += arr[i][j];
            colSums[j] += arr[i][j];
        }
        diagonalSum[0] += arr[i][i];
        diagonalSum[1] += arr[i][n - 1 - i];
    }
    const maxRowSum = Math.max(...rowSums);
    const maxColSum = Math.max(...colSums);
    const maxDiagSum = Math.max(...diagonalSum);
    return Math.max(maxRowSum, maxColSum, maxDiagSum);
};

console.log(intuitiveGreatestSum(arr));
console.log(intuitiveGreatestSum(bigArray));