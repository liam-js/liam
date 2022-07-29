import alias from 'rollup-plugin-alias';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

// import React from 'react';
// import ReactIs from 'react-is';
// import ReactDOM from 'react-dom';
// import Redux from 'redux';
// import ReactRedux from 'react-redux';
// import * as propTypes from 'prop-types';

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom', 'redux', 'react-redux'],
  plugins: [
    alias({
      resolve: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
    resolve(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',
      namedExports: {
        // 'react-is': Object.keys(ReactIs),
        // 'react': Object.keys(React),
        // 'react-dom': Object.keys(ReactDOM),
        // 'redux': Object.keys(Redux),
        // 'react-redux': Object.keys(ReactRedux),
        // 'prop-types': Object.keys(propTypes),
      },
    }),
    eslint({
      include: ['src/**/*.js'],
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
