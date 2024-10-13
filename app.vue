<template>
  <v-app>
    <transition name="slide">
      <NuxtPage />
    </transition>
  </v-app>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter {
  transform: translateY(100%);
}

.slide-leave-to {
  transform: translateY(-100%);
}
</style>
