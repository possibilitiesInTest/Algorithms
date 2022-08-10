// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair ='') {
    
    // break case: 
    if (n === row) {
        return;
    }

    // end of row case:
    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    // increment stair:
    const add = stair.length <= row ? '#' : ' ';
    // if(stair.length <= row) {
    //     stair += '#'; 
    //     } else {
    //         stair += ' ';
    //     }

    // recursive call to steps
    steps(n, row, stair+add);

}

module.exports = steps;


// function steps(n) {
//     for (let row = 0; row < n; row++){
//         let stair = '';

//     for (let column = 0; column < n; column++) {
//         if (column <= row) {
//             stair += '#';
//         } else {
//             stair += " ";
//         }
//     }
//     console.log(stair);
//     }
// }