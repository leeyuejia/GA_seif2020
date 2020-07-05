// console.log('stranger things are coming');

document.querySelector('h1').innerText = 'Welcome to the Upside Down';

const image = document.querySelector('img');

image.style.display = 'none';

image.style.display = 'block';

image.style.filter = 'grayscale(100%)';

image.style.width = '25%';

image.style.filter = '';


const eggos = document.createElement('img');

document.querySelector('.container').appendChild(eggos);

eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg');

eggos.style.width = '100%';

eggos.remove();


document.querySelectorAll('li')[0].innerText = 'Demo Dog Hangout';

document.querySelectorAll('li')[4].style.color = 'hotpink';

document.querySelectorAll('li')[3].remove();
