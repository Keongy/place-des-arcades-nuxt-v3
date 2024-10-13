<template>
  <v-app :theme="themeName">
    <v-container class="text-center">
      <h1>Bienvenue au livret d'accueil Place des arcades</h1>
      <v-switch
        v-model="isDark"
        :label="`Mode ${isDark ? 'Sombre' : 'Clair'}`"
        class="float-right"
      />
    </v-container>
  </v-app>
</template>

<script setup>
import {ref, watch} from 'vue';
import {useNuxtApp} from '#app';

// État réactif pour savoir si on est en mode sombre
const isDark = ref(false);

// Définir le nom du thème en fonction du mode
const themeName = ref('light');

watch(isDark, (newVal) => {
  themeName.value = newVal ? 'dark' : 'light';
});
</script>

<style scoped>
.float-right {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
