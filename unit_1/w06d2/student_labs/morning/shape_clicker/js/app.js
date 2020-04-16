console.log('shape clicker js file is connected');

//remember to set up your window onload!
$(() => {
    let clickNum = 0
    const shapeArray = ['circle','square','triangle-down', 'octagon', 'heart']
    const iteration = () => {
        clickNum ++;
        if (clickNum === 1) {
            $(event.target).attr('class', shapeArray[0])
        }
        if (clickNum === 2) {
            $(event.currentTarget).attr('class', shapeArray[1])
        }
        if (clickNum === 3) {
            $(event.currentTarget).attr('class', shapeArray[2])
        }
        if (clickNum === 4) {
            $(event.currentTarget).attr('class', shapeArray[3])
        }
        if (clickNum === 5) {
            $(event.currentTarget).attr('class', shapeArray[4])
        }
        if (clickNum === 6) {
            $(event.currentTarget).attr('class', shapeArray[5])
        }
        if (clickNum === 7) {
            $(event.currentTarget).attr('class', 'triangle')
            clickNum = 0;
        }
    }

    $('.triangle').on('click', iteration)
});
