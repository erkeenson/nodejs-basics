"use strict";

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
try {
  rl.on('line', function (line) {
    console.log(line.split('').reverse().join(''));
  });
} catch (error) {
  console.log(error);
}