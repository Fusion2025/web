<template>
  <v-btn
    :class="{
      'nav-btn': true,
      'nav-btn-sep': sep,
    }"
    stacked
    :to="to"
    :active="false"
    rounded="0"
    height="auto"
    width="auto"
    variant="text"
    color="white"
    :ripple="false"
  >
    {{ name }}
  </v-btn>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sep: {
    type: Boolean,
    required: true,
  },
});
</script>

<style>
.nav-btn {
  margin: 5px 0;
  padding: 0 10px !important;
}

.nav-btn-sep {
  border-left: 1px solid white;
}
</style>
