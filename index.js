//1st way
// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {

//     // sum = sum+(process.argv[i]); this treats sum as an array and pushes (process.argv[i]); to the array!!!???!!!
//     sum += Number(process.argv[i]);
// }
// console.log(sum);
// console.log(process.argv);

// NOTE->Here in for loop for (i = 2; i < process.argv.length; i++) loop begins with 2 because first two elements in process.argv array always is ['path/to/node.exe', 'path/to/js/file', ...]
// Converting to number Number(process.argv[i]) because elements in process.argv array always is string

//2nd way


const argument = process.argv.slice(3);
//slice(3)==the argument index is 3 or going forward//
//do console.log(process.arvg) more clearity//

if (process.argv[2] === "add") {
  const sum = argument.reduce((acc, val) => acc + Number(val), 0);
  console.log(sum);
}
if (process.argv[2] === "sub") {
  const sub = argument.reduce((acc, val) => acc - Number(val));
  console.log(sub);
}
if (process.argv[2] === "mul") {
  const mul = argument.reduce((acc, val) => acc * Number(val));
  console.log(mul);
}
if (process.argv[2] === "divide") {
  const divide = argument.reduce((acc, val) => acc / Number(val));
  console.log(divide);
}
if (process.argv[2] === "sin") {
  console.log(Math.sin(process.argv[3]));
}
if (process.argv[2] === "cos") {
  console.log(Math.cos(process.argv[3]));
}
if (process.argv[2] === "tan") {
  console.log(Math.tan(process.argv[3]));
}
if (process.argv[2] === "random") {
  const { randomInt } = require("node:crypto");
  const n = randomInt(0,100);
  console.log(n);
}


