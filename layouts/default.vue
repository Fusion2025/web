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

.page-content {
  color: #505050;
  font-weight: bold;
  line-height: 1.25em;
}

.no-list {
  list-style: none;
}

img {
  max-width: 90%;
}
</style>
