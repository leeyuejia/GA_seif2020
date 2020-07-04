const arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];
const calRow = () => {
    
}






//LECTURER EXAMPLE 
const sumRow = []
const sumCol = []
const sumDiag = new Array(2).fill(0)

for (let row = 0; row < arr.length; row++) {
    let rowNum = 0
    let colNum = 0
    for(let col = 0; col < arr.length; col++) {
        rowNum += arr[row][col]
        colNum += arr[col][row]
        sumDiag[0] += arr[row][row]
        
    }
    sumDiag[1] += arr[row][arr.length -1 - row]
    sumRow.push(rowNum)
    sumCol.push(colNum)
}



console.log(sumDiag + "sumDiag")
console.log(sumRow + "sumRow")
console.log(sumCol + "sumCol")