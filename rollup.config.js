'use strict';

import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
  input: 'src/es6/main.js',
  output: {
    name: 'app',
    file: 'dist/es6/bundle.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    eslint(),
    babel({
      exclude: 'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}