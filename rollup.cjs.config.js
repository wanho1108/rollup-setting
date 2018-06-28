'use strict';

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/main.js',
  output: {
    name: 'app',
    file: 'dist/bundle.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    eslint(),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      exclude: 'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}