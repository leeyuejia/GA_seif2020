// create 3 array
let num1 = []
let num2 = []
let space = true;
let operator = []
let sum = []
// each number u click, u push the value to num,
// click operator, then flatten array num and concaenate them into one variable (num1Sum)
// number clicked after operator, push the value to num2 array. 
// click equal, will flatten both array concaenate them and assign them into variable. then variable1 + operator + variable2
// cancel function will empty the currentTarget
let numberCode = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'Numpad0'];
let operatorCode = ['NumpadAdd', 'NumpadSubtract', 'NumpadDivide', 'NumpadMultiply']
let deleteKey =
    $(() => {
        console.log('hi')

        $('body').on('keydown', event => {
            //number pad can be pressed down
            if (numberCode.includes(event.code) && space) {
                console.log($('.number').eq(event.key - 1))
                $('.number').eq(event.key - 1).css('box-shadow', '-5px -5px 1px black')
                num1.push(event.key)
                let num1Argument = parseInt(num1.join(''))
                $('input').attr('value', `${num1Argument}`)
                //num1 join as a string and parse into an integer
                console.log(num1Argument)
            }
            else if (numberCode.includes(event.code) && space === false) {
                num2.push(event.key)
                let num2Argument = parseInt(num2.join(''))
                $('input').attr('value', `${num2Argument}`)
                console.log(event.code + "and" + event.key)
                console.log(num2Argument)
            }
            //operator key can be pressed down
            else if (operatorCode.includes(event.code)) {
                let selected = $('.operator').hasClass(event.code)
                console.log(event.key + "is pressed and the selected is" + selected)
                $(`.${event.code}`).css('box-shadow', '-5px -5px 1px black')
                operator.push(event.key)
                sum.push(num1Argument);
                space = false;
                //append num1Arguement into 1 div in the screen
                console.log(sum)
                console.log(operator)
            }
            else
                console.log('key is wrong')
        })
        $('body').on('keyup', event => {
            //Number pad can be pressed up
            if (numberCode.includes(event.code)) {
                console.log($('.number').eq(event.key - 1))
                $('.number').eq(event.key - 1).css('box-shadow', '5px 5px 1px black')
                console.log(event.code + "and" + event.key)
            }
            //operator key can be pressed up
            else if (operatorCode.includes(event.code)) {
                let selected = $('.operator').hasClass(event.code)
                console.log(event.key + "is pressed and the selected is" + selected)
                $(`.${event.code}`).css('box-shadow', '5px 5px 1px black')
            }
            else
                console.log('key is wrong')
        })



    })