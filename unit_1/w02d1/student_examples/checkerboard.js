// Set a checkerboard size to a variable

// const boardSize = 8;
// Now, using what you know about control flow, build a checkerboard

//  # # # #
// # # # #
//  # # # #
// # # # #
// You should be able to change the variable boardSize and generate a larger or smaller grid

// const boardSize = 20;
// Should now generate:

//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #
//  # # # # # # # # # #
// # # # # # # # # # #

const boardSize = 8;
const board = [];
let line = [];

for (let row = 0; row < boardSize / 2; row++) {
    for (let col = 0; col < boardSize; col++) {
        !(row % 2) && col % 2 && line.push('#');
        !(row % 2) && !(col % 2) && line.push(' ');
        row % 2 && !(col % 2) && line.push('#');
        row % 2 && col % 2 && line.push(' ');
    }
    board.push(line);
    line = [];
}

board.forEach(row => console.log(row.join('')));

