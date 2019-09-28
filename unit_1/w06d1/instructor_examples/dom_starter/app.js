console.log("connected..");

const addH2 = () => {
    console.log("code is running");
    let $h2 = $('<h2>').text("Just getting started");
    $('body').prepend($h2);
}

const changeH2 = () => {
    $('h2').text("Getting warmed up")
}

const generateQuilt = (numberOfSquares) => {
    for (let i=1; i <= numberOfSquares; i++) {
        console.log(i);
        makeSquare(i);
    }
}

const makeSquare = (number) => {
    const $square = $('<div>').addClass('square')
    $square.css('background-color', randomColorRGB());
    $square.text(number);
    $square.attr('id', 'square-'+number);
    $('.container').append($square)
}

const randomColorRGB = () => {
    const red = Math.floor( Math.random() * 256 )
    const green = Math.floor( Math.random() * 256 )
    const blue = Math.floor( Math.random() * 256 )
    return `rgb(${red}, ${green}, ${blue})`
}

$(


    () => {
        // gets executed when document is ready
        addH2();
        generateQuilt(1000);
    }



)

// setTimeout(changeH2, 3000);