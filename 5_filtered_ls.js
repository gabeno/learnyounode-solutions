// filtered_ls.js

/**

Question:
=========

Create a program that prints a list of files in a given directory,
filtered by the extension of the files. You will be provided a
directory name as the first argument to your program (e.g.
'/path/to/dir/') and a file extension to filter by as the second
argument.

For example, if you get 'txt' as the second argument then you will
need to filter the list to only files that end with .txt.

The list of files should be printed to the console, one file per line.
You must use asynchronous I/O.

Note:
-----

fs.readdir(path, callback)

Asynchronous readdir(3). Reads the contents of a directory.
The callback gets two arguments (err, files) where files is an array of 
the names of the files in the directory excluding '.' and '..'.

 */

var fs = require('fs'),
  path = require('path');

function print_dir(dirpath, ext) {
  fs.readdir(dirpath, function(err, list) {
    if (err) console.log(err);
    
    var filtered = list.filter(function(file) {
      return path.extname(file) === '.' + ext;
    }).map(function(file) {
      console.log(file);
    });
  });
}

print_dir(process.argv[2], process.argv[3]);

// Official Solution

var fs = require('fs');
var regex = new RegExp('\\.' + process.argv[3] + '$');
  
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (regex.test(file))
      console.log(file)
  })
});
