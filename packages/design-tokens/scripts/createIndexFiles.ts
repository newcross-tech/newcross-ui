import fs from 'fs';

const buildPath = 'build/js';

const createIndexFiles = (fileNames: Array<string>) => {
  const folderNames = fs.readdirSync(buildPath);

  fileNames.forEach((fileName) => {
    const stream = fs.createWriteStream(`${buildPath}/${fileName}`);

    stream.once('open', () => {
      folderNames.forEach((name) => {
        stream.write(`import * as ${name} from './${name}';\n`);
      });

      stream.write(`export {${folderNames.join(',')}}\n`);
      stream.end();
    });
  });
};

(() => {
  createIndexFiles(['index.js', 'index.d.ts']);
})();
