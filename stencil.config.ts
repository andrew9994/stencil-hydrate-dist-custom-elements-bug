import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-hydrate-dist-custom-elements-bug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
