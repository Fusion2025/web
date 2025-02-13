<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Submit</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-alert
          class="text-center submission-link"
          variant="tonal"
          color="red"
        >
          <p class="text-center pl-4">
            Please submit your original paper for FUSION 2025 using this CMT
            link:
          </p>
          <p>
            <NuxtLink
              to="https://cmt3.research.microsoft.com/FUSION2025/Submission/Index"
              target="_blank"
            >
              https://cmt3.research.microsoft.com/FUSION2025/Submission/Index</NuxtLink
            >
          </p>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.submission-link p {
  font-size: xx-large;
  font-weight: bold;
}
</style>
