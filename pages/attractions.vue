<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Attractions</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <p class="page-content">
          FUSION 2025 will host the following social events to provide ample
          networking opportunities in truly memorable settings, allowing its
          attendees to be amazed by the beautiful scenario of the Marvellous
          City!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="divider" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="page-title">Ice Breaker</h2>
      </v-col>
      <v-col cols="12" md="6" align-self="center" class="text-center">
        <img class="attraction-img" src="/img/attractions/copacabana.jpg" />
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <p class="page-content" style="font-size: x-large">
          Beach party at Copacabana Beach - We will join together after the
          tutorials to get together and enjoy the beautiful scenarios of the
          most famous beach in the world!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="divider" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="page-title">Opening</h2>
      </v-col>
      <v-col cols="12" md="6" align-self="center" class="text-center">
        <img class="attraction-img" src="/img/attractions/sugar-loaf.jpg" />
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <p class="page-content" style="font-size: x-large">
          Sugar Loaf visit and reception - For celebrating the beginning of our
          conference we will visit one of the most famous spots in Rio de
          Janeiro.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="divider" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="page-title">Gala Dinner</h2>
      </v-col>
      <v-col cols="12" md="6" align-self="center" class="text-center">
        <img class="attraction-img" src="/img/attractions/botafogo.jpg" />
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <p class="page-content" style="font-size: x-large">
          Barbecue Dinner - We will celebrate our gathering at a famous barbecue
          house close to Botafogo Bay. Great food and beautiful landscape.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
div.divider {
  width: 100%;
  height: 4px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  background-color: #efefef;
}
.attraction-img {
  width: 100%;
  aspect-ratio: calc(16 / 9);
}
.submission-link p {
  font-size: xx-large;
  font-weight: bold;
}
.calendar-link {
  font-size: xx-large !important;
  color: #005047;
  text-decoration: none;
}
</style>
