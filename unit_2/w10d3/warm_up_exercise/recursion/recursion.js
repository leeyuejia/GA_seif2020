const numsToSum = [ 1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10 ]

const sumNum = (arr, sum) => {
    sum = sum || 0;
    if(arr.length === 0) {
    return sum;}
    sum += numsToSum.shift()
    return sumNum (arr,sum);
}

// console.log(sumNum(numsToSum))

//factorial

const testCase = 5;

const factorial = (num, sum) => {
    sum = sum || 1;
    if (num === 0) {
    return sum };
    sum = sum * num
    num = num - 1
    return factorial(num, sum)
}

factorial(testCase)

// step counting

// fibonacci number 

const fibo = (num,num1,num2,num3)=> {
    num1 = num1 || 1
    num2 = num2 || 1
    num3 = num1 + num2;
    if (num3 >= num && num3 === num) {
        return true
    }
    else if (num3 >= num && num3 !== num) {
        return false
    }
    num1 = num2
    num2 = num3
    num3 = num1 + num2;
    return fibo(num, num1,num2,num3)
}

console.log(fibo(7))

// branches

const branches = (targetNum,startNum,sumNum) => {
    startNum = startNum || 1;
    sumNum = sumNum || 1;
    if (startNum <= targetNum) {
        return startNum * 3
    }
    if (startNum <= targetNum) {
        return startNum + 5
    }
}

branches(13)

// array flattener

// total recall
