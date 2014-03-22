/*
 * Q: Write a program that accepts one or more numbers as command-line
 *    arguments and prints the sum of those numbers to the console (stdout).
 *
 * NOTE:
 * -----
 * process object has an argv property which is an array containing complete
 * command line
 * ['node', 'path_to_program', ['supplied args']]
*/

//console.log( process.argv.slice(2) );

function babySteps(args) {
  var args = process.argv.slice(2);
  var sum = 0;

  if (args.length) {
    sum = args.reduce(function(a, b) {
      return +a + +b;
    });
  }

  res = (args.length == 0) ? " " : sum + "";
  console.log(res);
}

babySteps(process.argv);

// official solution

var result = 0;
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i]);

console.log(result);