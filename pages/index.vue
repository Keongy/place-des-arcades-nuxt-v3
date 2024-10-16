<template>
  <v-container class="text-center">
    <h1 class="title">Bienvenue au livret d'accueil Place des arcades</h1>

    <!-- Grille des blocs centrée -->
    <div class="grid-container">
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="block v-elevation-4"
        @click="navigate(block.route)"
        @mouseover="
          $event.currentTarget.style.backgroundImage = `url(${block.background})`
        "
        @mouseleave="$event.currentTarget.style.backgroundImage = ''"
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
import imgTerminal from '../assets/img/img-terminal.webp';
import imgMap from '../assets/img/img-map.webp';
import imgPlane from '../assets/img/img-plane.webp';
import imgWifi from '../assets/img/img-wifi.webp';
import imgGps from '../assets/img/img-gps.webp';
import imgKey from '../assets/img/img-key.webp';
import imgEquipement from '../assets/img/img-equipement.webp';
import imgReglement from '../assets/img/img-reglement.webp';

// Spécifier la transition pour cette page
definePageMeta({
  pageTransition: {name: 'slide-down', mode: 'out-in'},
});

const router = useRouter();

// Liste des blocs et routes associées
const blocks = ref([
  {
    background: imgKey,
    title: "Accéder à l'appartement",
    icon: 'mdi-key-chain',
    route: '/keys-delivery',
  },
  {
    background: imgGps,
    title: 'Où se garer ?',
    icon: 'mdi-parking',
    route: '/parking',
  },
  {
    background: imgPlane,
    title: 'Départ',
    icon: 'mdi-airplane-takeoff',
    route: '/check-out',
  },
  {
    background: imgWifi,
    title: 'Wifi',
    icon: 'mdi-wifi-lock',
    route: '/wifi',
  },
  {
    background: imgEquipement,
    title: 'Équipements',
    icon: 'mdi-washing-machine',
    route: '/equipements',
  },
  {
    background: imgReglement,
    title: 'Règlement Intérieur',
    icon: 'mdi-book-open-variant',
    route: '/internal-regulations',
  },
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
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  background: rgb(var(--v-theme-surface));
  background-position: center;
  background-size: cover; /* Ajuste l'image pour couvrir tout le bloc */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4); /* Élément avec une légère ombre par défaut */
  position: relative;
}

.block:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6); /* Ombre plus prononcée au survol */
}

.block-icon {
  margin-bottom: 10px;
  transition: opacity 0.3s ease; /* Transition fluide de l'opacité */
}

.block:hover .block-icon {
  opacity: 0; /* Icône devient invisible au survol */
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
