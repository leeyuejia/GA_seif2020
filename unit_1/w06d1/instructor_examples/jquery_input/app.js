// const list = [];

// const render = () => {
//     $('ul').append('<li>' + list[list.length - 1] + '</li>');
//     $('li').on('click', event => {
//         $(event.currentTarget).css('text-decoration', 'line-through');
//     });
// };

// $('form').on('submit', event => {
//     const inputValue = $('#input-box').val();
//     list.push(inputValue);

//     event.preventDefault();
//     $(event.currentTarget).trigger('reset');

//     render();
// });

const list = [];
$(() => {
    // $('#submit-btn').on('click', (event) => {
    //     const inputValue = $('#input-box').val();
    //     list.push(inputValue);
    //     console.log(list);
    //     event.preventDefault();
    // });

    const render = () => {
        $('ul').append('<li>' + list[list.length - 1] + '</li>');
        $('li').on('click', (event) => {
            $(event.currentTarget).css('text-decoration', 'line-through');
        });
    };

    $('form').on('submit', (event) => {
        console.log('Form submitted');
        const inputValue = $('#input-box').val();
        list.push(inputValue);
        console.log(list);
        $(event.currentTarget).trigger('reset');
        event.preventDefault();

        render();
    });
});
