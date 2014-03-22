/*
 * Q: Write a program that uses a single synchronous filesystem operation to
 *    read a file and print the number of newlines it contains to the console
 *    (stdout), similar to running 'cat file | wc -l'.
 *
 * NOTE:
 * -----
 * The full path to the file to read will be provided as the first
 * command-line argument.
 *
*/

// read a file synchronously
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);

var lines = contents.toString().split('\n').length - 1;
// subtract 1 to normalize the array length.
// convert from cardinal to ordinal.

console.log(lines);

// you can avoid the .toString() by passing 'utf-8' as the second argument to
// readFileSync, then you will get a string!

// fs.readFileSync(process.argv[2], 'utf-8').split('\n').length - 1
