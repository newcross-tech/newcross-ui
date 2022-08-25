import fs from 'fs';

const basePath = 'build/js';
const buildPaths = [`${basePath}/native`, `${basePath}/web`];

const createIndexFiles = (fileNames: Array<string>, path: string) => {
  const folderNames = fs
    .readdirSync(path)
    .filter((name) => fs.statSync(`${path}/${name}`).isDirectory());

  fileNames.forEach((fileName) => {
    const stream = fs.createWriteStream(`${path}/${fileName}`);

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
  // create index files for web and native folder
  buildPaths.forEach((buildPath) => {
    createIndexFiles(['index.js', 'index.d.ts'], buildPath);
  });

  // create index files for base path
  createIndexFiles(['index.js', 'index.d.ts'], basePath);
})();
