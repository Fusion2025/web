<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Hackathon</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="page-title">Introduction</h2>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          In 2024, the Thales group organized the first High-Level Information
          Fusion (HLIF) competition. The challenge was to support aircraft
          pilots handling "Notices to Air Missions".
        </p>
        <p class="page-content pt-4">
          Technical difficulties on both the input datasets and the competition
          architecture artificially raised the bar to submissions. Only two
          solutions taking the form of self-contained software were submitted,
          and were compared with two references produced by the organizers. This
          was mainly due to several small frictions in the process of
          implementing a pipeline that needs several complex steps.
          Consequently, the competition did not rank the available solutions.
        </p>
        <p class="page-content pt-4">
          This hackathon thus aims to improve the organization of future
          competitions, by either:
        </p>
      </v-col>
      <v-col cols="12">
        <ul class="page-content pl-4 pl-md-6">
          <li>Improve the template pipeline.</li>
          <li class="pt-4">Propose a new solution.</li>
          <li class="pt-4">Prepare the next competition.</li>
          <li class="pt-4">Improve the existing tools.</li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Possible Tasks</h2>
      </v-col>
      <v-col cols="12">
        <h3>Improve the Template Pipeline</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          Following the 2024 event, the Institut Pasteur published an
          open-source version of their solution, which can now be used as a
          template for future competitions.
        </p>
        <p class="page-content pt-4">
          Participants may improve the pipeline to help future competitors of
          next year's competition, or even build up their own.
        </p>
        <p class="page-content pt-4">Examples of ideas can be:</p>
      </v-col>
      <v-col cols="12">
        <ul class="page-content pl-4 pl-md-6">
          <li>
            Refactor the orchestrating shell script into a full-featured
            workflow (e.g. with SnakeMake or NextFlow).
          </li>
          <li class="pt-4">
            Refactor the NOTAM parser so that it is more robust, faster and/or
            able to extract more information.
          </li>
          <li class="pt-4">
            Add natural language processing capabilities to the NOTAM parser.
          </li>
          <li class="pt-4">Improve the (very simple) fusion algorithm.</li>
          <li class="pt-4">
            Improve the queries that answer the competition's questions.
          </li>
          <li class="pt-4">
            Use a different query system (e.g. replacing SPARQL with queries in
            natural language).
          </li>
          <li class="pt-4">
            Add a feature to allow filtering the ontology individuals.
          </li>
          <li class="pt-4">
            Write down a documentation about the pipeline and how to use it.
          </li>
          <li class="pt-4">etc.</li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">Propose a New Solution to HLIF2024</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          If teams have tools of their own that they would want to test on the
          HLIF2024 competition, they can get help to either replace a part of
          the template solution with their tool, or even go as far as to create
          their solution from scratch.
        </p>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">Prepare the Next Competition</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          Institut Pasteur is considering providing a competition instance,
          involving public databases, around their own use-case about cancer.
        </p>
        <p class="page-content pt-4">
          Participants may also propose their own use-case, which can be
          transformed in a new competition.
        </p>
        <p class="page-content pt-4">Participants may help to:</p>
      </v-col>
      <v-col cols="12">
        <ul class="page-content pl-4 pl-md-6">
          <li>
            Create an interesting competition problem, from the underlying
            use-case.
          </li>
          <li class="pt-4">
            Implement a template pipeline from which future competitors can
            build up their solution.
          </li>
          <li class="pt-4">
            Design the system environment to run the competition on an HPC
            cluster.
          </li>
          <li class="pt-4">
            Create a ground truth reference, to help ranking the solutions.
          </li>
          <li class="pt-4">
            Improve the implementation of the evaluation metrics.
          </li>
          <li class="pt-4">Develop a new kind of evaluation system.</li>
          <li class="pt-4">
            Write down a description of the competition problem(s) or a tutorial
            about how to participate.
          </li>
          <li class="pt-4">etc.</li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">Improve the Existing Tools</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          The competition(s) and their template pipelines rely on a set of
          existing software. Those tools may benefit from having new features,
          which in turn may help designing better competitions. New tools may
          also be developed where needed.
        </p>
      </v-col>
      <v-col cols="12">
        <ul class="page-content pl-4 pl-md-6">
          <li>
            Develop a new evaluation tool, able to compute metrics on large
            subgraphs, at scale.
          </li>
          <li class="pt-4">
            Improve the OntoWeaver tool, which is used to map iterable data to
            typed graphs.
          </li>
          <li class="pt-4">
            Improve the BioCypher tool, which is used to transform typed graphs
            into semantic knowledge graphs.
          </li>
          <li class="pt-4">Improve the HLIF2024 ontology's taxonomy itself.</li>
          <li class="pt-4">
            Improve the documentation of aforementioned tools.
          </li>
          <li class="pt-4">etc.</li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h2 class="page-title">Practical Information</h2>
      </v-col>
      <v-col cols="12">
        <h3>When?</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          The hackathon will run on three and a half days, during the FUSION
          2025 conference. It will start on Tuesday, and end on Friday morning.
          The hackathon is located at Room Ipanema, in the second floor.
        </p>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">Who?</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          Anyone (student, researcher, engineer, etc.) may participate. People
          not willing to contribute code but able to write documentation, draw
          diagrams, manipulate ontologies and/or provide ideas are especially
          welcomed. Some basic background in high-level information fusion is
          probably needed to understand the topic of the competition.
        </p>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">How?</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          A complete introduction to the subject and tools will be given by the
          organizers of the HLIF2024 competition, at the beginning of the
          hackathon. Organizers will stick around in order to help the
          participants.
        </p>
        <p class="page-content pt-4">
          Participants are expected to bring their own computers. Food, drinks,
          electricity and network will be provided.
        </p>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">Contact and important links</h3>
      </v-col>
      <v-col cols="12">
        <ul class="page-content pl-4 pl-md-6">
          <li>
            <NuxtLink
              to="https://gitlab.pasteur.fr/jdreo/hlif_ontoweaver"
              target="_blank"
            >
              Base project
            </NuxtLink>
          </li>
          <li class="pt-4">
            Johann Dreo:
            <NuxtLink to="mailto:johann.dreo@pasteur.fr" target="_blank"
              >johann.dreo@pasteur.fr</NuxtLink
            >
          </li>
          <li class="pt-4">
            Claire Laudy:
            <NuxtLink to="mailto:claire.laudy@thalesgroup.org" target="_blank"
              >claire.laudy@thalesgroup.org</NuxtLink
            >
          </li>
        </ul>
      </v-col>
      <v-col cols="12">
        <h3 class="pt-6">Hackathon Prize</h3>
      </v-col>
      <v-col cols="12">
        <p class="page-content">
          Participants will present their work to a jury, the best contributions
          will get a prize, awarded by the FUSION 2025 organizers during the
          gala diner.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
