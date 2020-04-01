$(() => {
    const buildDivs = (numDivs) => {
        for(let i = 0; i < numDivs; i++){
            const $div = $('<div>').addClass('square');
            $('#container').append($div);
        }
        $('.square').on('mouseover', (event) => {
            $(event.target).css('background', 'pink');
        });
    }

    $('form').on('submit', (event) => {
        event.preventDefault();
        const userChoice = $('#input-box').val();
        buildDivs(userChoice);
    });
})
