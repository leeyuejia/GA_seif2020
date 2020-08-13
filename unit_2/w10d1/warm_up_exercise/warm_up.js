let objectOfWords = {}
const findWordFrequencies = (string, splitElement) => {
    let count = 1
    let arrayWord = string.toLowerCase().split(splitElement)
    arrayWord.forEach(el => {
        if (!Object.keys(objectOfWords).includes(el)) {
            objectOfWords[el] = count
        }
        else if (Object.keys(objectOfWords).includes(el)) {
            objectOfWords[el] ++
        }
    })

    return objectOfWords
}
console.log(findWordFrequencies("I love lamp i lamp lamp", " "))
let freq = findWordFrequencies("I love lamp i lamp lamp", " ")


const findHighestFrequency = (obj) => {
    const highestWord = Object.keys(obj).reduce((acc,cur) => {
        console.log(acc + "and" + cur)
        if (obj[acc] < obj[cur]) {
            console.log(acc + "and" + cur)
            highestWord = cur;
        }
        return highestWord
    })
    let result = {}
    return result[highestWord] = obj[highestWord];
}

console.log(findHighestFrequency(freq))