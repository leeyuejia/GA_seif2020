$(()=>{
    const addColor = (event) => {
        const color = $(event.target).css('background-color');

        const $square = $('<div>');
        $square.addClass('square');
        $square.css('background-color', color);

        $myPalette.append($square);
    }

    const makePalette = () =>{
        $colorPalette.empty();
        for(let i = 0; i < 150; i++){
            const $square = $('<div>');
            $square.addClass('square');

            // const randHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            const randHex = 'rgb('+red+','+green+','+blue+')';
            $square.css('background-color', randHex);
            $square.on('click', addColor);

            $colorPalette.append($square);
        }
    }

    const $colorPalette = $('#color-palette');
    const $myPalette = $('#my-palette');
    const $generate = $('#generate');

    $generate.on('click', makePalette);
})
