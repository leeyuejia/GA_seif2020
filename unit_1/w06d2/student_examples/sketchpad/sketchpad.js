console.log('loaded and live')

const width = 600;
const height = 600;

$(() => {
    $('.container').css({ width: width + "px", height: height + "px" })

    const randomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`
    }

    const calculateLength = (length, breadth, num) => {
        return Math.floor(Math.sqrt((length * breadth) / num)
        );
    };

    const changeColor = (event) => {
        // $(event.currentTarget).addClass('pink');
        $(event.currentTarget).css('background', randomColor());
    }
    const renderSquare = (num) => {
        // console.log('squre is ' + calculateWidth(width, height, number));
        $('.container').empty();
        for (let i = 0; i < num; i++) {
            $square = $('<div>').addClass('square').css({
                width: calculateLength(width, height, num) + 'px',
                height: calculateLength(width, height, num) + 'px'
            })
            $('.container').append($square);
        }
        $('.square').on('mousedown mouseover', changeColor);
    };

    $('form').on('submit', event => {
        const inputValue = parseInt($('#input-box').val());

        renderSquare(inputValue)
        console.log(inputValue);
        event.preventDefault()
        $(event.currentTarget).trigger('reset');
    })
});