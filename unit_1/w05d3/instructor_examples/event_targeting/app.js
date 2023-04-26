console.log('Oh hey, I remember something like this');


let handOfCards = [];

const clickCard = (card) => {
    console.log('card is', card);
    console.log('hands on deck', handOfCards)
    // need to push something to handOfCards
    handOfCards.push(card);
    console.log($(handOfCards[0]).children().eq(1).text());

    if (handOfCards.length === 2) {
        console.log('checking', handOfCards);
        console.log($(handOfCards[0]).children().eq(1).text());
        if($(handOfCards[0]).children().eq(1).text() === $(handOfCards[1]).children().eq(1).text()) {
            console.log('we have matching cards');
            $(handOfCards[0]).hide('slow');
            $(handOfCards[1]).hide('slow');
            handOfCards = [];
        }
        else {
            console.log('we dont have matching cards');
            setTimeout(()=> {
                $(handOfCards[0]).toggleClass('card-back');
                $(handOfCards[1]).toggleClass('card-back');
                handOfCards = [];
            },2000)
        }
    }
};

$(() => {
    // code runs when document is ready or dom is loaded
    console.log('ready')
    $('.card').on('click', (event) => {
        console.log(event);
        // console.log(event.currentTarget);
        // console.log($(event.currentTarget));
        if($(event.currentTarget).hasClass('card-back')) {
            $(event.currentTarget).toggleClass('card-back');
            clickCard(event.currentTarget);
        } else {
            $(event.currentTarget).toggleClass('card-back')
        }
    });

    // $('.card').on('click', () => {
    //     $('.card').toggleClass('card-back');
    // });

    // $('#card-2').on('click', () => {
    //     $('.card').toggleClass('card-back');
    // });

    // $('#card-3').on('click', () => {
    //     $('.card').toggleClass('card-back');
    // });

    // $('#card-4').on('click', () => {
    //     $('.card').toggleClass('card-back');
    // });
});