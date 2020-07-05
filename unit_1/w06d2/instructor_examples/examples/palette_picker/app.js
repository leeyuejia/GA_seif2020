const $colorPalette = $('#color-palette');
const $myPalette = $('#my-palette');
const $generate = $('#generate');

const addColor = event => {
    const color = $(event.currentTarget).css('background');
    console.log(color);
    const $square = $('<div>').addClass('square').css('background', color);
    $myPalette.append($square);
};

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
};

const makePalette = () => {
    $colorPalette.empty();
    for (let i = 0; i < 150; i++) {
        const $square = $('<div>')
            .addClass('square')
            .css('background', randomColor);

        $colorPalette.append($square);
    }
    $('.square').on('click', addColor);
};

$generate.on('click', makePalette);
// const addColor = event => {
//     const color = $(event.currentTarget).css('background-color');

//     const $square = $('<div>');
//     $square.addClass('square');
//     $square.css('background-color', color);

//     $myPalette.append($square);
// };

// const randomColor = () => {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
//     return color;
// };

// const makePalette = () => {
//     $colorPalette.empty();

//     for (let i = 0; i < 150; i++) {
//         const $square = $('<div>')
//             .addClass('square')
//             .css('background-color', randomColor());
//         $colorPalette.append($square);
//     }
//     $('.square').on('click', addColor);
// };

// $generate.on('click', makePalette);
