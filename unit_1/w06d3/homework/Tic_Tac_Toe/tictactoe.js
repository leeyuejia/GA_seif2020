console.log('hi')

$(() => {
    console.log('hi')
    const shape = ['img/cross.png', 'img/square.png'];

    //click count, even number is square, odd number is circle
    let clickCount = 0;
    const renderShape = (event) => {
        clickCount++;
        if (clickCount >= $('.block').length) {
            renderCross(event)
            checkDraw();
        }
        if (clickCount % 2 !== 0 && clickCount < $('.block').length) {
            renderCross(event)
            checkAlign('cross-shape')
        }
        else if (clickCount % 2 === 0 && clickCount < $('.block').length) {
            renderSquare(event)
            checkAlign('square-shape')
        }
    }
    // player X win
    let pointX = 0
    const playerXWin = () => {
        alert('player X has won this round and gain 1 point')
        //player X gain one point
        pointX++
        $('.player').eq(0).text(`playerX = ${pointX}`)
        console.log($('.player').eq(0).text())
    }

    //player Square win
    let pointSq = 0
    const playerSqWin = () => {
        alert('player Sq has won this round and gain 1 point')
        //player X gain one point
        let pointSq = 0
        pointSq++
        $('.player').eq(1).text(`playerSq = ${pointSq}`)
    }
    //draw game
    let round = 1;
    const checkDraw = () => {
        if (checkAlign('cross-shape') == false || checkAlign('square-shape') == false) {
            alert('Game is draw')
        }
    };

    //Play Again. Point system remain, board reset, click count back to zero. 
    const playAgain = () => {
        round++;
        alert(`Round ${round}`);
        $('h1').eq(1).text(`Round: ${round}`)
        $('.block').empty();
        clickCount = 0;
    }

    //reset game
    const resetGame = () => {
        let result = confirm('Are you sure you want to reset?')
        if (result) {
            location.reload()
        };
    };





    //click to add square
    const renderSquare = (event) => {
        $square = $('<img>').addClass('square-shape').attr('src', shape[1]);
        $(event.currentTarget).append($square);
        console.log(event.currentTarget)
        console.log($(event.currentTarget).children())
        if (checkAlign('square-shape')) {
            playerSqWin()
        }
    }
    //click to add circle
    const renderCross = (event) => {
        $cross = $('<img>').addClass('cross-shape').attr('src', shape[0]);
        $(event.currentTarget).append($cross);
        console.log(event.currentTarget)
        console.log($(event.currentTarget).children())
        if (checkAlign('cross-shape')) {
            playerXWin()
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
        } else return false;
    }
    $('.block').on('click', renderShape)
    $('.reset-button').on('click', resetGame)
    $('.play-again').on('click', playAgain)
})