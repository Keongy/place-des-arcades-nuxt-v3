<template>
  <pages-wrapper title="Wifi" icon="mdi-wifi-lock">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <h4 class="text-center">Pour vous connecter au Wifi</h4>
          <div class="mt-10">
            <p class="mt-8 mb-2">Nom du wifi :</p>
            <v-card class="mx-auto bg-tertiary" elevation="2">
              <v-card-text class="text-center">nom du wifi ici</v-card-text>
            </v-card>
          </div>
          <div>
            <p class="mt-8 mb-2">Clé du wifi :</p>
            <v-card
              class="mx-auto bg-tertiary d-flex align-center px-3"
              elevation="2"
              @click="copyToClipboard"
            >
              <v-card-text class="text-center">MotDepapssekdls</v-card-text>
              <div class="d-flex align-center position-absolute right-0 px-5">
                <span v-if="copied" class="copied-message mr-5">Copié !</span>
                <v-icon
                  class="copy-icon"
                  @mouseover="hovering = true"
                  @mouseleave="hovering = false"
                  size="15"
                >
                  mdi-content-copy
                </v-icon>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </pages-wrapper>
</template>

<script setup>
import { ref } from "vue";

const copied = ref(false); // Pour afficher le message "copié"
const hovering = ref(false); // Pour l'effet de hover

// Fonction pour copier le texte dans le presse-papier
function copyToClipboard() {
  const wifiKey = "MotDepapssekdls"; // Clé WiFi à copier
  navigator.clipboard.writeText(wifiKey).then(() => {
    copied.value = true; // Affiche "copié"
    setTimeout(() => (copied.value = false), 2000); // Masquer le message après 2 secondes
  });
}
</script>

<style scoped>
/* Message "Copié !" */
.copied-message {
  margin-left: 10px;
  font-size: 12px;
}

/* Effet de hover sur l'icône */
.copy-icon {
  transition: transform 0.3s ease;
}

.copy-icon:hover {
  transform: scale(1.2);
}
</style>
