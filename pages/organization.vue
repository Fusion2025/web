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
        <v-card class="py-4 profile-card" border="md" color="#f5fff8">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
    </v-row>

    <v-row>
      <v-col>
        <h1 class="page-title">International Chairs</h1>
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
        <v-card class="py-4 profile-card">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <img
                class="rounded profile-picture"
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
    </v-row>
  </v-container>
</template>

<script setup>
const generalChairs = [
  {
    name: "Claudio Miceli de Farias",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "general/claudio-miceli.jpeg",
  },
  {
    name: "Paulo Costa",
    affiliation: "George Mason University",
    country: "USA",
    picture: "general/paulo-costa.jpeg",
  },
];
const technicalProgramChairs = [
  {
    name: "Anne-Laure Jousselme",
    affiliation: "CS Group",
    country: "France",
    picture: "technical/anne-laure-jousselme.jpg",
  },
  {
    name: "Branko Ristic",
    affiliation: "RMIT University",
    country: "Australia",
    picture: "technical/branko-ristic.jpeg",
  },
  {
    name: "Gustaf Hendeby",
    affiliation: "LIU",
    country: "Sweden",
    picture: "technical/gustaf-hendeby.jpg",
  },
];
const programChairs = [
  {
    name: "Erik Blasch",
    affiliation: "Air Force Office of Scientific Research",
    country: "USA",
    picture: "program/erik-blasch.jpg",
  },
  {
    name: "Kathryn Laskey",
    affiliation: "George Mason University",
    country: "USA",
    picture: "program/kathryn-laskey.jpg",
  },
];
const plenaryChairs = [
  {
    name: "Roy Streit",
    affiliation: "Metron",
    country: "USA",
    picture: "plenary/roy-streit.jpg",
  },
  {
    name: "Chee-Yee Chong",
    affiliation: "Independent Researcher",
    country: "USA",
    picture: "plenary/chee-yee-chong.jpg",
  },
];
const awardsChairs = [
  {
    name: "Audun Jøsang",
    affiliation: "University of Oslo",
    country: "Norway",
    picture: "awards/audun-josang.jpg",
  },
  {
    name: "Lyudmila Mihaylova",
    affiliation: "University of Sheffield",
    country: "UK",
    picture: "awards/lyudmila-mihaylova.png",
  },
];
const tutorialChairs = [
  {
    name: "Jesus Garcia Herrero",
    affiliation: "Universidad Carlos III",
    country: "Spain",
    picture: "tutorial/jesus-garcia-herrero.jpg",
  },
  {
    name: "Ali Raz",
    affiliation: "George Mason University",
    country: "USA",
    picture: "tutorial/ali-raz.jpg",
  },
];
const specialSessionChairs = [
  {
    name: "Zhansheng Duan",
    affiliation: "Xi'an Jiaotong University",
    country: "China",
    picture: "special-session/zhansheng-duan.jpg",
  },
  {
    name: "Lauro Snidaro",
    affiliation: "University of Udine",
    country: "Italy",
    picture: "special-session/lauro-snidaro.png",
  },
];
const localArrangements = [
  {
    name: "Flávia Delicato",
    affiliation: "Fluminense Federal University",
    country: "Brazil",
    picture: "local/flavia-delicato.jpg",
  },
  {
    name: "Pedro Gonzalez",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "local/pedro-gonzalez.jpg",
  },
  {
    name: "Diego Dutra",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "local/diego-dutra.jpg",
  },
  {
    name: "Pablo Rangel",
    affiliation: "Brazilian Navy",
    country: "Brazil",
    picture: "local/pablo-rangel.jpg",
  },
];
const financialChairs = [
  {
    name: "Henrique Serdeira",
    affiliation: "Federal University of Rio de Janeiro",
    country: "Brazil",
    picture: "financial/henrique-serdeira.jpeg",
  },
];
const industrialChairs = [
  {
    name: "José Brancalion",
    affiliation: "EMBRAER",
    country: "Brazil",
    picture: "industrial/jose-brancalion.jpeg",
  },
  {
    name: "André Braga",
    affiliation: "Federal University of Ceará / EMBRAER",
    country: "Brazil",
    picture: "industrial/andre-braga.png",
  },
  {
    name: "Leopoldo Lusquino",
    affiliation: "UNESP",
    country: "Brazil",
    picture: "industrial/leopoldo-lusquino.jpeg",
  },
];
const publicationChairs = [
  {
    name: "Jacques van Wyk",
    affiliation: "University of Pretoria",
    country: "South Africa",
    picture: "publication/jacques-van-wyk.jpg",
  },
  {
    name: "Pieter de Villiers",
    affiliation: "University of Pretoria",
    country: "SA",
    picture: "publication/pieter-de-villiers.jpg",
  },
];
const competitionsChairs = [
  {
    name: "Claire Laudy",
    affiliation: "Thales Research",
    country: "France",
    picture: "competitions/claire-laudy.jpg",
  },
  {
    name: "Leandro Santiago",
    affiliation: "Fluminense Federal University",
    country: "Brazil",
    picture: "competitions/leandro-santiago.jpg",
  },
];
const internationalChairs = [
  {
    name: "Alfonso Farina",
    affiliation: "Consultant, Leonardo SpA, Radar Division",
    country: "Italy",
    picture: "international/alfonso-farina.png",
  },
  {
    name: "Ting Yuan",
    affiliation: "SJTU",
    country: "China",
    picture: "international/ting-yuan.jpg",
  },
];
const welcomeChairs = [
  {
    name: "Zoran Sjanic",
    affiliation: "Linköping University",
    country: "Sweden",
    picture: "welcome/zoran-sjanic.jpg",
  },
  {
    name: "Ryne Beeson",
    affiliation: "Princeton University",
    country: "USA",
    picture: "welcome/ryne-beeson.jpeg",
  },
];
</script>

<style scoped>
.profile-picture {
  width: 300px !important;
  aspect-ratio: 1;
}

.profile-card {
  height: 500px;
}
</style>
