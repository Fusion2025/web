<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Sponsors</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-row class="px-10">
          <v-col cols="auto">
            <h2 class="page-title">FUSION 2025 Sponsorship opportunities</h2>
            <v-row>
              <v-col cols="auto">
                <p class="page-content my-4">
                  The 28th International Conference on Information Fusion
                  (FUSION 2025) serves as a significant platform for researchers
                  and practitioners across academia, industry, and government
                  sectors. It focuses on advancing classical model-based
                  approaches and emerging data-driven autonomous methodologies
                  in sensor, data, information, and knowledge fusion.
                  Discussions also encompass new system frameworks, hybrid
                  processing techniques, and systemic challenges such as system
                  design paradigms, control, management, testing, and
                  evaluation.
                </p>

                <p class="page-content my-4">
                  FUSION attracts leading researchers and influencers from
                  academia and industry, offering a unique opportunity to engage
                  with those shaping the future of research techniques.
                  Participants gain insights into current advancements and
                  future research directions. The conference is also an ideal
                  venue for networking and recruiting top Ph.D. talent,
                  enhancing organizational visibility among global thought
                  leaders.
                </p>

                <p class="page-content my-4">
                  Sponsors can leverage extensive exposure through conference
                  promotions, event activities, and potential synergies with
                  industry partners. We look forward to your participation at
                  FUSION 2025 in Rio de Janeiro, Brazil, and invite you to
                  consider the benefits of sponsoring FUSION 2025.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="px-10">
          <v-col cols="auto">
            <h2 class="page-title">Benefits of Supporting FUSION 2025</h2>
            <v-row>
              <v-col cols="auto">
                <ul class="page-content ma-4 ml-10">
                  <li>
                    Acknowledgement of your organisation's support leading up to
                    and during the conference
                  </li>
                  <li>
                    Networking opportunities during the conference to promote
                    your products and services to specialists and graduate
                    students
                  </li>
                  <li>
                    A showcase for your brand in support of researchers in this
                    key scientific and industrial field
                  </li>
                  <li>
                    An opportunity to establish contacts and strengthen
                    relationships with the leading researchers and institutions
                    from around the world
                  </li>
                  <li>
                    Access to conference delegates for recruiting and promoting
                    mind share of your organisation's brand
                  </li>
                  <li>
                    A place and time for your researchers and management to
                    connect face-to-face with the most influential people in
                    this field in a setting especially conducive to learning and
                    exploration of future opportunities
                  </li>
                </ul>

                <p class="page-content my-4">
                  There are five levels of sponsorship opportunities and the
                  Sponsorship Chairs are happy to discuss more specific
                  sponsorship opportunities. All conference sponsors receive the
                  following standard benefits:
                </p>

                <ul class="page-content ma-4 ml-10">
                  <li>
                    Recognition as a supporter (with your logo) in the
                    conference program
                  </li>
                  <li>
                    Recognition as a supporter (with your logo) on the
                    supporters' page of the official conference website,
                    including a hyperlink to your organisation's home page
                  </li>
                  <li>
                    Acknowledgement as a supporter on the official audiovisual
                    material used at the virtual conference (e.g., announcements
                    in business sessions and logo in official virtual
                    backgrounds)
                  </li>
                </ul>

                <p class="page-content my-4">
                  Added Benefits of the different levels of sponsorship are
                  outlined in the table below:
                </p>
              </v-col>
              <v-row class="mb-4">
                <v-col v-for="(item, index) in sponsorshipLevels" :key="index">
                  <SponsorCard :sponsorship-level="item" />
                </v-col>
              </v-row>
            </v-row>
            <v-row>
              <v-col>
                <ol class="page-content ma-4">
                  <li class="my-4">
                    * It includes invitation for one sponsor representative to
                    attend the PhD Symposium
                  </li>
                  <li class="my-4">** Additional cost to be discussed</li>
                  <li class="my-4">
                    *** People who opt-in as part of the conference registration
                    must be allowed to opt-out at anytime subsequently
                  </li>
                </ol>

                <p class="page-content my-4">
                  For more details please contact us at
                  <a
                    class="text-decoration-none"
                    href="mailto:contact@fusion2025.org"
                    >contact@fusion2025.org</a
                  >.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row justify="center" class="px-0">
          <v-col cols="12" class="px-0">
            <h2 class="page-title px-10">Principal Sponsors</h2>
            <v-row class="sponsors my-4 px-0 mx-0 w-100" justify="space-around">
              <v-col class="text-center" cols="12" sm="4">
                <NuxtLink to="https://isif.org/" target="_blank">
                  <img
                    class="sponsor h-100"
                    draggable="false"
                    src="/img/supporters/ISIF.svg"
                    alt="ISIF"
                  />
                </NuxtLink>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <NuxtLink to="https://ieee-aess.org/" target="_blank">
                  <img
                    class="sponsor"
                    draggable="false"
                    src="/img/supporters/AESS.svg"
                    alt="AESS"
                  />
                </NuxtLink>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <NuxtLink to="https://www.ieee.org/" target="_blank">
                  <img
                    class="sponsor"
                    draggable="false"
                    src="/img/supporters/IEEE.svg"
                    alt="IEEE"
                  />
                </NuxtLink>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SponsorCard from "~/components/SponsorCard.vue";

export default {
  components: {
    SponsorCard,
  },
  data() {
    return {
      sponsorshipLevels: [
        {
          title: "Bronze",
          value: "US$ 3,000",
          benefits: [
            "Logo on website, booklet, and presentation slide during opening/closing",
            "1 full conference registration",
          ],
        },
        {
          title: "Silver",
          value: "US$ 6,000",
          benefits: [
            "Logo on website, booklet, and presentation slide during opening/closing",
            "2 full conference registrations",
            "Logo on conference signage",
            "Exhibitor table",
          ],
        },
        {
          title: "Gold",
          value: "US$ 10,000",
          benefits: [
            "Logo on website, booklet, and presentation slide during opening/closing",
            "3 full conference registrations",
            "Logo on conference signage",
            "Exhibitor table",
            "Verbal acknowledgment at conference opening/closing",
            "15 sec video before keynote presentations",
            "Opportunity to be identified as a sponsor of an award or a conference event (e.g., lunch, coffee breaks, banquet, workshops, etc.)**",
          ],
        },
        {
          title: "Platinum",
          value: "US$ 15,000",
          benefits: [
            "Logo on website, booklet, and presentation slide during opening/closing",
            "4 full conference registrations",
            "Logo on conference signage",
            "Exhibitor table",
            "Verbal acknowledgment at conference opening/closing",
            "30 sec video before keynote presentations",
            "Opportunity to be identified as a sponsor of an award or a conference event (e.g., lunch, coffee breaks, banquet, workshops, etc.)**",
            "Access to email address of conference attendees who opts-in to receive email from conference sponsors***",
            "Sponsor flier provided to all attendees",
            "Half page company advertisement in the conference program booklet",
            "Exclusive opportunity (maximum 1 spot)",
          ],
        },
        {
          title: "Diamond",
          value: "US$ 30,000",
          benefits: [
            "Logo on website, booklet, and presentation slide during opening/closing",
            "6 full conference registrations",
            "Logo on conference signage",
            "Exhibitor table",
            "Verbal acknowledgment at conference opening/closing",
            "60 sec video before keynote presentations",
            "Opportunity to be identified as a sponsor of an award or a conference event (e.g., lunch, coffee breaks, banquet, workshops, etc.)**",
            "Access to email address of conference attendees who opts-in to receive email from conference sponsors***",
            "Sponsor flier provided to all attendees",
            "1 page company advertisement in the conference program booklet",
            "Exclusive opportunity (maximum 4 spots)",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.sponsors {
  background-color: #f5fff8;
}

.sponsor {
  height: 5vw;
}
</style>
