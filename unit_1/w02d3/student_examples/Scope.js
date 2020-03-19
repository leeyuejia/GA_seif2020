// const item = 'spicy meatball';

// const exampleFunction = () => {
// 	console.log(item + " within function");
// }

// exampleFunction();

// const setItem = () => {
// 	const item = 'spicy meatball';
// 	return item;
// }

// const getItem = () => {
// 	return item;
// }

// console.log(getItem());

const returnName = () => {
    return "Matt"
  }
  const returnGreeting = () => {
    return "oh hai, " + returnName()
  }
  console.log(returnGreeting());

  const checkSquare = (i) => {
      if (Math.sqrt(i) % 1 == 0) {
      return true } else {
          return false
      }
  };

   const checkToLimit = (limit) => {
      for (let i=1; i<= limit; i++) {
          if (checkSquare(i) == true)
          console.log(i)
      }
    };

checkToLimit(150);

const age = 21;
let message = '';

if (age < 21) {
	message = 'You cannot buy the beer';
} else {
	message = 'You can buy the beer';
}

console.log(message);
          
        
