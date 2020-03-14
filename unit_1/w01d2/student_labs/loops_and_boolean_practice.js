// Create a variable called fave_day and assign it to your favorite day of the week.
// Create a loop that uses the variable fave_day that you created. Make a loop that will print I like the weekend if fave_day equals Saturday or Sunday. 
// The loop should print Give me a good 'ol weekday if fave_day is equal to 
// Monday, Tuesday, Wednesday, Thursday, or Friday.
// Think about outliers: What if I had entered "September" in fave_day? What would happen? Add something to your code to handle that situation.

let fave_day = 'September';
let found = false;
let everyday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < everyday.length; i++) {
    if (fave_day === everyday[i]) {
        if (fave_day === 'Monday' || fave_day === 'Tuesday' ||
            fave_day === 'Wednesday' || fave_day === 'Thursday' ||
            fave_day === 'Friday') {
            console.log('Give me a good \'ol weekday');
        } else {
            console.log('I like the weekend');
        }
        found = true;
    }
}

if(!found) {
    console.log('You input is invalid');
}