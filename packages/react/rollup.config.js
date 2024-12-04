import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-import-css';
import packageJson from './package.json';

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
      }),
      terser(),
      css(),
    ],
    external: [
      'react',
      'react-dom',
      'styled-components',
      '@react-spring/web',
      'react-select',
      'react-data-table-component',
    ],
  },
];
