<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Call for Competitions</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <p class="page-content">
          Evaluate your information fusion algorithms on a benchmark of Notices
          To Airmen (NOTAM). The aim is to extract & fuse information contained
          in these notices, store it in an ontology and answer some pilots'
          information requests.
        </p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Background</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          For domains involving situation awareness, the problem raised is to
          make sense of a situation, possibly on-going, and answer the infamous
          "Who-What-Where-When-How" questions.
        </p>
        <p class="page-content pt-4">
          High level information fusion shares this objective of understanding a
          situation: one wants to evaluate whether the algorithm behaves as
          expected and performs the intended operation, with the right level of
          specificity. This evaluation involves classical criteria, such as
          precision and recall, but also fusion-specific ones, such as
          preciseness level or uncertainty management.
        </p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Aims</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          The main objective of this challenge is to compare state-of-the-art or
          well-known algorithms for high level information fusion, by
          challenging them on a complex situation that encompasses multiple
          complex entities interacting with each other. The entities communicate
          according to their competencies, resulting in information items having
          different levels of perfection.
        </p>
        <p class="page-content pt-4">
          Within the challenge, the algorithms will be evaluated on different
          instances of a scenario, encompassing different levels of quality of
          the information.
        </p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">More Information & Contact</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          For more information about the challenge, visit
          <NuxtLink to="http://hlif-challenge.s3g-labs.fr/" target="_blank"
            >http://hlif-challenge.s3g-labs.fr/</NuxtLink
          >
          or contact us at
          <NuxtLink
            to="mailto:hlif-challenge2024@thalesgroup.com"
            target="_blank"
            >hlif-challenge2024@thalesgroup.com</NuxtLink
          >. Papers that are not correctly formatted will be desk-rejected.
        </p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Participating</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          To register your interest in the challenge and access the practice
          dataset, please visit
          <NuxtLink to="http://hlif-challenge.s3g-labs.fr/" target="_blank"
            >http://hlif-challenge.s3g-labs.fr/</NuxtLink
          >.
        </p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Prices</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          The International Society for Information Fusion (ISIF) and FUSION2025
          conference organizing committee will award the winning and 2 runner-up
          teams, free student registrations to the FUSION2025 conference, as
          well as support between $825 and $1200 for travel and lodging.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="page-title">Important Dates</h2>
        <p>
          The results of the First High Level Information Fusion Challenge will
          be announced during the conference in July 2025.
        </p>
        <ul class="page-content no-list pt-2 pl-md-6">
          <li class="pt-2">
            – Participants registration opens: September 1st, 2024
          </li>
          <li class="pt-2">
            – Practice data is made available to registered participants:
            September 1st, 2024
          </li>
          <li class="pt-2">
            – Opening of the test infrastructure to the participants: September
            to December, 2024
          </li>
          <li class="pt-2">
            – Software submission deadline for participants: December 31st, 2024
          </li>
          <li class="pt-2">
            – Evaluation run by the organizing team: January to February, 2025
          </li>
          <li class="pt-2">
            – Paper submission deadline to the FUSION2025 conference for
            participants and organizing team: March 1st, 2025
          </li>
          <li class="pt-2">
            – Results of the competition to be announced at FUSION2025: July 7th
            to July 11th, 2025
          </li>
        </ul>
      </v-col>
      <v-col cols="12"
    /></v-row>
  </v-container>
</template>
