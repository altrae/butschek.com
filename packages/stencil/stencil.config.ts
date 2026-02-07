import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  devServer: {
    address: '0.0.0.0',
    openBrowser: false,
    port: 3333,
  },
  globalScript: 'src/global/index.ts',
  // globalStyle: 'src/global/index.css',
  outputTargets: [
    {
      baseUrl: 'https://myapp.local/',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      type: 'www',
    },
  ],
  plugins: [
    postcss({
      injectGlobalPaths: ['src/global/index.css'],
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    }),
  ],
  taskQueue: 'async',
};
