<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Organization</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="page-title">General Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in generalChairs"
        :key="chair.name"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="py-4" border="md" color="#f5fff8">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`${baseURL}/img/organization/${chair.picture}`"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="page-title">{{ chair.name }}</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <h3 class="page-content">{{ chair.affiliation }}</h3>
            </v-col>
            <v-col cols="12" class="text-center">
              <h3 class="page-content">{{ chair.country }}</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="page-title">Executive Chairs</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="page-content my-4 text-center" cols="12">
        To be announced
      </v-col>
    </v-row>
    <!-- <v-row justify="space-evenly">
      <v-col v-for="chair in executiveChairs" :key="chair.name" cols="12" md="4" lg="3">
        <v-card class="py-4">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="page-title">{{ chair.name }}</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <h3 class="page-content">{{ chair.affiliation }}</h3>
            </v-col>
            <v-col cols="12" class="text-center">
              <h3 class="page-content">{{ chair.country }}</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col>
        <h1 class="page-title">Program Chairs</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="page-content my-4 text-center" cols="12">
        To be announced
      </v-col>
    </v-row>
    <!-- <v-row justify="space-evenly">
      <v-col v-for="chair in programChairs" :key="chair.name" cols="12" md="4" lg="3">
        <v-card class="py-4">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <h2 class="page-title">{{ chair.name }}</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <h3 class="page-content">{{ chair.affiliation }}</h3>
            </v-col>
            <v-col cols="12" class="text-center">
              <h3 class="page-content">{{ chair.country }}</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script setup>
const baseURL = useNuxtApp().$config.app.baseURL;

const generalChairs = [
  {
    name: "Claudio Miceli de Farias",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "claudio-miceli.jpeg",
  },
  {
    name: "Paulo Costa",
    affiliation: "George Mason University",
    country: "USA",
    picture: "paulo-costa.jpeg",
  },
];
const executiveChairs = [
  {
    name: "Claudio Miceli de Farias",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "claudio-miceli.jpeg",
  },
];
const programChairs = [
  {
    name: "Claudio Miceli de Farias",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "claudio-miceli.jpeg",
  },
];
</script>
