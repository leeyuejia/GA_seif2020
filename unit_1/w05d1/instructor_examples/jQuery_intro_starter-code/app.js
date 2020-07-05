if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};


$(() => {
    //jQuery code goes here
    const jqDiv = $('<div>');
    // console.log(jqDiv);

    jqDiv.addClass('meat');
    //console.log("body:",$('body'));
    $('body').append(jqDiv);

    const h3 = $('<h3>').text('Fish');
    jqDiv.append(h3);

    const foodDiv = $('<div>').addClass('fruit');
    const foodH3 = $('<h3>').text("Apples");
    foodDiv.append(foodH3);

    $('body').prepend(foodDiv);

    const divs = $('div');

    console.log("third element of divs",divs[2]);
    console.log("third element of divs using eq",divs.eq(2));
    divs.eq(2).hide();
    // divs.hide('slow');
    // divs.show(10000);

    const meat = $('.meat');
    // meat.hide(10000, function() {
    //     alert("meat is gone!");
    // });

    // const milk = document.querySelector('#milk');
    // milk.style.display = "none";

    const milk = $('#milk');
    milk.hide();


    const img = $('<img>');
    img.attr("src","https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");

    img.attr("alt", "image of food");

    $('body').prepend(img);


    // Create a new $h3 element
    const newH3 = $('<h3>');

    // and add some text to it (ie. 'wine' or 'cheese' etc.)
    newH3.text("cheese");

    // Let's grab the 2nd div
    // and empty the contents of this div out
    // Next, append your new h3 element
    divs.eq(1).empty().append(newH3);

    $('body').css('border', '1em solid olive');

});