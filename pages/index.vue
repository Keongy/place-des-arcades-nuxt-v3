<template>
  <v-app :theme="themeName">
    <v-container class="text-center">
      <h1 class="title">Bienvenue au livret d'accueil Place des arcades</h1>

      <v-switch
        v-model="isDark"
        :label="`Mode ${isDark ? 'Sombre' : 'Clair'}`"
        class="float-right"
      />

      <!-- Grille des blocs centrée -->
      <div class="grid-container">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="block"
          :class="{'block-dark': isDark, 'block-light': !isDark}"
          @click="navigate(block.route)"
        >
          <!-- Utiliser v-icon pour l'icône mdiWifiLock -->
          <v-icon class="block-icon" size="50">{{ block.icon }}</v-icon>
          <div class="block-title">{{ block.title }}</div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const isDark = ref(false);
const themeName = ref('light');

watch(isDark, (newVal) => {
  themeName.value = newVal ? 'dark' : 'light';
  localStorage.setItem('user-theme', themeName.value);
});

// Charger la préférence de thème depuis localStorage au démarrage
onMounted(() => {
  const savedTheme = localStorage.getItem('user-theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
    themeName.value = savedTheme;
  }
});

// Liste des blocs avec leurs icônes et routes
const blocks = ref([
  {title: 'Infos arrivée', icon: 'mdi-airplane-landing', route: '/arrival'},
  {title: 'Infos pratiques', icon: 'mdi-information-box ', route: '/practical'},
  {title: 'Infos départ', icon: 'mdi-logout', route: '/departure'},
  {title: 'Wifi', icon: 'mdi-wifi-lock', route: '/wifi'}, // L'icône sera remplacée par mdi-wifi-lock
  {title: 'Autour de moi', icon: 'mdi-map-marker-radius', route: '/around-me'},
]);

const navigate = (route) => {
  router.push(route);
};
</script>

<style scoped>
.title {
  margin-top: 45px;
  margin-bottom: 100px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 150px); /* 3 colonnes */
  justify-content: center; /* Centrer les blocs */
  gap: 20px; /* Espacement de 20px entre les blocs */
}

.block {
  width: 150px;
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.block-light {
  background-color: #f5f5f5;
  color: #000;
}

.block-dark {
  background-color: #1e1e1e;
  color: #fff;
}

.block-icon {
  margin-bottom: 10px;
}

.block-title {
  font-size: 16px;
  text-align: center;
}

.float-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Pour les petits écrans */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(
      2,
      150px
    ); /* 2 colonnes sur les petits écrans */
  }
}

@media (max-width: 500px) {
  .grid-container {
    grid-template-columns: repeat(
      1,
      150px
    ); /* 1 colonne sur les très petits écrans */
  }
}
</style>
