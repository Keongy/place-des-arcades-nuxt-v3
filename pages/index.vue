<template>
  <v-container class="text-center">
    <h1 class="title">Bienvenue au livret d'accueil Place des arcades</h1>

    <!-- Grille des blocs centrée -->
    <div class="grid-container">
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="block"
        @click="navigate(block.route)"
      >
        <v-icon class="block-icon" size="50">{{ block.icon }}</v-icon>
        <div class="block-title">
          <p>{{ block.title }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

// Spécifier la transition pour cette page
definePageMeta({
  pageTransition: {name: 'slide-down', mode: 'out-in'},
});

const router = useRouter();

// Liste des blocs et routes associées
const blocks = ref([
  {title: 'Infos arrivée', icon: 'mdi-airplane-landing', route: '/arrival'},
  {title: 'Infos pratiques', icon: 'mdi-information-box', route: '/practical'},
  {title: 'Infos départ', icon: 'mdi-logout', route: '/departure'},
  {title: 'Wifi', icon: 'mdi-wifi-lock', route: '/wifi'},
  {title: 'Autour de moi', icon: 'mdi-map-marker-radius', route: '/around-me'},
]);

// Fonction de navigation vers les autres pages
const navigate = (route) => {
  router.push(route);
};
</script>

<style scoped>
/* Transition pour la page d'accueil */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.title {
  margin-top: 45px;
  margin-bottom: 100px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  justify-content: center;
  gap: 20px;
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
  transition: background-color 0.3s ease, transform 0.3s ease;
  background: rgb(var(--v-theme-surface));
}

.block:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.block-icon {
  margin-bottom: 10px;
}

.block-title {
  font-size: 16px;
  text-align: center;
}

@media (max-width: 580px) {
  .grid-container {
    grid-template-columns: repeat(2, 150px);
  }
}

@media (max-width: 350px) {
  .grid-container {
    grid-template-columns: repeat(1, 150px);
  }
}
</style>
