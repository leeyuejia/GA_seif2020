

// Vanilla JS - makes totally different object than jQuery
// const div = document.createElement('div')
// console.log(div);

// Document on ready - waits for web page to load before calling the functions inside
$(() => {
  // creating a div
  const $div = $('<div>');
  $div.addClass('meat');

  // create an h3 element with text inside of it
  const $h3 = $('<h3>');
  $h3.text('Ostrich');
  $div.append($h3);

  const $div2 = $('<div>').addClass('fruit');
  const $h32 = $('<h3>').text('Fig')
  $div2.append($h32);


  // selecting body element
  const $body = $('body');
  // console.log($body);

  // appending our created div to the body
  $body.append($div);
  $body.append($div2);

  // Query for the divs
  const $divs = $('div');
  // console.log($divs);

  // $divs.hide('slow');

  const $meat = $('.meat')
  // console.log($meat);

  const $image = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D').attr('alt', 'cheese n stuff');

   $body.prepend($image);

   const $thirdDiv = $divs.eq(2);
   $thirdDiv
    .children()
    .text('Kohlrabi')
   // console.log($thirdDiv);

   $body.css('border', '1em solid black')

}); // this closes the document on ready
