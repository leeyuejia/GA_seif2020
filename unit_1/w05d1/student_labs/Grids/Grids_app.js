const $breakLine = () => {
    const $break = $('</br>')
    $('body').append($break)
}
const creatrRow = () => {}
const $redbox = () => {
    const $div = $('<div>');
    $div.addClass('division')
    $('body').append($div)
    $div.css('background', 'red')
        .css('width', '30px')
        .css('height', '30px')
        .css('margin', '0px')
        .css('display', 'inline-block')
};

const $blackbox = () => {
    const $div = $('<div>');
    $div.addClass('division' + "2")
    $('body').append($div)
    $div.css('background', 'black')
        .css('width', '30px')
        .css('height', '30px')
        .css('margin', '0px')
        .css('display', 'inline-block')
};



$(() => {
    // for (let i = 1; i <= 64; i++) {
    //     if (i%2 == 0) {
    //         $redbox()
    //     } if (i%2 != 0) {
    //         $blackbox()
    //     }
    //      if (i%8 ==0) {
    //         $breakLine()
    //     }
    // };

    for (let row = 1; row <= 8; row++) {
        if (row % 2 == 0) {
            for (let column = 1; column <= 8; column++) {
                if (column % 2 == 0) {
                    $redbox()
                }
                if (column % 2 !== 0) {
                    $blackbox()
                } if (column % 8 == 0) {
                    $breakLine()
                }
            }
        }
        if (row % 2 !== 0) {
            for (let column = 1; column <= 8; column++) {
                if (column % 2 == 0) {
                    $blackbox()
                }
                if (column % 2 !== 0) {
                    $redbox()
                }
                if (column % 8 == 0) {
                    $breakLine()
                }
            }
        }
    };

});

// create a main division
// create a sub-division with class row then to a loop of rows
// then create another sub-division with class row after finishing previous loop and loop again. 
