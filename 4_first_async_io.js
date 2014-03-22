/*
 * Q: Write a program that uses a single asynchronous filesystem operation to
 *    read a file and print the number of newlines it contains to the console
 *    (stdout), similar to running 'cat file | wc -l'.
 *
 * NOTE:
 * -----
 * The full path to the file to read will be provided as the first
 * command-line argument.
 *
*/

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data) {
  // fs.readFile(file, 'utf-8', callback) can also be used
  if (err) throw err;
  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});