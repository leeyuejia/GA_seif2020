// const text = (parameter) => {
//     parameter();
// };

// const greeting = () => {
//     console.log('hi')
// }

// text(greeting);

// const foo = (param, param2) => {
//     param(param2);
// }
// const bar = (param) => {
//     console.log(param);
// }
// foo(bar, 'hi');

const foo = (param, param2) => {
    param(param2, 'hello');
}
// const bar = (param, param2) => {
//     console.log(param2);

const baz = (param) => {
    console.log(param.toUpperCase());
}
// foo(bar, 'hi');
foo(baz, 'hello')

//Electric Mixer

function electricMixer (attachment) {
    console.log('the mixer is now: ' + attachment())
}
function spiralizer () {
    return'spiralizing';
}
function slicerDicer () {
    return 'slicin and dicin';
}
function beatEgg () {
    return 'beating eggs'
}
const mash = () => {
    return 'mashing'
}
electricMixer(spiralizer);
electricMixer(slicerDicer);
electricMixer(beatEgg);
electricMixer(mash);


//setInterval and setTimeout
const counter = (n) => {
    console.log(n);
    setTimer(counter, 1000, n + 1)
};
let counterA = 1;
let interval;

interval = setInterval(() => {
console.log(counterA);
counterA ++;
if (counterA ===5) clearInterval(interval);
}, 1000);

// counter(0);

function wordReverse (words) {
    return words.split(' ').reverse().join(' ')
};
function toUpperCase (words) {
    return words.toUpperCase()
};
function repMaster (words , callback) {
    console.log(callback(words) + 'proves that I am the rep Master')
};

repMaster(" Never give your heart to a blockhead ", wordReverse);
repMaster("I finished this practice", toUpperCase);
