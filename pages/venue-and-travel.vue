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
        <v-row justify="center">
          <v-col class="page-content" cols="12">
            <p>
              Come join us, and experience the charm of Rio de Janeiro in July
              with a pleasant 25°C (77°F) sunny climate. Attend FUSION 2025 at
              the luxurious Othon Hotel by Copacabana Beach, offering easy
              access to top attractions. The iconic Christ the Redeemer statue
              is just 15 minutes away. Enjoy our vibrant social program (with
              spouses invited), featuring a Brazilian barbecue, a beach
              gathering, and possible exclusive trips to Maracanã Stadium. Join
              us for a unique blend of professional enrichment and Rio's vibrant
              culture!
            </p>
            <ul class="pl-4 pl-md-6">
              <li class="pt-2">
                There will be vans chartered by the conference taking the
                attendees from the airports (Galeão and Santos Dumont​) to the
                conference hotel. Detailed information will be sent to
                conference registrants closer to the event.
              </li>
              <li class="pt-2">
                The hotel is located in the safest zone of the city, crowded
                with people and surrounded by numerous restaurants, even at
                night!
              </li>
              <li class="pt-2">
                Credit cards are accepted everywhere, so cash is rarely needed
                at most places, and ATMs are widely available. You can also use
                your cell phone for payment.
              </li>
              <li class="pt-2">
                Uber is available everywhere and incredibly affordable – a ride
                from the airport to the hotel costs less than USD 15.00.
              </li>
              <li class="pt-2">
                Favorable exchange rates make everything extremely affordable in
                Rio.
              </li>
            </ul>
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

        <v-row class="px-10">
          <v-col>
            <p class="page-content my-4">
              The conference will be held at the Rio Othon Palace Hotel,
              overlooking the world-famous Copacabana Beach.
            </p>
            <p class="page-content my-4">
              Nestled on the iconic Copacabana beachfront, the Rio Othon Palace
              Hotel offers guests the privilege of experiencing one of Rio de
              Janeiro's most captivating and celebrated postcards.
            </p>
          </v-col>
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
            <h2 class="page-title px-2">Booking the Hotel</h2>
          </v-col>
        </v-row>
        <v-row class="px-md-10">
          <v-col>
            <p class="page-content my-4">
              A promotional code is available at
              <NuxtLink to="https://www.othon.com.br/" target="_blank"
                >Othon's website</NuxtLink
              >
              for booking to the FUSION event with special prices. The code "<b
                style="text-decoration: underline !important"
                >FUSION</b
              >" is valid from July 5th, 2025 to July 14th, 2025. You can follow
              the steps bellow to book a room:
            </p>
            <ul class="pl-4 pl-md-6">
              <li class="pt-2 page-content">
                When entering the
                <NuxtLink to="https://www.othon.com.br/" target="_blank"
                  >website</NuxtLink
                >
                the page below will appear, and you will need to fill in the
                hotel, period of stay, number of adults and enter the
                promotional code, then click on book (RESERVAR).
              </li>
              <img
                class="pt-2"
                src="/img/booking/booking-1.png"
                alt="Booking"
              />
              <li class="pt-2 page-content">
                The website will redirect you to the page with available rooms
                and the discount already applied. In this section, you can also
                change the language of your choice.
              </li>
              <img
                class="pt-2"
                src="/img/booking/booking-2.png"
                alt="Booking"
              />
            </ul>
          </v-col>
        </v-row>
        <v-row class="py-10">
          <v-col cols="auto" class="pa-0">
            <h2 class="page-title px-2">Coming from Santos Dummont Airport</h2>
          </v-col>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col
            class="pa-2"
            cols="12"
            style="object-fit: contain; height: 80vh"
          >
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/sd.jpg"
              alt="Santos Dumont Airport"
              cover
            />
          </v-col>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col class="pa-2" cols="12" md="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/sd2.png"
              alt="Santos Dumont Airport"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="12" md="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/sd3.jpg"
              alt="Santos Dumont Airport"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="12" md="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/sd4.jpeg"
              alt="Santos Dumont Airport"
              cover
            />
          </v-col>
        </v-row>
        <v-row class="px-0">
          <v-col cols="12" class="pa-0">
            <v-row class="px-10 ma-0">
              <v-col>
                <p>
                  The Santos Dumont Airport is a domestic airport surrounded by
                  Guanabara Bay and Sugar Loaf, named after the famous Brazilian
                  inventor and aviation pioneer Alberto Santos Dumont. Fusion
                  attendees coming from other Brazilian cities might arrive
                  there (e.g. connection flights from GRU São Paulo
                  international). SDU is located near the city center and about
                  11 km (~7 miles) from the conference venue. Driving time
                  averages 20 minutes, but it can go up to 60 minutes if between
                  4:30pm-6:30pm (rush hour for that direction).
                </p>
                <p class="pt-2">Recommended methods:</p>
                <ul class="pl-4 pl-md-6">
                  <li class="pt-2">Uber</li>
                  <li class="pt-2">
                    Registered Taxi (hire at a booth inside the Luggage Return
                    area)
                  </li>
                </ul>
                <p class="pt-2">Avoid:</p>
                <ul class="pl-4 pl-md-6">
                  <li class="pt-2">
                    Self-soliciting alternative transportations (unlicensed
                    vans, cars, etc)
                  </li>
                  <li class="pt-2">
                    Regular, yellow cabs (safe, but not English speaking)
                  </li>
                </ul>
                <p class="page-content my-4">
                  If renting a car, recommended route:
                </p>
                <ol class="pl-4 pl-md-6">
                  <li>Follow Av. Presidente Vargas towards Av. Atlântica.</li>
                  <li class="pt-2">Turn right onto Av. Princesa Isabel.</li>
                  <li class="pt-2">
                    Continue onto Av. Princesa Isabel until you reach Av.
                    Atlântica.
                  </li>
                  <li class="pt-2">Turn left onto Av. Atlântica.</li>
                  <li class="pt-2">The Hotel Othon will be on your right.</li>
                </ol>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="pb-10">
          <v-col cols="auto" class="pa-0">
            <h2 class="page-title px-2">Coming from Galeão Airport</h2>
          </v-col>
        </v-row>

        <v-row justify="center" class="px-0">
          <v-col
            class="pa-2"
            cols="12"
            style="object-fit: contain; height: 80vh"
          >
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/galeao.png"
              alt="Galeão Airport"
              cover
            />
          </v-col>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col class="pa-2" cols="12" md="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/galeao2.png"
              alt="Galeão Airport"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="12" md="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/galeao3.jpg"
              alt="Galeão Airport"
              cover
            />
          </v-col>
          <v-col class="pa-2" cols="12" md="4">
            <img
              class="palace h-100 w-100"
              draggable="false"
              src="/img/airports/galeao4.png"
              alt="Galeão Airport"
              cover
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pa-0" order="1" order-md="0">
            <v-row class="px-10 ma-0">
              <v-col>
                <p>
                  The Antonio Carlos Jobin International Airport, commonly known
                  by its original name Galeão International Airport (hence the
                  trigram GIG), is the main international airport serving Rio de
                  Janeiro, Brazil. GIG is located about 22 km (~14 miles) from
                  the conference venue. Driving time averages 40 minutes in
                  regular hours, but it can go up to 2 hours if between
                  7:30am-9:30am and 4:30pm-6:30pm (rush hour).
                </p>
                <p class="pt-2">Recommended methods:</p>
                <ul class="pl-4 pl-md-6">
                  <li class="pt-2">
                    Fusion 2025 chartered vans: We will provide free
                    transportation with chartered vans/small busses at
                    pre-defined times during the days preceding the conference,
                    as well as on late Friday and Saturday after the conference.
                    The schedule will be announced here closer to the event as
                    we learn the arrival time from most of our attendees.
                  </li>
                  <li class="pt-2">Uber</li>
                  <li class="pt-2">
                    Registered Taxi (hire at a booth inside the Luggage Return
                    area)
                  </li>
                </ul>
                <p class="pt-2">Avoid:</p>
                <ul class="pl-4 pl-md-6">
                  <li class="pt-2">
                    Self-soliciting alternative transportations (unlicensed
                    vans, cars, etc)
                  </li>
                  <li class="pt-2">
                    Regular, yellow cabs (safe, but not English speaking)
                  </li>
                  <li class="pt-2">
                    Driving (long distance, prone to direction mistakes, traffic
                    jams, etc.)
                  </li>
                </ul>
                <p class="page-content my-4">
                  If really, really wanting to drive, recommended route:
                </p>
                <ol class="pl-4 pl-md-6">
                  <li>
                    Take the Via Expressa Pres. João Goulart/Linha Vermelha.
                  </li>
                </ol>
              </v-col>
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
