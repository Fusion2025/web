<template>
  <v-app>
    <GlobalHeader />

    <v-main>
      <ScrollToTop />
      <NuxtPage />
    </v-main>

    <GlobalFooter />
  </v-app>
</template>

<style>
* {
  font-family: "SourceSans3", sans-serif;
}

.page-title {
  color: #005047;
}

.v-row:has(> .v-col > .page-title) {
  justify-content: center;
}

.v-row > .v-col > .page-title {
  text-align: center;
}

.page-content {
  color: #505050;
  font-weight: bold;
  line-height: 1.25em;
}

p.page-content {
  text-align: justify;
}

.no-list {
  list-style: none;
}

img {
  max-width: 90%;
}
</style>
