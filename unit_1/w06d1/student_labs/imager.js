console.log('linked')
const link = $('body')
$(() => {
    let imageLinkOne = 'https://www.pinclipart.com/picdir/big/128-1284396_bubbles-powerpuff-girls-png-transparent-powerpuff-girls-bubbles.png'
    let imageLinkTwo = 'https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2011/08/400x400-bubbles-from-powerpuff-girls-1280x720.png'
    let imageLinkThree = 'https://www.writeups.org/wp-content/uploads/Bubbles-Powerpuff-Girls-Profile-a.jpg'
    let imageLinkFour = 'https://p1.hiclipart.com/preview/295/460/945/bubbles-powerpuff-girls-cartoon-network-professor-utonium-television-cartoon-network-arabic-blossom-bubbles-and-buttercup-video-video-games-png-clipart.jpg'
    let imageLinkFive = 'https://66.media.tumblr.com/e8b56e3f86a89515f8bd253f45790235/tumblr_o63xmmcr3U1sgu71qo1_400.jpg'
    let imageLinkSix = 'https://i.pinimg.com/originals/03/e4/c3/03e4c3682735ce571d45123dec7efb9a.png'

    let arrayImage =[imageLinkOne, imageLinkTwo ,imageLinkThree, imageLinkFour, imageLinkFive, imageLinkSix];

    
    const $startButton = $('<button>').text('Add Random Image')
    $startButton.css('width','100px');
    $startButton.css('height','100px');
    $startButton.css('background-color', 'grey');
    $startButton.css('cursor','pointer')
    $startButton.css('padding', '3px');

    $('.container').append($startButton)
  

    $startButton.on('click', () => {
            const $image = $('<img>').addClass('image').attr('src' , arrayImage[Math.floor(Math.random() * arrayImage.length)])
            $image.css('width', '100px');
            $image.css('height','100px');
            $image.css('border', '1px solid black');
            $('.container').append($image)
    })
});