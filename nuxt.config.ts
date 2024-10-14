import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'slide-up',
      mode: 'out-in', // Assure que la page sort avant que la nouvelle page ne rentre
    },
  },
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoImport: true}));
      });
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: '2024-10-13',
});
