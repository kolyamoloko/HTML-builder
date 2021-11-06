const folder = './03-files-in-folder/secret-folder';
const fs = require('fs');
const path = require('path');
let sizeFile = {};

fs.readdir(folder, (err, files) => {
    if (err){
        throw err;
    }

  files.forEach(file => {
    let format = path.extname(file).slice(1);
    let ind = file.lastIndexOf('.');
    fs.stat(folder + '/' + file, function ( err, stats) {
      if (!err) {
        if (stats.isFile()) {
          sizeFile = stats;
          file = file.slice(0, ind);
          console.log(file + ' - ' + format + ' - ' + sizeFile.size + 'b');
        }
      }
    });
  });
});