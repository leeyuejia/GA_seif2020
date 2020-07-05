
const height = 600;
const width = 600;
$(() => {
    $('#app').append(
        $('<div>')
            .addClass('container')
            .css({ width: width + 'px', height: height + 'px' })
    );

    const randomColor = () => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        return color;
    };

    const changeColor = event => {
        // $(event.target).addClass('pink');
        $(event.target).css('background', randomColor());
    };

    const calculateWidth = (containerWidth, containerHeight, numberOfSquares) => {
        return Math.floor(
            Math.sqrt((containerWidth * containerHeight) / numberOfSquares)
        );
    };

    const renderSquares = number => {
        console.log('squre is ' + calculateWidth(width, height, number));
        for (let i = 0; i < number; i++) {
            let $div = $('<div>')
                .addClass('square')
                .css({
                    width: calculateWidth(width, height, number) + 'px',
                    height: calculateWidth(width, height, number) + 'px'
                });
            $('.container').append($div);
        }
        $('.square').on('mouseover', changeColor);
    };

    $('form').on('submit', event => {
        $('.container').empty();
        const size = parseInt($('#input-box').val(), 10);
        renderSquares(size);
        event.preventDefault();
    });
});
