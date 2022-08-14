import fs from 'fs';
import baseConfig from './base.js';
import serve from 'rollup-plugin-serve';
import { name } from '../package.json';
const pkgName = name.replace('@liam-js/', '');

const appIntro = fs.readFileSync('src/app-intro.js', {
  encoding: 'utf-8',
});

const appOutro = fs.readFileSync('src/app-outro.js', {
  encoding: 'utf-8',
});

export default {
  ...baseConfig,
  output: [
    {
      file: `dist/${pkgName}.development.js`,
      format: 'umd',
      amd: {
        id: pkgName,
      },
      name: 'Liam',
      sourcemap: true,
    },
    {
      file: `dist/app.development.js`,
      format: 'umd',
      amd: {
        id: pkgName,
      },
      name: 'Liam',
      banner: appIntro,
      footer: appOutro,
      sourcemap: true,
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    serve({
      // http://localhost:8080/dist/liam.development.js
      port: 8080,
      contentBase: [''],
    }),
  ],
};
