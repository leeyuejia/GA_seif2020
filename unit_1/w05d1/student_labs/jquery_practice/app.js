const $topContainer = $('<div>');
$topContainer.attr('id', 'top-container')
const $topH1 = $('<h1>').text('Trois couleurs: rouge,blanc,et blue')
const $firstClass = $('<div>')
const $secondClass = $('<div>')
const $thirdClass = $('<div>')
$firstClass.addClass('couleur')
$secondClass.addClass('couleur')
$thirdClass.addClass('couleur')

const $bottomContainer = $('<div>')
$bottomContainer.attr('id', 'bottom-container')
const $bottomH1 = $('<h1>').text('Lumpy Space Princess')
const $imgContainer = $('<div>')
$imgContainer.attr('id', 'img-container')
const $lumpyPicture = $('<img>')
$lumpyPicture.attr('src', 'https://www.autostraddle.com/wp-content/uploads/2014/09/Lumpy-Space-Princess-adventure-time-with-finn-and-jake-25461817-800-575.jpg')
const $hereText = $('<h1>').text('the ice king waz here');

$(() => {
    //appending top container to html body structure
    $('body').append($topContainer)
    $topContainer.append($topH1, $firstClass, $secondClass, $thirdClass)
    $('div', 'div').css('background', 'dimgrey')
    $('div', 'div').css('width', '200px')
    $('div', 'div').css('height', '200px')
    $('div', 'div').css('display', 'inline-block')
    // $('.couleur').css('background', 'dimgrey')
    // $('.couleur').css('width', '200px')
    // $('.couleur').css('height', '200px')
    // $('.couleur').css('display', 'inline-block')
    // $firstClass.addClass('rouge')
    // $secondClass.addClass('blanc')
    // $thirdClass.addClass('etBlue')
    const $divs = $('div');
    console.log($divs)
    $divs.eq(1).css('background', 'firebrick')
    $divs.eq(2).css('background', 'ivory')
    $divs.eq(3).css('background', 'cornflowerblue')
    // $('.rouge').css('background',' firebrick')
    // $('.blanc').css('background','ivory')
    // $('.etBlue').css ('background','cornflowerblue')

    //appending bottom container to html structure
    $('body').append($bottomContainer)
    $bottomContainer.append($bottomH1)
    $bottomContainer.append($imgContainer)
    $imgContainer.append($lumpyPicture)
    $topH1.text('Three colors: red, white, and blue')
    $divs.eq(2).css('background', 'black')
    $divs.eq(3).css('background', 'orange')
    //swap bottom container with top container
    $('body').prepend($bottomContainer)
    // change lumpt princess to ice king, title change to ice King
    $lumpyPicture.attr('src','https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/340?cb=20160405041324')
    $bottomH1.text('The Ice King')

    //remove the container
    $topContainer.fadeOut();
    $bottomContainer.fadeOut();
    $('body').append($hereText);
    $hereText.hide();

    const $clickMe = $('<button>').text('click me')
    $('body').prepend($clickMe)
    $('button').click(function() {
        $hereText.fadeIn(2000);
    });
})

/* To generate multiple box each with random colors and a number tagged to it
const generateQuilt = (numberOfSquares) => {
    for (let i=1; i <= numberOfSquares; i++) {
        console.log(i);
        makeSquare(i);
    }
};
const randomColorRGB = () => {
    const red = Math.floor( Math.random() * 255 );
    const green = Math.floor( Math.random() * 255 );
    const blue = Math.floor( Math.random() * 255 );
    return `rgb(${red}, ${green}, ${blue})`;
};
const makeSquare = (number) => {
    const $square = $('<div>').addClass('square');
    $square.css('background-color', randomColorRGB());
    $square.text(number);
    $square.attr('id', 'square' + number);
    $('.container').append($square);
};
$(() => {
    generateQuilt(1000);
});
*/
