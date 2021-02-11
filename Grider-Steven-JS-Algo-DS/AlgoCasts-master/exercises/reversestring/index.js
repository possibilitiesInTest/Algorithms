// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   if (str.length === 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

function reverse(str) {
  debugger;
  str.split("").reduce((rev, char) => char + rev, "");
}

reverse("cats");

module.exports = reverse;

// function reverse(str){
//     let reversed = '';
//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
