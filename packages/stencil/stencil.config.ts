import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/index.css',
  globalScript: 'src/global/index.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      baseUrl: 'https://myapp.local/',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      type: 'www',
    },
  ],
};
