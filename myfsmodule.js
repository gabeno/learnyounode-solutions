// myfsmodule.js

var fs = require('fs');

module.exports = function(dirPath, extension, callback) {
  var fileList = [],
    regex = new RegExp('\\.' + extension + '$');

  fs.readdir(dirPath, function(err, list) {
    if (err)
      return callback(err);

    list.forEach(function(file) {
      if (regex.test(file))
        fileList.push(file);
    });
    return callback(null, fileList);
  });
};

// solution

module.exports = function (dir, filterStr, callback) {
  var fs = require('fs')
  var regex = new RegExp('\\.' + filterStr + '$')

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return regex.test(file)
    })

    callback(null, list)
  })
}
