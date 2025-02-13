<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Accepted Tutorials</h1>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="auto">
        <h2>Full Day Tutorials</h2>
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
    <v-row>
      <v-col>
        <div class="divider" />
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="auto">
        <h2>Half Day Tutorials</h2>
      </v-col>
    </v-row>
    <v-row
      v-for="tutorial in halfDayTutorials"
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
  </v-container>
</template>

<script setup>
const fullDayTutorials = [
  {
    title:
      "Practical multi-target tracking and sensor management with Stone Soup",
    lecturers: [
      "Lyudmil Vladimirov (University of Liverpool, UK)",
      "Steven Hiscocks (Defence Science and Technology Laboratory, UK)",
      "James Wright (Defence Science and Technology Laboratory, UK)",
    ],
  },
  {
    title: "Graph-Based Localization, Tracking, and Mapping",
    lecturers: [
      "Erik Leitinger",
      "Florian Meyer (University of California San Diego)",
    ],
  },
  {
    title:
      "Causal inference and data fusion: principles, challenges, and applications",
    lecturers: [
      "Alessandro Leite (INSA Rouen Normandie)",
      "Louis Hernandez (INSA Rouen Normandie)",
      "Matthieu Boussard (Craft AI)",
    ],
  },
  {
    title: "Multiagent and multiobject information fusion",
    lecturers: ["Luigi Chisci", "Alfonso Farina", "Lin Gao"],
  },
];

const halfDayTutorials = [
  {
    title: "Deep Learning for Multimodal Data Fusion: Theory and Practice",
    lecturers: [
      "Fahimeh Farahnakian (University of Turku, Finland)",
      "Luca Zelioli",
      "Pouya Jafarzadeh (Geological Survey of Finland GTK)",
    ],
  },
  {
    title: "Selected topics in sequential Bayesian estimation",
    lecturers: ["Branko Ristic (RMIT University, Australia)"],
  },
  {
    title: "Information fusion using belief functions",
    lecturers: [
      "Frédéric Pichon (Université Artois, France)",
      "Anne-Laure Jousselme (CS Research Lab, CS Group, France)",
    ],
  },
  {
    title: "Context-enhanced Information Fusion Techniques",
    lecturers: ["Lauro Snidaro", "Erik Blasch"],
  },
];
</script>

<style>
div.divider {
  width: 100%;
  height: 4px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  background-color: #efefef;
}
</style>
