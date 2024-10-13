// /plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import {createVuetify} from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#1976D2',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#1E1E1E',
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
