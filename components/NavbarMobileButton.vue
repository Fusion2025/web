<template>
  <v-list-item :to="to" :title="name" border="md" :exact="exact" />
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
  exact: {
    type: Boolean,
    required: true,
  },
});
</script>
