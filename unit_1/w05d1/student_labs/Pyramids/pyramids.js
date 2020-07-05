const $addTriangle = () => {
    const $triangle = $('<div>').addClass('triangle')
    $('.container').append($triangle)
}
const $breakLine = () => {
    const $break = $('</br>')
    $('.container').append($break)
}

const $addRow = () => {
    const $div =$('<div>').addClass('row')
    $('.container').append($div)
}

const $loop =(rows) => {
    for (let i=1; i<=rows; i++) {
        for (let j = 0; j<i; j++) {
        $addTriangle()}
        $breakLine()
        }
    };
$ (() => {
$loop(10)
});