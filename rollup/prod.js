import fs from 'fs';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';

import baseConfig from './base';
import { name, version, author } from '../package.json';

const pkgName = name.replace('@liam.js', '');

// banner
const banner =
  `${'/*!\n' + ' * '}${pkgName}.js v${version}\n` +
  ` * (c) 2021-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`;

const appIntro = fs.readFileSync('src/app-intro.js', {
  encoding: 'utf-8',
});

const appBanner = banner.replace('liam','liam-app')+`
`+appIntro;

export default [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // umd development version with sourcemap
      {
        file: `dist/${pkgName}.development.js`,
        format: 'umd',
        amd: {
          id: pkgName,
        },
        name: 'Liam',
        banner,
        sourcemap: true,
      },
    ],
    plugins: [...baseConfig.plugins, filesize()],
  },
  // .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `dist/${pkgName}.production.min.js`,
        format: 'umd',
        amd: {
          id: pkgName,
        },
        name: 'Liam',
        banner,
      },
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify({
        compress: {
          drop_console: false,
        },
      }),
      filesize(),
    ],
  },
  //app .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `dist/app.production.min.js`,
        format: 'umd',
        amd: {
          id: pkgName,
        },
        name: 'Liam',
        banner: appBanner
      },
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify({
        compress: {
          drop_console: false,
        },
      }),
      filesize(),
    ],
  },
];
