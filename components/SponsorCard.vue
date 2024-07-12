<template>
  <v-card class="mx-auto no-border no-shadow" hover>
    <v-card-title class="card-title py-0">
      <h3 class="text-center">{{ sponsorshipLevel?.title }}</h3>
    </v-card-title>
    <v-card-text class="page-content text-center pt-4 text-h6">
      <h3>{{ sponsorshipLevel?.value }}</h3>
    </v-card-text>
    <v-row class="ma-0 mt-4">
      <v-col>
        <v-row v-for="(item, index) in sponsorshipLevel?.benefits" :key="index">
          <v-col class="pt-0">
            <v-card-text
              class="page-content card-list-item text-center pa-3 pt-0"
            >
              {{ item }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "SponsorCard",
  props: {
    sponsorshipLevel: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-title {
  font-weight: bolder;
  background-color: #005047;
  color: white;
}

.card-list-item {
  border-bottom: 1px solid rgb(155, 155, 155);
}

.no-border {
  border: none;
}

.no-shadow {
  box-shadow: none;
}
</style>
