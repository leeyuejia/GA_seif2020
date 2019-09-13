$(()=>{
    const changeColor = (e)=>{
        $(e.target).addClass('pink');
    }
    for (var i = 0; i < 1000; i++) {
        const square = $('<div class="square">')
            .appendTo('body')
            .on('mouseover', changeColor);
    }
});
