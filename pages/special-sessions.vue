<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Accepted Special Sessions</h1>
      </v-col>
    </v-row>
    <v-row
      v-for="tutorial in fullDayTutorials"
      :key="tutorial.title"
      justify="center"
    >
      <v-col cols="12">
        <v-card class="pa-4" :title="tutorial.title">
          <v-row justify="start" class="pl-4">
            <v-col cols="12">
              <p class="page-content" />
              <h4>Lecturers:</h4>
              <ul class="pl-4">
                <li v-for="lecturer in tutorial.lecturers" :key="lecturer">
                  {{ lecturer }}
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-for="ss in specialSessions" :key="ss.title" justify="center">
      <v-col cols="12">
        <v-card class="pa-4" :title="ss.title">
          <v-row justify="start" class="pl-4">
            <v-col cols="12">
              <p class="page-content" />
              <h4>Organizer:</h4>
              <ul class="pl-4">
                <li>{{ ss.organizer }}</li>
              </ul>
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
