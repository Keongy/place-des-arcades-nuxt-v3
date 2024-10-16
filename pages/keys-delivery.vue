<template>
  <pages-wrapper title="Accéder à l'appartement" icon="mdi-key-chain">
    <v-container class="pa-0">
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <v-card variant="tonal pa-5 elevation-6">
            <v-card-text>
              <p>
                l'arrivé se fait à partir de 16h00 sauf demande spéciale au
                préalable. <br />
              </p>
              <br />
              <p>Accès à l’appartement : <br /></p>
              <p>
                - Rendez-vous au 3 Place des Arcades (Porte d’entrée marron à
                côté d’une bijouterie)
              </p>
              <v-img
                :width="500"
                aspect-ratio="16/9"
                cover
                :src="placeDesArcades"
              ></v-img>
              <br />
              <p>**Ou trouver le badge**</p>
              - Monter au Xème étage <br />
              <p>
                – x porte à droite avec une boîte à clés à droite. <br />
                Récupérer les clés de l’appartement dans la boîte avec le code
                xxxx.
              </p>
              <p>Photo porte entrée boit à cléf</p>
            </v-card-text>
          </v-card>
          <p></p>
        </v-col>
      </v-row>
    </v-container>
  </pages-wrapper>
</template>

<script setup>
import placeDesArcades from '../assets/img/place-des-arcades.jpg';
</script>
