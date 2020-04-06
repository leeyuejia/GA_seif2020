/*if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};*/


const $container = $('<div>').attr('id', 'container')
const $hogwarts = $('<h1>').text('Hogwarts')
const $james = $('<h2>').text('James')
const $house = $('<h3>').text('Gryffindor')
const $pet = $('<h4>').text('Owl').addClass('bird')
const $wand = $('<h5>').text('Night Moon')

const $array = [$hogwarts, $james, $house, $pet, $wand]
const $unOrderList = $('<ul>').attr('storage', 'trunk')
const $list = ['butter beer', 'Invisibility Cloak', 'magic map', 'time turner', 'leash', 'Bertie Boot\s Every Flavor Jelly Beans']
let $arrayList = []
for (element of $list) {
    $arrayList.push($('<li>').text(element))
};
$arrayList[$list.indexOf('Invisibility Cloak')].addClass('secret')
$arrayList[$list.indexOf('magic map')].addClass('secret')
$arrayList[$list.indexOf('time turner')].addClass('secret')
$arrayList[$list.indexOf('leash')].addClass('bird')
const $tableTitle = $('<h6>').text('Spring 2017')
const $table = $('<table>').attr('id', 'table')
const $thead = $('<thead>')

function $createTf() {
    return $('<tr>')
};

let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let lessons = ['Herbology', 'Divination', 'History of Magic', 'Charms', 'Potion', 'Transfiguration', 'Off day']

const timeTable = () => {
    for (let i = 1; i <= day.length; i++) {
        $($thead).append($('<tr>'))
        $(`tr:nth-child(${i + 1})`).append($('<td>').text(day[i - 1]))
        $(`tr:nth-child(${i + 1})`).append($('<td>').text(lessons[i - 1]))
    }
}


$(() => {
    $('body').append($container)
    $('#container').append($array)
    $('#container').append($unOrderList)
    $('ul').append($arrayList)
    // Year 4
    $('#container').append($tableTitle)
    $('#container').append($table)
    $('#table').append($thead)
    $($thead).append($('<tr>'))
    $('tr').append($('<th>').text('Day'))
    $('tr').append($('<th>').text('Classes'))
    timeTable()
    // Year 5
    // $('h5').hide()
    $('li:nth-child(1)').hide()
    $('h5').text('Night Dragon String').addClass('wand')
    .css('background-color','rgb(230,245,255)')
    const $mission = $('<div>').attr('id','mission')
    $('#container').append($mission)
    const $title = $('<p>').text('Mission: Spy on Voldemort').attr('id','mission title')
    $mission.append($title)
    // $('h4').appendTo($mission)

    //Year 6
    $('.secret').hide(5000,'swing')
    $('.secret').delay(2000).show(3000)
    $arrayList[4].addClass('cabbage')
    $arrayList[4].removeClass('cabbage')


    console.log($container)
    console.log($hogwarts)
    console.log($arrayList[4])

})