<template>
  <v-btn class="hotel-button" :href="href" target="_blank">
    <slot>Default label</slot>
  </v-btn>
</template>

<script>
export default {
  name: "GlobalButton",
  props: {
    href: {
      type: String,
      required: true,
    },
    children: { type: String, required: true },
  },
};
</script>

<style scoped>
.hotel-button {
  background-color: #6e9e96;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-transform: none;
  width: fit-content;
}

.hotel-button:hover {
  background-color: #005047;
}
</style>
