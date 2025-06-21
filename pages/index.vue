<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Home</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" xl="4" order="1" order-md="0">
        <v-row justify="center">
          <v-col class="text-center">
            <img draggable="false" src="/img/rio-1.png" alt="Image from Rio" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <img draggable="false" src="/img/rio-2.jpg" alt="Image from Rio" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" xl="4" order="0" order-md="1">
        <h2 class="page-content text-center pb-8">Important Dates</h2>
        <v-alert
          class="text-center important-dates"
          variant="tonal"
          color="red"
        >
          <p>
            You will be able to download the detailed schedule at <a href="https://drive.google.com/file/d/1O2d8wU9dDngrmjveDd65zuIbDTj293sj/view?usp=sharing"> this link</a>
          </p>
          <p>
            Registration open at: 
            <a href="https://creacteve.com.br/en/proximos-eventos/fusion-2025/"> Registration </a>.
          </p>
           <p>If you require a VISA letter, please send an email to contact@fusion2025.org</p>
        </v-alert>
        <p class="page-content pt-8">
          Information Fusion conference is the premier international conference
          dedicated to theoretical and applied information fusion technologies.
          FUSION 2025, the 28th FUSION conference will be held in Rio de
          Janeiro, from July 7-11, 2025, the first ever in South America.
        </p>
        <p class="page-content pt-4">
          Rio de Janeiro never fails to impress with its modern outlook that
          reflects its progression through the times of yore. The historic
          sites, sparkling beaches, green belts and cheerful attitude of the
          locals attract tourists where heaven meets earth. If Ronaldo played
          football at the Maracanã stadium, then Christ the Redeemer put Rio on
          the world map. Rio's carnival, with its energetic samba dancers
          jiggling their hips, attracts thousands of tourists from around the
          world. The rain-forests, museums, beaches, gardens and the glitz of
          the city have made Rio what it is today Brazil's top-notch tourist
          destination.
        </p>
        <p class="page-content pt-4">
          The venue is at the center of the touristic zone of Rio de Janeiro in
          front of some of the most famous beaches - Copacabana. It provides
          excellent facilities, first-rate service levels, and all the
          additional amenities expected in major hotels, including easy access
          to various attractions - such as the Sugar Loaf, Christ the Redeemer,
          beaches and so much more.
        </p>
        <p class="page-content pt-4">
          In addition to the numerous attractions and activities located in the
          South Zone of Rio, Rio has much more to offer. From the pitoresc
          neighborhoods of Santa Teresa to Maracanã Stadium, from Gigoia Island
          to beautiful art museums, from Samba Schools to Lapa passing through
          the Royal Gabinet of Literature (one of the most beautiful libraries
          in the world) and the beaches of Barra da Tijuca.
        </p>
        <p class="page-content pt-4">Contact</p>
        <ul class="page-content pt-4 pl-6">
          <li>
            <NuxtLink to="mailto:contact@fusion2025.org">
              contact@fusion2025.org
            </NuxtLink>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.important-dates p {
  font-size: larger;
  font-weight: bold;
}
</style>
