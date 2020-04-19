console.log('hi')

$(() => {
    console.log('hi')
    const shape = ['img/cross.png', 'img/square.png'];

    //click count, even number is square, odd number is circle
    let clickCount = 0;
    const renderShape = (event) => {
        clickCount++;
        if (clickCount >= $('.block').length) {
            alert('end of turn')
            clickCount = 0;
        }
        if (clickCount%2 !== 0 ) {
            renderCross(event)
            
        }
        else {
            renderSquare(event)
            checkAlign('square-shape')
        }
    }
    // player X win

    //player Square win

    //draw game

    //reset game



    //click to add square
    const renderSquare = (event) => {
        $square = $('<img>').addClass('square-shape').attr('src', shape[1]);
        $(event.currentTarget).append($square);
        console.log(event.currentTarget)
        console.log($(event.currentTarget).children())
    }
    //click to add circle
    const renderCross = (event) => {
        $cross = $('<img>').addClass('cross-shape').attr('src', shape[0]);
        $(event.currentTarget).append($cross);
        console.log(event.currentTarget)
        console.log($(event.currentTarget).children())
        if (checkAlign('cross-shape')) {
            alert('player X has won');
        }
    }
    //check shape alignment
    const checkAlign = (className) => {
        if ($('#square1').children().hasClass(className) && 
            $('#square2').children().hasClass(className) && 
            $('#square3').children().hasClass(className)) {
                return true;
            }
            else if ($('#square1').children().hasClass(className) &&
            $('#square4').children().hasClass(className) && 
            $('#square7').children().hasClass(className)) {
                return true;
            }
            else if ($('#square1').children().hasClass(className) &&
            $('#square5').children().hasClass(className) && 
            $('#square9').children().hasClass(className)) {
                return true;
            }
            else if ($('#square2').children().hasClass(className) &&
            $('#square5').children().hasClass(className) && 
            $('#square8').children().hasClass(className)) {
                return true;
            }
            else if ($('#square3').children().hasClass(className) &&
            $('#square5').children().hasClass(className) && 
            $('#square7').children().hasClass(className)) {
                return true;
            }
            else if ($('#square3').children().hasClass(className) &&
            $('#square6').children().hasClass(className) && 
            $('#square9').children().hasClass(className)) {
                return true;
            }
            else if ($('#square4').children().hasClass(className) &&
            $('#square5').children().hasClass(className) && 
            $('#square6').children().hasClass(className)) {
                return true;
            }
            else if ($('#square7').children().hasClass(className) &&
            $('#square8').children().hasClass(className) && 
            $('#square9').children().hasClass(className)) {
                return true;
            }else return false;
    }
    $('.block').on('click', renderShape)
})