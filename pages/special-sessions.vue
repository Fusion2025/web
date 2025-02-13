<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Accepted Special Sessions</h1>
      </v-col>
    </v-row>
    <v-row v-for="ss in specialSessions" :key="ss.title" justify="center">
      <v-col cols="12">
        <v-card class="pa-4" :title="ss.title">
          <v-row justify="start" class="pl-4">
            <v-col cols="12">
              <p><b>Organizer:</b> {{ ss.organizer }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const specialSessions = [
  {
    title: "Evaluation of Technologies for Uncertainty Representation (ETUR)",
    organizer: "Paulo Costa",
  },
  {
    title: "Applications of Stone Soup",
    organizer: "Paul Thomas",
  },
  {
    title: "Extended Object and Group Tracking",
    organizer: "Tim Baur",
  },
  {
    title: "LAFUSION",
    organizer: "Pablo Rangel",
  },
  {
    title: "Advanced Nonlinear Filtering",
    organizer: "Ondřej Straka",
  },
  {
    title: "Context-based Information Fusion",
    organizer: "Jesús García",
  },
  {
    title: "Aerospace Estimation and Fusion",
    organizer: "Ryne Beeson",
  },
];
</script>
