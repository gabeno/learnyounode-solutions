// modular.js

/**
 *
Question:
=========
This problem is the same as the previous but introduces the concept of
modules. You will need to create two files to solve this.

Create a program that prints a list of files in a given directory,
filtered by the extension of the files. The first argument is the
directory name and the second argument is the extension filter. Print
the list of files to the console. You must use asynchronous I/O.

Your program must use a module to do most of the work. The module
must export a single function that takes three arguments: the
directory name, the filter string and a callback function.

The callback must return an error, and only an error, as the first
argument if one is passed from your call to `fs.readdir()`. If there
are no errors then the first argument to the callback must be null and
the second must be your filtered list of files in an array.

In the case of an error bubbling up to your original program file,
simply check for it and print an informative message to the console.

Hint:
-----
Create a new module by creating a new file that just contains your
directory reading and filtering function. To define a single function
export you assign your function to the `module.exports` object,
overwriting what is already there:

  module.exports = function (...) { ... }

Or you can use a named function and assign the name.

To use your new module in your original program file, use the
`require()` call in the same way that you `require('fs')` to load the
`fs` module. The only difference is that for local modules must be
prefixed with './'. So, if your file is named mymodule.js then:

  var mymodule = require('./mymodule.js')

The '.js' is optional here and you will often see it omitted.

You now have the `module.exports` object in your module assigned to
the `mymodule` variable. Since you are exporting a single function,
`mymodule` is a function you can call!

Also keep in mind that it is idiomatic to check for errors and do
early-returns within callback functions:

  foo(function (err, data) {
    if (err)
      return callback(err)

    ... // continue when no-error
  })

*/

var getFiles = require('./myfsmodule');

getFiles(process.argv[2], process.argv[3], function(err, files) {
  if (err)
    console.log(err);
  files.forEach(function(file) {
    console.log(file);
  });
});

// solution

var filterFn = require('./solution_filter.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
  
filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function (file) {
    console.log(file);
  })
});