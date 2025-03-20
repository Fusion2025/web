<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Call for Papers</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="page-title">Paper Submission</h2>
      </v-col>
      <v-col cols="12">
        <v-alert
          class="text-center submission-link"
          variant="tonal"
          color="red"
        >
          <p class="text-center pl-4">Submissions are <em>CLOSED</em>.</p>
        </v-alert>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">
          SPECIFIC TOPICS of interest include but are not limited to:
        </h2>
      </v-col>
      <v-col cols="12">
        <ul class="page-content pl-4 pl-md-6">
          <li>
            Theory and Representation:
            <p class="pt-1">
              Probability theory, Bayesian inference, argumentation, belief
              functions, possibility and fuzzy set theory, rough sets, logic
              fusion, preference aggregation, decision theory, random sets,
              finite point processes and others.
            </p>
          </li>
          <li class="pt-4">
            Algorithms:
            <p class="pt-1">
              Cognitive methods, signal processing and localisation,
              recognition, classification, identification, nonlinear filtering,
              data association, tracking, prediction, situation/impact
              assessment, alignment and registration, pattern/behavioral
              analysis, image fusion, fusion architectures, resource management,
              machine learning and artificial intelligence, topic modeling,
              natural language processing, contextual adaptation, anomaly/change
              detection.
            </p>
          </li>
          <li class="pt-4">
            Applications:
            <p class="pt-1">
              Soft-hard fusion, autonomous systems, defense/security, robotics,
              intelligent transportation, mining/manufacturing, wireless sensor
              networks, economics, finance, fintech, environmental monitoring,
              medical care/e-health, bioinformatics, radio astronomy, critical
              infrastructure protection, condition monitoring, precision
              agriculture, video streaming, streaming and sketching and other
              emerging applications.
            </p>
          </li>
          <li class="pt-4">
            Methods/tools:
            <p class="pt-1">
              Sequential inference, data mining, graph analysis,
              ontologies/semantics, modeling/realization/evaluation,
              target/sensor modeling, benchmarks/testbeds, trust in fusion
              systems, computational methods, cloud/edge computing/fusion,
              fusion performance.
            </p>
          </li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Paper Submission Guidelines</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          All papers must be original and not simultaneously submitted to
          another journal or conference. A submission implies willingness by the
          authors to register and present their work if the paper is accepted
          for presentation at the conference. Accepted papers will be submitted
          for inclusion into
          <NuxtLink
            to="https://ieeexplore.ieee.org/Xplore/home.jsp"
            target="_blank"
            >IEEE Xplore</NuxtLink
          >
          subject to meeting IEEE Xplore's scope and quality requirements.
        </p>
        <p class="page-content pt-4">
          Full Papers (between 5 and 8 pages) will be reviewed for acceptance in
          one or more of the following topics, typically involving some aspect
          of information, data or sensor fusion. Submitted papers must be
          formatted according to the IEEE Xplore template (A4 or Letter Size
          Paper), provided by IEEE
          <NuxtLink
            to="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
            >here</NuxtLink
          >, to be considered for acceptance and publication.
        </p>
      </v-col>
      <v-col cols="12">
        <p class="page-content">Author guidelines</p>
        <ul class="page-content no-list pl-md-6 pt-2">
          <li class="pt-2">
            A1 – Authors must submit their own original work only.
          </li>
          <li class="pt-2">
            A2 – Authors must not omit the main references done by others and
            related to their works.
          </li>
          <li class="pt-2">
            A3 – Authors must follow typesetting guidelines (templates) of the
            FUSION conference (<NuxtLink
              to="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              >see here</NuxtLink
            >).
          </li>
          <li class="pt-2">
            A4 – Authors must agree with ISIF copyright agreement, once the
            paper is accepted for presentation.
          </li>
          <li class="pt-2">
            A5 – Authors must employ professional language and they must avoid
            excessive verbosity that would dilute the technical clarity.
          </li>
          <li class="pt-2">
            A6 – Authors must comply with the guidelines on the use and
            disclosure of content generated by artificial intelligence (AI)
            specified in the
            <NuxtLink
              to="https://pspb.ieee.org/images/files/PSPB/opsmanual.pdf"
              target="_blank"
              >IEEE Publication Services and Products Board Operations
              Manual</NuxtLink
            >:
            <br />
            <ul class="page-content no-list ml-md-4 pl-2 mt-4 border-s-xl">
              <li>
                <em
                  >8.2.1 Publication Principles | B. RESPONSIBILITIES OF AUTHORS
                  OF ARTICLES PUBLISHED BY IEEE</em
                >
              </li>
              <li class="pt-2">
                <em
                  >10. The use of content generated by artificial intelligence
                  (AI) in an article (including but not limited to text,
                  figures, images, and code) shall be disclosed in the
                  acknowledgments section of any article submitted to an IEEE
                  publication. The AI system used shall be identified, and
                  specific sections of the article that use AI-generated content
                  shall be identified and accompanied by a brief explanation
                  regarding the level at which the AI system was used to
                  generate the content.</em
                >
              </li>
              <li class="pt-2">
                <em
                  >The use of AI systems for editing and grammar enhancement is
                  common practice and, as such, is generally outside the intent
                  of the above policy. In this case, disclosure as noted above
                  is recommended.</em
                >
              </li>
              <li class="pt-2">
                [<NuxtLink
                  to="https://pspb.ieee.org/images/files/PSPB/opsmanual.pdf"
                  target="_blank"
                  >IEEE Publication Services and Products Board Operations
                  Manual</NuxtLink
                >, 2023, pp. 98–99, para. 10]
              </li>
            </ul>
          </li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Template</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          The submission of the review manuscript consists of a unique file, in
          PDF format. Submitted papers MUST be formatted according to the IEEE
          Xplore template (A4 or Letter Size Paper). Templates and other
          supporting files for various types of operating systems can be
          downloaded using the following link:
          <NuxtLink
            to="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
            >IEEE Xplore template</NuxtLink
          >. Papers that are not correctly formatted will be desk-rejected.
        </p>
        <p class="page-content pt-4">
          IEEE conference templates contain guidance text for composing and
          formatting conference papers. Please ensure that all guidance text is
          removed from your conference paper before submission to the
          conference. Failure to remove template text from your paper may result
          in your paper not being published.
        </p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Submission of Final Manuscripts</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">To be announced</p>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Presentation Instructions</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          One of the co-authors must register for the conference at the regular
          or student rate by June 1st and present the paper on-site at the
          conference in Rio de Janeiro for it to be included in both IEEE Xplore
          and the online ISIF FUSION 2025 proceedings:
        </p>
        <ul class="page-content no-list pt-2 pl-md-6">
          <li class="pt-2">
            – Each paper will be allocated 15 minutes for its presentation,
            which will be followed by 5 minutes for questions;
          </li>
          <li class="pt-2">
            – Each room has a computer with MS PowerPoint and Acrobat Reader;
          </li>
          <li class="pt-2">
            – The final conference programme and full room allocations and
            scheduling details will be available by mid-June. All rooms are on
            the ground floor and within 2 minutes walking distance.
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="page-title">Important Dates</h2>
        <ul class="page-content no-list pt-2 pl-md-6">
          <li class="pt-2">
            – Full paper submission:
            <span class="text-decoration-line-through">March 1st, 2025</span>
            March 16th, 2025, Anywhere on Earth (AoE)
          </li>
          <li class="pt-2">
            – Notification of paper acceptance: May 1st, 2025, Anywhere on Earth
            (AoE)
          </li>
          <li class="pt-2">
            – Final paper submission: June 1st, 2025, Anywhere on Earth (AoE)
          </li>
        </ul>
      </v-col>
      <v-col cols="12" />
    </v-row>
  </v-container>
</template>

<style>
.submission-link p {
  font-size: xx-large;
  font-weight: bold;
}
.calendar-link {
  font-size: xx-large !important;
  color: #005047;
  text-decoration: none;
}
</style>
