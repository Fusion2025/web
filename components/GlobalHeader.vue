<template>
  <v-row no-gutters>
    <v-navigation-drawer
      v-if="!$vuetify.display.lgAndUp"
      v-model="navDrawer"
      location="right"
      order="0"
    >
      <v-list id="nav-drawer" height="100%" nav>
        <v-list-item to="/" title="HOME" border="md" />
        <v-list-group value="CALL FOR CONTRIBUTIONS">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              title="CALL FOR CONTRIBUTIONS"
              border="md"
              exact
            />
          </template>

          <v-list-item
            v-for="call in calls"
            :key="call.to"
            :to="call.to"
            :title="call.name"
            border="md"
            exact
          />
        </v-list-group>
        <v-list-item
          v-for="btn of buttons"
          :key="btn.to"
          :to="btn.to"
          :title="btn.name"
          border="md"
          exact
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :elevation="0" height="550" absolute order="1">
      <template #image>
        <video
          :class="{
            'header-video': true,
            'header-video-pos': $vuetify.display.lgAndUp,
          }"
          playsinline
          autoplay
          muted
        >
          <source src="/video/cristo.mp4" type="video/mp4" />
        </video>
        <img class="header-logo" src="/img/header/logo.svg" alt="" />
        <img class="header-trace" src="/img/header/layer_traco.svg" alt="" />
      </template>
      <v-row v-if="$vuetify.display.lgAndUp" class="nav-btns" no-gutters>
        <h1
          style="
            position: absolute;
            bottom: 50px;
            left: 15px;
            z-index: 999;
            color: white;
          "
        >
          7th – 11th July
        </h1>
        <v-btn
          class="nav-btn"
          stacked
          to="/"
          :active="false"
          rounded="0"
          height="auto"
          width="auto"
          variant="text"
          color="white"
          :ripple="false"
        >
          Home
        </v-btn>
        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn
              class="nav-btn nav-btn-sep"
              stacked
              :active="false"
              rounded="0"
              height="auto"
              width="auto"
              variant="text"
              color="white"
              :ripple="false"
              v-bind="props"
            >
              CALL FOR CONTRIBUTIONS
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in calls"
              :key="index"
              :to="item.to"
              density="compact"
              slim
              exact
            >
              {{ item.name }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          v-for="btn in buttons"
          :key="btn.to"
          class="nav-btn nav-btn-sep"
          stacked
          :to="btn.to"
          :active="false"
          rounded="0"
          height="auto"
          width="auto"
          variant="text"
          color="white"
          :ripple="false"
        >
          {{ btn.name }}
        </v-btn>
      </v-row>
      <v-row v-else class="nav-btns" no-gutters>
        <v-btn
          class="nav-btn"
          stacked
          :active="false"
          rounded="0"
          height="auto"
          width="auto"
          variant="text"
          color="white"
          :ripple="false"
          prepend-icon="$menu"
          @click="navDrawer = !navDrawer"
        />
        <h1
          style="
            color: white;
            font-weight: 900;
            -webkit-text-stroke: 1px #005047;
          "
        >
          7th – 11th July
        </h1>
      </v-row>
    </v-app-bar>
  </v-row>
</template>

<script setup>
import { useDisplay } from "vuetify";

// Use Vuetify display handle
const display = useDisplay();

// Set wheter navigation drawer is open
const navDrawer = ref(false);

// Navigation bar buttons
const buttons = [
  { name: "SUBMIT", to: "/submit" },
  { name: "REGISTER", to: "/register" },
  { name: "PROGRAM", to: "/program" },
  { name: "VENUE & TRAVEL", to: "/venue-and-travel" },
  { name: "ORGANIZATION", to: "/organization" },
  { name: "SPONSORS", to: "/sponsors" },
];

// Navigation bar call buttons
const calls = [
  { name: "CALL FOR PAPERS", to: "/call-for-papers" },
  { name: "CALL FOR SPECIAL SESSIONS", to: "/call-for-special-sessions" },
  { name: "CALL FOR TUTORIALS", to: "/call-for-tutorials" },
  { name: "CALL FOR COMPETITIONS", to: "https://hlif-challenge.s3g-labs.fr" },
];

// Closes the navigation drawer in case of display size change
watch(display.lgAndUp, () => {
  navDrawer.value = false;
});
</script>

<style scoped>
#nav-drawer {
  justify-content: space-around;
}

.nav-btns {
  position: absolute;
  bottom: 0;
}

.nav-btn {
  margin: 5px 0;
  padding: 0 10px !important;
}

.nav-btn-sep {
  border-left: 1px solid white;
}

.header-video {
  min-width: 100%;
  min-height: 100%;
  z-index: -3;
  object-fit: cover;
}

.header-video-pos {
  object-position: 0px -400px;
}

.header-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  z-index: -1;
}

.header-trace {
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: -2;
  max-height: 100%;
  max-width: 100%;
}
</style>
