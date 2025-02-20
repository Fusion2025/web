<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Accepted Special Sessions</h1>
      </v-col>
    </v-row>
    <v-row v-for="ss in specialSessions" :key="ss.title" justify="center">
      <v-col cols="12">
        <v-card class="pa-4" :title="ss.title">
          <v-row justify="start" class="pl-4">
            <v-col cols="12">
              <h4>Organizers:</h4>
              <ul class="pl-4">
                <li v-for="organizer in ss.organizers" :key="organizer">
                  {{ organizer }}
                </li>
              </ul>
              <h4 class="pt-4">Abstract:</h4>
              <p v-for="par in ss.abstract" :key="par">{{ par }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const specialSessions = [
  {
    title: "Evaluation of Technologies for Uncertainty Representation (ETUR)",
    organizers: [
      "Erik Blasch - Air Force Office of Scientific Research (USA)",
      "Paulo Costa - George Mason University (USA)",
      "Valentina Dragos - Onera (France)",
      "Anne-Laure Jousselme - CS Group (France)",
      "Lance Kaplan - DEVCOM Army Research Laboratory (USA)",
      "Kathryn Laskey - George Mason University (USA)",
      "Claire Laudy - Thales (France)",
      "Gregor Pavlin - Thales (The Netherlands)",
      "Pieter de Villiers - University of Pretoria (South Africa)",
      "Juergen Ziegler - IABG (Germany)",
    ],
    abstract: [
      "The Evaluation of Technologies for Uncertainty Representation (ETUR) Special Session is intended to report the contemporary analysis of topics related to the ISIF's ETUR working group (ETURWG), which aims to bring together advances and developments in the area ofevaluation of uncertainty representation and reasoning techniques for information fusion.",
      "The ETUR special sessions started in Fusion 2010 and have been held every year since then, with an attendance consistently averaging between 30 and 50 attendees. While most attendees consist of ETURWG participants, new researchers and practitioners interested in uncertainty evaluation have attended the sessions and some stayed with the ETURWG.",
    ],
  },
  {
    title: "Applications of Stone Soup",
    organizers: [
      "Paul Thomas - Defence Science and Technology Laboratory (UK)",
    ],
    abstract: [
      "The Stone Soup framework is a flexible, modular, open-source framework for developing and proving a wide variety of tracking and information-fusion-based solutions. Since its inception in 2017, it has aimed to provide an open, easy-to-deploy framework to develop and assess the performance of different types of trackers. Now, through repeated application in many use cases, implementation of a wide variety of algorithms, multiple releases, and contributions from the community, the framework has reached a mature point and is proving to be an essential tool in evaluation and characterisation of tracking and state estimation approaches.",
      "This special session highlights recent research contributions within the Stone Soup framework and emphasises the evaluation and comparison capabilities.  Discussions in this session will typically draw upon Stone Soup's evaluation features to include comprehensive evaluation of a proposed approach against a number of other approaches in a number of use cases.",
    ],
  },
  {
    title: "Extended Object and Group Tracking",
    organizers: [
      "Tim Baur - Constance University of Applied Sciences (Germany)",
      "Uwe D. Hanebeck - Karlsruhe Institute of Technology (Germany)",
      "Marcus Baum - University of Goettingen (Germany)",
      "Johannes Reuter - Constance University of Applied Sciences (Germany)",
      "Patrick Hoher - Constance University of Applied Sciences (Germany)",
    ],
    abstract: [
      "Traditional object tracking algorithms assume that the target object can be modeled as a single point without a spatial extent. However, there are many scenarios in which this assumption is not justified. For example, when the resolution of the sensor device is higher than the spatial extent of the object, a varying number of measurements can be received, originating from points on the entire surface or contour or from spatially distributed reflection centers. Furthermore, a collectively moving group of point objects can be seen as a single extended object because of the interdependency of the group members.",
      "This Special Session addresses fundamental techniques, recent developments, and future research directions in the field of extended object and group tracking.",
      "This Special Session has been organized annually at the FUSION conference since 2009 in Seattle.",
    ],
  },
  {
    title: "LAFUSION",
    organizers: [
      "Pablo Rangel - Brazilian Navy Research Institute (Brazil)",
      "Aldo André Díaz-Salazar - Federal University of Goias (Brazil)",
    ],
    abstract: [
      "The aim of this special session is to extend the papers presented in the First Latin American Workshop on Information Fusion (LAFUSION 2024) - that focused on the latest research results on the Information Fusion in Latin America. The goal of this workshop was to create a community of Information Fusion researchers in Latin America that will be part of the FUSION community in the next years.",
      "Information fusion is a multidisciplinary field that focuses on combining and integrating information from diverse sources to improve the accuracy, completeness, and reliability of the resulting information. It involves the process of merging data or knowledge from multiple sensors, databases, or information systems to generate a unified and coherent representation of the underlying reality.",
      "The main goal of information fusion is to extract meaningful and actionable insights by leveraging the strengths of individual information sources while compensating for their limitations, uncertainties, or redundancies. It aims to provide a more comprehensive and accurate understanding of a given situation or phenomenon than what can be achieved by using individual sources in isolation.",
      "Information fusion techniques typically involve various processes, including data preprocessing, feature extraction, data association, probabilistic modeling, decision-making, and knowledge representation. These processes may utilize methods from diverse disciplines such as statistics, signal processing, pattern recognition, artificial intelligence, machine learning, and cognitive science.",
      "Applications of information fusion are widespread and can be found in fields such as surveillance and intelligence, remote sensing, robotics, autonomous systems, medical diagnosis, weather forecasting, transportation systems, and cybersecurity. By integrating and interpreting information from multiple sources, information fusion enables improved situational awareness, decision-making, and prediction capabilities, leading to enhanced performance, efficiency, and reliability in complex and uncertain environments. Several Latin American problems could be solved by Information Fusion. We are looking to form a Forum to debate the usage of Information Fusion to produce solutions for the challenges in the region.",
    ],
  },
  {
    title: "Advanced Nonlinear Filtering",
    organizers: [
      "Ondřej Straka - University of West Bohemia (Czech Republic)",
      "Uwe D. Hanebeck - Karlsruhe Institute of Technology (Germany)",
      "Jindřich Duník - University of West Bohemia (Czech Republic)",
      "Fred Daum - Raytheon (USA)",
      "Daniel Frisch - Karlsruhe Institute of Technology (Germany)",
    ],
    abstract: [
      "Methods for Bayesian inference with nonlinear systems are of fundamental interest in the information fusion community. Great efforts have been made to develop state estimation methods that are getting closer and closer to the truth. Further objectives are to increase their efficiency, reduce their requirements/assumptions, and to allow their application in more general settings.",
      "Areas such as target tracking, guidance, positioning, navigation, sensor fusion, fault detection, and decision-making usually require linear or nonlinear state estimation methods (i.e., of broad interest to the information fusion community). These methods are used to provide an estimate of the state of a dynamic system, which is, in general, not directly measurable, from a set of noisy measurements. The development of state estimation started in the sixties with the appearance of the well known Kalman filter (KF), and the use of simple linearization approaches to deal with nonlinear dynamic systems. Satisfactory performance of these legacy KF-based methods was limited to system models with mild nonlinearities, together with perfect knowledge of the system, that is, both system functions, noise statistics distributions and their respective parameters.",
      "For the last three decades, a huge effort has gone towards the derivation of State estimation techniques able to deal with highly nonlinear and/or non-Gaussian models, following either a Bayesian or an optimisation approach, which allow a more informative description of the estimate through probability distributions or distribution parameters, and Robust estimation techniques able to cope with a possible model mismatch (including uncertainties in the noise description) or measurements corrupted by outliers. These methods were subsequently improved to increase their efficiency, reduce their requirements/assumptions, and allow their application in more general settings.",
      "This special session focuses on recent advances in nonlinear state estimation (filters, smoothers, and predictors) for both discrete and continuous time system models.",
    ],
  },
  {
    title: "Context-based Information Fusion",
    organizers: [
      "Jesús García - University Carlos III de Madrid (Spain)",
      "Lauro Snidaro - University of Udine (Italy)",
      "José M. Molina - University Carlos III de Madrid (Spain)",
      "Ingrid Visentini - Enovis (Italy)",
    ],
    abstract: [
      "The goal of the proposed session is discussing approaches to context-based information fusion. It will cover the design and development of information fusion solutions integrating sensor data with contextual knowledge.",
      "The development of IF systems inclusive of contextual factors and information offers an opportunity to improve the quality of the fused output, provide solutions adapted to the application requirements, and enhance tailored responses to user queries. Contextual-based strategy challenges include selecting the appropriate representations, exploitations, and instantiations. Context could be represented as knowledge-bases, ontologies, and geographical maps, etc. and would form a powerful tool to favor adaptability and system performance. Example applications include context-aided tracking and classification, situational reasoning, ontology building and updating.",
      "Therefore, the session covers both representation and exploitation mechanisms so that contextual knowledge can be efficiently integrated in the fusion process and enable adaptation mechanisms.",
    ],
  },
  {
    title: "Aerospace Estimation and Fusion",
    organizers: [
      "Ryne Beeson - Princeton University (USA)",
      "Keith LeGrand - Purdue University (USA)",
    ],
    abstract: [
      "Information fusion plays a vital role in many aerospace problems, dating back to the first practical application of the Kalman filter for translunar navigation in NASA's Apollo program. Today, information fusion problems span the aerospace field, from space object tracking and space domain awareness, missile defense, navigation, satellite remote sensing, and aircraft uncertainty quantification. Problems in the aerospace field often must deal with nonlinearity, sparsity in observations, and tracking of multiple targets. Solutions of these problems must also work to overcome limitations to available computational resources (e.g., onboard applications) and network bandwidth. This special session features advances in information fusion motivated by current challenges in aerospace problems.",
    ],
  },
];
</script>
