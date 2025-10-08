const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/heros');
const destination = path.resolve('dist/heros');
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}
fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        // eslint-disable-next-line function-paren-newline
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
      // eslint-disable-next-line function-paren-newline
      );
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        // eslint-disable-next-line function-paren-newline
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
      // eslint-disable-next-line function-paren-newline
      );
  });
