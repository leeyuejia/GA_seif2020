$(() => {
    const getRandomColor = () => {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        return 'rgb('+red+','+green+','+blue+')';
    }

    for(let i = 0; i < 150; i++){
        const $square = $('<div>').addClass('square').attr('id', 'square'+i).css('background', getRandomColor());
        $('#colors').append($square);
    }
    $('.square').on('click', (event) => {
        // console.log($('body').attr('css'));
        const chosenBackgroundColor = $(event.currentTarget).css('background-color');
        const $newDiv = $('<div>').addClass('square').css('background-color',chosenBackgroundColor);
        $newDiv.appendTo('#choices');
        // $(event.currentTarget).appendTo('#choices');
        // console.log($(event.currentTarget));
        // $('#choices').append(event.currentTarget);
    });

});
