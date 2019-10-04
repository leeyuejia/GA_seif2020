// console.log('corgi carousel connected to app.js!');

$(() => {

  // current image counter
  let currentImgIndex = 0;
  // counts how many images there are in the carousel
  const numOfImages = $('.carousel-images').children().length - 1;
  console.log(numOfImages);

  // next button
  $('.next').on('click', () => {
    // we want current img to hide
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    // increment currentImgIndex
    if (currentImgIndex < numOfImages) {
      currentImgIndex ++;
    } else {
      currentImgIndex = 0;
    }
    // we want the next img to show
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  // previous button
  $('.previous').on('click', () => {
    // we want the current img to hide
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    // decrement currentImgIndex
    if(currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImages;
    }
    // we want the previous img to show
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
  })
})
