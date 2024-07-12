<template>
  <v-footer class="footer" color="#f5fff8">
    <v-row justify="space-evenly">
      <v-col class="text-center" cols="12" md="auto">
        <NuxtLink to="https://isif.org/" target="_blank">
          <img
            class="supporters"
            draggable="false"
            src="/img/supporters/ISIF.svg"
            alt="ISIF"
          />
        </NuxtLink>
      </v-col>
      <v-col class="text-center" cols="12" md="auto">
        <NuxtLink to="https://ieee-aess.org/" target="_blank">
          <img
            class="supporters"
            draggable="false"
            src="/img/supporters/AESS.svg"
            alt="AESS"
          />
        </NuxtLink>
      </v-col>
      <v-col class="text-center" cols="12" md="auto">
        <NuxtLink to="https://www.ieee.org/" target="_blank">
          <img
            class="supporters"
            draggable="false"
            src="/img/supporters/IEEE.svg"
            alt="IEEE"
          />
        </NuxtLink>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
.supporters {
  height: 40px;
  margin: 10px 0px;
}

.footer {
  border-top: 3px solid #22431a !important;
}
</style>
