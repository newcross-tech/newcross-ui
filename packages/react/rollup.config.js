import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-import-css';
import fs from 'node:fs';
import path from 'node:path';
import packageJson from './package.json';

const copyFileToRoot = (fileName) => {
  return {
    name: 'copy-file-to-root',
    writeBundle: (options) => {
      const outputDir = path.dirname(options.file || packageJson.main);
      const sourcePath = path.join(outputDir, fileName);
      const targetPath = path.join(process.cwd(), fileName);

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
      }
    },
  };
};

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: packageJson.main, format: 'cjs', sourcemap: true },
      { file: packageJson.module, format: 'esm', sourcemap: true },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.spec.ts', '**/stories/**', '**/utils/test/**'],
        declaration: true,
        rootDir: 'src/',
      }),
      terser(),
      css({ output: 'styles.css' }),
      copyFileToRoot('styles.css'),
    ],
    external: [
      'react',
      'react-dom',
      'styled-components',
      '@react-spring/web',
      'react-select',
      'react-data-table-component',
      '@use-gesture/react',
      'react-international-phone',
      'react-sheet-slide',
      'react-datepicker',
    ],
  },
];
