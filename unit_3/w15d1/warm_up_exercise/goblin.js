 /// initial 

let n = 20
const globlin100 = new Array(n).fill(false);
console.log(globlin100)


for (let i=0; i < n; i++) {
    globlin100[i] = true
}


console.log(globlin100)


for (let i=1; i <= n; i++) {
    for (let y = i; y < n; y+= i+1) { // y += i+1 is to increment the value of next loop
        globlin100[y] = globlin100[y] ? false : true
        console.log(y)
    }
}

let result = []
for (let i=0; i < n; i++) {
    if(globlin100[i]) {
        result.push(i+1)
    }
}

console.log(globlin100)
console.log(result)
