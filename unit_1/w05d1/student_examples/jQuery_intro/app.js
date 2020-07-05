$(() => {
  //jquery code runs here
  const $div = $('<div>');
  $('body').append($div)
  $div.addClass('meat');
  const $h3 = $('<h3>').text('Deer');
  $div.append($h3);

  const $div1 = $('<div>');
  $div1.addClass('fruit');
  $('body').append($div1);
  const $h31 = $('<h3>').text('food here')
  $div1.append($h31);

  const $div3 = $('<div>');
  const $h3_1 = $('<h3>').text('Milk');
  $div3.addClass('dairy');
  $('body').append($div3)
  $div3.append($h3_1);
  //Slowly disappear
  // $div.hide('slow');

  const img = $('<img>');
  img.attr('title', 'Food image')
  img.attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
  $('body').prepend(img);

  const $divs = $('div');
  console.log($divs)
  console.log($divs.eq(2).children());
  $divs.eq(2).children().text('Something Else');

  const $h3_2 = $('<h3>').text('wine');
  $divs.eq(1).children().remove();
  $divs.eq(1).append($h3_2);

  $("div").css("border","0.5em solid black");
});
