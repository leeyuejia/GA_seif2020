/*if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};*/


  const $container = $('<div>').attr('id', 'container')
  const $text = $('<h1>').text('Hogwarts')
  
  $(() => {
console.log($container)
console.log($text)
  })