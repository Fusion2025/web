<template>
  <v-fab
    id="scroll-to-top"
    :active="!$vuetify.display.lgAndUp"
    class="me-4"
    icon="mdi-arrow-up-thick"
    location="top end"
    color="#00BA8D"
    absolute
    offset
    @click="scrollToTop"
  />
</template>

<script setup>
import { useGoTo } from "vuetify";

const goTo = useGoTo();

function scrollToTop() {
  goTo(0, { easing: "linear" });
}
</script>

<style>
#scroll-to-top {
  position: fixed;
  z-index: 1;
  top: 95vh;
  right: 0;
}
</style>
