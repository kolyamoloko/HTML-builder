const fs = require('fs');
const folder = './04-copy-directory/files';
const newFolder = './04-copy-directory/files-copy';

fs.mkdir(`${newFolder}`, { recursive: true }, () => {});

fs.readdir(folder, (err, files) => {
    if (err){
        throw err;
    }
  files.forEach(file => {
    fs.copyFile(folder + '/' + file, newFolder + '/' + file, function () {});
  });
  console.log('files copy');
});

fs.readdir(newFolder, (err, files) => {
    if (err){
        throw err;
    }
  files.forEach(file => {

    fs.stat(folder + '/' + file, function ( err) {
      if (err) {
        fs.unlink(newFolder + '/' + file, function () {});
      }
    });
  });
});