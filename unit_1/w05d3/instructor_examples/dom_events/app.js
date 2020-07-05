$(() => {

    const $btn = $('#btn');
    // console.log($btn);

    // const addText = () => {
    //     $('body').append('It seems as if it has been clicked!');
    // };

    const changeClass = () => {
        $('body').toggleClass('black');
    };

    $btn.on('click', changeClass);

    $('body').on('mousemove', (e) => {
        //$('body').append("It seems as if it has been moved!");
        console.log(e.clientX, e.clientY);
    });
});