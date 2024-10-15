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
            primary: '#6200EE', // Couleur primaire en mode clair (violet)
            secondary: '#03DAC6', // Couleur secondaire en mode clair (vert menthe)
            tertiary: '#d8d8d8', // Couleur tertiaire en mode clair (orange vif)
            error: '#B00020', // Couleur d'erreur en mode clair (rouge foncé)
            'on-background': '#212121', // Couleur de la typographie sur le fond (gris foncé)
            'on-surface': '#333333', // Couleur de la typographie sur la surface (gris très foncé)
            success: '#4CAF50', // Couleur de succès
            warning: '#FFC107', // Couleur d'avertissement
            info: '#2196F3', // Couleur d'information
          },
        },
        dark: {
          dark: true, // Le thème sombre est sombre
          colors: {
            background: '#121212', // Couleur de fond en mode sombre (presque noir)
            surface: '#1E1E1E', // Couleur de surface en mode sombre (gris foncé)
            primary: '#BB86FC', // Couleur primaire en mode sombre (violet doux)
            secondary: '#03DAC6', // Couleur secondaire en mode sombre (vert menthe)
            tertiary: '#3E3E3E', // Couleur tertiaire en mode sombre (orange vif)
            error: '#CF6679', // Couleur d'erreur en mode sombre (rouge clair)
            'on-background': '#FFFFFF', // Couleur de la typographie sur le fond (blanc)
            'on-surface': '#E0E0E0', // Couleur de la typographie sur la surface (gris très clair)
            success: '#4CAF50', // Couleur de succès
            warning: '#FFC107', // Couleur d'avertissement
            info: '#2196F3', // Couleur d'information
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
