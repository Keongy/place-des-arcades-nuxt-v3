<template>
  <div class="wrapper">
    <div class="header">
      <div class="back-icon">
        <v-icon @click="navigate('/')" class="block-icon" size="50"
          >mdi-chevron-left</v-icon
        >
      </div>
      <div class="title">
        <v-icon class="block-icon" size="50">{{ icon }}</v-icon>
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const navigate = (route) => {
  router.push(route);
};

// Déclaration des props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'mdi-airplane-landing', // Par défaut, un icône pour le titre
  },
});
</script>

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  position: relative; /* Nécessaire pour l'alignement absolu des icônes */
}

.back-icon {
  position: absolute;
  left: 20px; /* Position de l'icône de retour à gauche */
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.block-icon {
  margin-right: 10px;
}

.container {
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(var(--v-theme-surface));
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 30px;
}
</style>
