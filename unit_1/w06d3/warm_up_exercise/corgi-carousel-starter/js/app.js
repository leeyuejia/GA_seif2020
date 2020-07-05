console.log('corgi carousel connected to app.js!');

$(() => {
    let currentImgIndex = 0;
    let highestIndex = $('.carousel-images').children().length - 1
    $('.next').on('click', () => {
        console.log(currentImgIndex)
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex < highestIndex) {
            currentImgIndex++
        } else {
            currentImgIndex = 0
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
        
    })
    $('.previous').on('click', () => {
        console.log(currentImgIndex)
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex > 0) {
            currentImgIndex --
        } else {
            currentImgIndex = highestIndex
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block') 
    })
})