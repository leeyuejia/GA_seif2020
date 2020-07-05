const info = document.getElementById('pictures')
console.log(info)
const h2 = document.querySelector('h2')
console.log(h2)
h2.innerText += '!!!'
const array = document.getElementsByClassName('facts')
console.log(array)
document.querySelectorAll('li')[1].innertext = 'Serene Hill'
document.querySelectorAll('li')[0].style.color = 'blue'
document.querySelectorAll('li')[2].innerText = 'Jamboree sandwich at the Jambo-ree'
newItem = document.createElement('img')
newItem.setAttribute('src','https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg');
info.appendChild(newItem)
for (el in array) {
    document.querySelectorAll('li')[el].style.color = 'grey'
};

console.log(array)


