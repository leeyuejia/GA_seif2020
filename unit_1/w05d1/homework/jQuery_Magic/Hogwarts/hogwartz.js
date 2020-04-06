/*if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};*/


  const $container = $('<div>').attr('id', 'container')
  const $hogwarts = $('<h1>').text('Hogwarts')
  const $james = $('<h2>').text('James')
  const $house = $('<h3>').text('Gryffindor')
  const $pet =$('<h4>').text('Owl')
  const $wand = $('<h5>').text('Night Moon')
  const $array = [$hogwarts, $james, $house, $pet, $wand]
  $(() => {
      $('body').append($container)
      $('#container').append($array)
console.log($container)
console.log($hogwarts)
  })