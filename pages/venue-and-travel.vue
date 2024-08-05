<!-- eslint-disable vue/html-self-closing -->
<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="auto">
            <h1 class="page-title">Venue & Travel</h1>
          </v-col>
        </v-row>
        <v-row
          class="address my-6 px-0 mx-0 w-100"
          justify="space-around"
          align="center"
        >
          <v-col class="text-center" cols="12" lg="auto" md="auto">
            <h2 class="page-title py-2">Congress Location</h2>
            <p class="page-content py-1">Rio Othon Palace</p>
            <p class="page-content py-1">Av. Atlântica, 3264 - 5º andar</p>
            <p class="page-content py-1">Copacabana, Rio de Janeiro</p>
          </v-col>
          <v-col class="text-center" cols="12" lg="auto" md="auto"
            ><GlobalButton
              href="https://www.othon.com.br/hotel-copacabana/rio-othon-palace"
              >Hotel website</GlobalButton
            >
          </v-col>
          <v-col class="text-center" cols="12" lg="auto" md="auto"
            ><img
              class="othon-logo"
              draggable="false"
              src="/img/logos/logoOthon.png"
              alt="Othon"
            />
          </v-col>
        </v-row>

        <v-row class="px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.6307668795944!2d-43.18906184590071!3d-22.977408328910535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd547345cd851%3A0xdfbcb038384c36a1!2sRio%20Othon%20Palace!5e0!3m2!1spt-BR!2sbr!4v1715032702302!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title=""
          />
        </v-row>

        <v-row justify="center" class="px-10">
          <p class="page-content my-4">
            The conference will be held at the Rio Othon Palace Hotel,
            overlooking the world-famous Copacabana Beach.
          </p>
          <p class="page-content my-4">
            Nestled on the iconic Copacabana beachfront, the Rio Othon Palace
            Hotel offers guests the privilege of experiencing one of Rio de
            Janeiro's most captivating and celebrated postcards.
          </p>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col class="pa-2" cols="6">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento1.jpg"
              alt="Othon palace"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="6">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento2.jpg"
              alt="Othon palace"
              cover
            />
          </v-col>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col class="pa-2" cols="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento3.jpeg"
              alt="Othon palace"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento4.jpg"
              alt="Othon palace"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento5.jpg"
              alt="Othon palace"
              cover
            />
          </v-col>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col class="pa-2" cols="6">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento6.jpg"
              alt="Othon palace"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="6">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/hotels/othon/bento7.jpg"
              alt="Othon palace"
              cover
            />
          </v-col>
        </v-row>
        <v-row class="py-10">
          <v-col cols="auto" class="pa-0">
            <h2 class="page-title px-2">Coming from Santos Dummont Airport</h2>
            <v-row  class="px-10 ma-0">
              <p class="page-content my-4">
                Possible Route:
                <ol class="pl-4 pl-md-6">
                  <li class="pt-2">Follow Av. Presidente Vargas towards Av. Atlântica.</li>
                  <li class="pt-2">Turn right onto Av. Princesa Isabel.</li>
                  <li class="pt-2">Continue onto Av. Princesa Isabel until you reach Av. Atlântica.</li>
                  <li class="pt-2">Turn left onto Av. Atlântica.</li>
                  <li class="pt-2">The Hotel Othon will be on your right.</li>
                </ol>
              </p>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="pb-10">
          <v-col cols="auto" class="pa-0">
            <h2 class="page-title px-2">Coming from Galeão Airport</h2>
            <v-row class="px-10 ma-0">
              <p class="page-content my-4">
                Possible Route:
                <ol class="pl-4 pl-md-6">
                  <li class="pt-2">Take the Via Expressa Pres. João Goulart/Linha Vermelha.</li>
                </ol>
              </p>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="px-2 pb-10">
          <v-col cols="auto" class="pa-0">
            <h2 class="page-title">Hotels Near the Event</h2>
          </v-col> </v-row
        ><v-row v-for="(item, index) in hotelsInfo" :key="index" class="px-2">
          <HotelCard
            :format="index % 2 === 0 ? 'normal' : 'reverse'"
            :hotel-info="item"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GlobalButton from "~/components/GlobalButton.vue";
import HotelCard from "~/components/HotelCard.vue";

export default {
  components: {
    GlobalButton,
    HotelCard,
  },
  data() {
    return {
      hotelsInfo: [
        {
          name: "Fairmont Rio de Janeiro Copacabana",
          address: "Av. Atlântica, 4240 Copacabana, Rio de Janeiro",
          link: "https://fairmontrio.com/",
          image: "/img/hotels/hotelFairmont.jpg",
        },
        {
          name: "Orla Copacabana Hotel",
          address: " Av. Atlântica, 4122 Copacabana, Rio de Janeiro",
          link: "https://www.orlahotel.com.br/",
          image: "/img/hotels/hotelOrla.jpg",
        },
        {
          name: "Mirador Rio Hotel",
          address: "Rua Tonelero, 338 Copacabana, Rio de Janeiro",
          link: "https://www.hotelmirador.com.br/",
          image: "/img/hotels/hotelMirador.jpg",
        },
        {
          name: "Hotel Astória Copacabana",
          address: "Rua República do Peru, 345 Copacabana, Rio de Janeiro",
          link: "https://astoria.com.br/",
          image: "/img/hotels/hotelAstoria.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.address {
  background-color: #f5fff8;
}

.othon-logo {
  width: 20vh;
}

iframe {
  width: 100%;
  height: 40vh;
  border: 0;
}

.palace {
  max-width: 100%;
  object-fit: cover;
}
</style>
