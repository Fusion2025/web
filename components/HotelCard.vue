<template>
  <v-row
    :class="
      format == 'reverse' ? 'flex-row-reverse reverse' : 'flex-row normal'
    "
    class="my-6 px-0 mx-0 w-100 d-flex"
    justify="space-between"
  >
    <v-col class="text-center pa-0" cols="12" sm="3">
      <img
        class="palace h-100"
        draggable="false"
        :src="hotelInfo?.image"
        :alt="hotelInfo?.name"
        cover
    /></v-col>
    <v-col
      class="text-center align-content-center justify-center pb-6"
      cols="12"
      sm="9"
    >
      <h2 class="page-title title py-3">{{ hotelInfo?.name }}</h2>
      <p class="page-content address py-2 text-center">
        {{ hotelInfo?.address }}
      </p>
      <GlobalButton :href="hotelInfo?.link">Hotel website</GlobalButton></v-col
    ></v-row
  >
</template>

<script>
import GlobalButton from "~/components/GlobalButton.vue";

export default {
  name: "HotelCard",
  components: {
    GlobalButton,
  },
  props: {
    hotelInfo: {
      type: Object,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.palace {
  max-width: 100%;
  object-fit: cover;
}

.title {
  color: #505050;
}

.address {
  font-size: 1.125rem;
}

.normal {
  background-color: #f5fff8;
}
</style>
