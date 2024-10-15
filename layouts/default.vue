<template>
  <v-app>
    <!-- Switch pour basculer entre clair et sombre -->
    <v-container class="ma-0 pa-0">
      <v-switch
        v-model="isDark"
        :label="`Mode ${isDark ? 'Sombre' : 'Clair'}`"
        class="float-right"
      />
    </v-container>

    <!-- Page principale -->
    <NuxtPage />
  </v-app>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = ref(false); // Etat réactif pour gérer le thème sombre/clair

// Charger le thème depuis le localStorage au montage
onMounted(() => {
  const savedTheme = localStorage.getItem("user-theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
    theme.global.name.value = isDark.value ? "dark" : "light";
  }
});

// Surveiller les changements de isDark et mettre à jour Vuetify
watch(isDark, (newVal) => {
  theme.global.name.value = newVal ? "dark" : "light";
  localStorage.setItem("user-theme", newVal ? "dark" : "light");
});
</script>

<style>
.float-right {
  z-index: 100;
  position: absolute;
  top: 10px;
  right: 10px;
}
/* Fichier global ou app.vue */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* transition pour la page index.vue */
.slide-down-up-enter-active,
.slide-down-up-leave-active {
  transition: all 0.5s ease;
}

.slide-down-up-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
