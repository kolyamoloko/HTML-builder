const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const cssFolder = path.join(__dirname, 'styles');
const output = path.join(__dirname, 'project-dist', 'bundle.css');

const bundleCss = (input, output) => {

  const newFile = fs.createWriteStream(output);

  fs.access(input, (err) => {
    if (err) throw err;

    fsPromises.readdir(input, { withFileTypes: true })
      .then(data => {
        data.forEach(element => {
          if (!element.isFile() || path.extname(element.name) !== '.css') return;

          let content = fs.createReadStream(path.join(input, element.name), 'utf-8');
          content.on('data', (text) => newFile.write(text.trim() + '\n\n'));
        });
      })
      .catch(err => console.log(err));
  });
};

bundleCss(cssFolder, output);

module.exports = bundleCss;