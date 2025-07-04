<template>
  <v-row no-gutters>
    <v-navigation-drawer
      v-if="!$vuetify.display.lgAndUp"
      v-model="navDrawer"
      location="right"
      order="0"
    >
      <v-list id="nav-drawer" height="100%" nav>
        <NavbarMobileButton to="/" name="HOME" />
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
        <NavbarMobileButton to="/register" name="REGISTER" exact />
        <NavbarMobileButton to="/scholarship" name="SCHOLARSHIP" exact />
        <v-list-group value="PROGRAM">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="PROGRAM" border="md" exact />
          </template>
          <v-list-item
            v-for="program in programs"
            :key="program.to"
            :to="program.to"
            :title="program.name"
            border="md"
            exact
          />
        </v-list-group>
        <NavbarMobileButton
          to="/venue-and-travel"
          name="VENUE & TRAVEL"
          exact
        />
        <NavbarMobileButton to="/organization" name="ORGANIZATION" exact />
        <NavbarMobileButton to="/sponsors" name="SPONSORS" exact />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :elevation="0" height="565" absolute order="1">
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
      <v-row
        v-if="$vuetify.display.lgAndUp"
        class="nav-btns"
        no-gutters
        style="background-color: #005047 !important"
      >
        <h1
          style="
            position: absolute;
            bottom: 50px;
            left: 15px;
            z-index: 999;
            color: #f2c511;
          "
        >
          7th – 11th July 2025, Rio de Janeiro, Brazil
        </h1>
        <NavbarButton to="/" name="HOME" />
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
        <NavbarButton to="/register" name="REGISTER" sep />
        <NavbarButton to="/scholarship" name="SCHOLARSHIP" sep />
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
              PROGRAM
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in programs"
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
        <NavbarButton to="/venue-and-travel" name="VENUE & TRAVEL" sep />
        <NavbarButton to="/organization" name="ORGANIZATION" sep />
        <NavbarButton to="/sponsors" name="SPONSORS" sep />
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
            color: #f2c511;
            font-weight: 900;
            -webkit-text-stroke: 1px #005047;
          "
        >
          7th – 11th July 2025
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

// Navigation bar call buttons
const calls = [
  { name: "CALL FOR PAPERS", to: "/call-for-papers" },
  { name: "CALL FOR COMPETITIONS", to: "/call-for-competitions" },
];

// Navigation bar program buttons
const programs = [
  { name: "SCHEDULE", to: "/schedule" },
  { name: "KEYNOTES", to: "/keynotes" },
  { name: "SPECIAL SESSIONS", to: "/special-sessions" },
  { name: "TUTORIALS", to: "/tutorials" },
  { name: "BOOT CAMP", to: "/bootcamp" },
  { name: "ATTRACTIONS", to: "/attractions" },
  { name: "TEEN WORKSHOP", to: "/teen-workshop" },
  { name: "5K RUN", to: "/5k-run" },
  { name: "HACKATHON", to: "/hackathon" },
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
  padding: 0 9px !important;
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
