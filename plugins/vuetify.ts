import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'; // Importer les styles de base de Vuetify
import {createVuetify} from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light', // Définir le thème par défaut comme clair
      themes: {
        light: {
          dark: false, // Le thème clair n'est pas sombre
          colors: {
            background: '#FFFFFF', // Couleur de fond en mode clair
            surface: '#F5F5F5', // Couleur de surface en mode clair
            primary: '#6200EE', // Couleur primaire en mode clair
            'on-background': '#000000', // Couleur de la typographie sur le fond
            'on-surface': '#333333', // Couleur de la typographie sur la surface
          },
        },
        dark: {
          dark: true, // Le thème sombre est sombre
          colors: {
            background: '#121212', // Couleur de fond en mode sombre
            surface: '#1E1E1E', // Couleur de surface en mode sombre
            primary: '#BB86FC', // Couleur primaire en mode sombre
            'on-background': '#FFFFFF', // Couleur de la typographie sur le fond
            'on-surface': '#E0E0E0', // Couleur de la typographie sur la surface
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
