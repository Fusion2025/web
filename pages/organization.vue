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
                :src="`/img/organization/${chair.picture}`"
                :alt="`${chair.name}`"
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
        <h1 class="page-title">Technical Program Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in technicalProgramChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Program Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in programChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Plenary Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in plenaryChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Awards Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in awardsChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Tutorial Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in tutorialChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Special Session Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in specialSessionChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Local Arrangements</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in localArrangements"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Financial Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in financialChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Industrial Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in industrialChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Publication Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in publicationChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Competitions Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in competitionsChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">International Chair</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in internationalChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
        <h1 class="page-title">Welcome Chairs</h1>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col
        v-for="chair in welcomeChairs"
        :key="chair.name"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="py-4">
          <v-row justify="center">
            <!-- <v-col cols="12" class="text-center">
              <img
                class="rounded"
                :src="`/img/organization/${chair.picture}`"
              />
            </v-col> -->
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
const technicalProgramChairs = [
  {
    name: "Anne-Laure Jousselme",
    affiliation: "CS Group",
    country: "France",
    picture: "placeholder.png",
  },
  {
    name: "Branko Ristic",
    affiliation: "RMIT University",
    country: "Australia",
    picture: "placeholder.png",
  },
  {
    name: "Gustaf Hendeby",
    affiliation: "LIU",
    country: "Sweden",
    picture: "placeholder.png",
  },
];
const programChairs = [
  {
    name: "Erik Blasch",
    affiliation: "Air Force Office of Scientific Research",
    country: "USA",
    picture: "placeholder.png",
  },
  {
    name: "Kathryn Laskey",
    affiliation: "George Mason University",
    country: "USA",
    picture: "placeholder.png",
  },
];
const plenaryChairs = [
  {
    name: "Roy Streit",
    affiliation: "Metron",
    country: "USA",
    picture: "placeholder.png",
  },
  {
    name: "Chee-Yee Chong",
    affiliation: "Independent Researcher",
    country: "USA",
    picture: "placeholder.png",
  },
];
const awardsChairs = [
  {
    name: "Audun Jösang",
    affiliation: "University of Oslo",
    country: "Norway",
    picture: "placeholder.png",
  },
  {
    name: "Lyudmila Mihaylova",
    affiliation: "University of Sheffield",
    country: "UK",
    picture: "placeholder.png",
  },
];
const tutorialChairs = [
  {
    name: "Jesus Garcia Herrero",
    affiliation: "Universidad Carlos III",
    country: "Spain",
    picture: "placeholder.png",
  },
  {
    name: "Ali Raz",
    affiliation: "George Mason University",
    country: "USA",
    picture: "placeholder.png",
  },
];
const specialSessionChairs = [
  {
    name: "Zhansheng Duan",
    affiliation: "Xi'an Jiaotong University",
    country: "China",
    picture: "placeholder.png",
  },
  {
    name: "Lauro Snidaro",
    affiliation: "University of Udine",
    country: "Italy",
    picture: "placeholder.png",
  },
];
const localArrangements = [
  {
    name: "Flávia Delicato",
    affiliation: "Fluminense Federal University",
    country: "Brazil",
    picture: "placeholder.png",
  },
  {
    name: "Pedro Gonzalez",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "placeholder.png",
  },
  {
    name: "Diego Dutra",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "placeholder.png",
  },
  {
    name: "Pablo Rangel",
    affiliation: "Brazilian Navy",
    country: "Brazil",
    picture: "placeholder.png",
  },
];
const financialChairs = [
  {
    name: "Henrique Serdeira",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "placeholder.png",
  },
];
const industrialChairs = [
  {
    name: "José Brancalion",
    affiliation: "EMBRAER",
    country: "Brazil",
    picture: "placeholder.png",
  },
  {
    name: "André Braga",
    affiliation: "Federal University of Ceará / EMBRAER",
    country: "Brazil",
    picture: "placeholder.png",
  },
  {
    name: "Leopoldo Lusquino",
    affiliation: "UNESP",
    country: "Brazil",
    picture: "placeholder.png",
  },
];
const publicationChairs = [
  {
    name: "Gregor Pavlin",
    affiliation: "Thales Research",
    country: "Netherlands",
    picture: "placeholder.png",
  },
  {
    name: "Pieter de Villiers",
    affiliation: "University of Pretoria",
    country: "SA",
    picture: "placeholder.png",
  },
];
const competitionsChairs = [
  {
    name: "Claire Laudy",
    affiliation: "Thales Research",
    country: "France",
    picture: "placeholder.png",
  },
  {
    name: "Leandro Santiago",
    affiliation: "Universidade Federal Fluminense",
    country: "Brazil",
    picture: "placeholder.png",
  },
];
const internationalChairs = [
  {
    name: "Alfonso Farina",
    affiliation: "Consultant, Leonardo SpA, Radar Division",
    country: "Italy",
    picture: "placeholder.png",
  },
];
const welcomeChairs = [
  {
    name: "Zoran Sjanic",
    affiliation: "Linköping University",
    country: "Sweden",
    picture: "placeholder.png",
  },
  {
    name: "Ryne Beeson",
    affiliation: "Princeton University",
    country: "USA",
    picture: "placeholder.png",
  },
];
</script>
