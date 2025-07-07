<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Accepted Tutorials</h1>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="auto">
        <h2>Full Day Tutorials ({{ fullDayTutorials.length }} Total)</h2>
      </v-col>
    </v-row>
    <v-row
      v-for="tutorial in fullDayTutorials"
      :key="tutorial.title"
      justify="center"
    >
      <v-col cols="12">
        <v-card class="pa-4" :title="tutorial.title">
          <v-row justify="start" class="pl-4">
            <v-col cols="12">
              <h4>Lecturers:</h4>
              <ul class="pl-4">
                <li v-for="lecturer in tutorial.lecturers" :key="lecturer">
                  {{ lecturer }}
                </li>
              </ul>
              <h4 class="pt-4">Abstract:</h4>
              <p v-for="par in tutorial.abstract" :key="par">{{ par }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="divider" />
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="auto">
        <h2>Half Day Tutorials ({{ halfDayTutorials.length }} Total)</h2>
      </v-col>
    </v-row>
    <v-row
      v-for="tutorial in halfDayTutorials"
      :key="tutorial.title"
      justify="center"
    >
      <v-col cols="12">
        <v-card class="pa-4" :title="tutorial.title">
          <v-row justify="start" class="pl-4">
            <v-col cols="12">
              <h4>Session time: {{ tutorial.time }}</h4>
              <h4 class="pt-4">Lecturers:</h4>
              <ul class="pl-4">
                <li v-for="lecturer in tutorial.lecturers" :key="lecturer">
                  {{ lecturer }}
                </li>
              </ul>
              <h4 class="pt-4">Abstract:</h4>
              <p v-for="par in tutorial.abstract" :key="par">{{ par }}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const fullDayTutorials = [
  {
    title:
      "Practical multi-target tracking and sensor management with Stone Soup",
    lecturers: [
      "Lyudmil Vladimirov - University of Liverpool (UK)",
      "Steven Hiscocks - Defence Science and Technology Laboratory (UK)",
      "James Wright - Defence Science and Technology Laboratory (UK)",
    ],
    abstract: [
      "The Stone Soup framework is designed to provide a flexible and unified software platform for researchers and engineers to develop, test and benchmark a variety of existing multi-sensor, multi-object estimation algorithms and sensor management approaches. It profits from the object-oriented principles of abstraction, encapsulation, and modularity, allowing users (beginners, practitioners, or experts) to focus only on the most critical aspects of their problem.",
      "Stone Soup is endorsed by ISIF's working group on Open Source Tracking and Estimation (OSTEWG). These tutorials will introduce participants to Stone Soup's basic components and how they fit together. They are delivered by way of demonstrations, set tasks and interactive tutorials where participants will be encouraged to write and modify algorithms. These tasks will be written up in the form of interactive browser-based applications which combine the ability to run code with a presentation environment suitable for instruction.",
      "The tutorial will begin with basic examples using linear/non-linear models, filtering, data association, track management, aimed at briefly introducing the topics and familiarise attendees with Stone Soup. The latter part of the tutorial is an interactive activity, applying Stone Soup to several scenarios involving simulated and real-world datasets.",
    ],
  }
];

const halfDayTutorials = [
  // MORNING
  {
    title:
      "Advanced Techniques for Low-Level and Mid-Level Sensor Data Fusion in Automotive Applications",
    lecturers: ["Ahmed Tarad - Mercedes-Benz AG (Germany)"],
    abstract: [
      "This tutorial will provide a comprehensive exploration of hybrid fusion techniques designed to integrate low-level sensor data (e.g., point clouds) and mid-level DNN-derived features (e.g., box features) from diverse sensor modalities such as LiDAR, Radar, and Cameras. The focus will be on practical techniques deployed in real-world systems, particularly those implemented in Mercedes-Benz vehicles to achieve advanced levels of autonomous driving. Unlike conventional approaches that focus primarily on single-level fusion or extended object modeling, this session will delve into: fusion techniques for low-level and mid-level data, single-sensor trackers and their role in fusion, probabilistic multiple hypothesis (PMHT) for low-level fusion, novel box-to-box innovation models and production-ready applications.",
    ],
    time: "Morning (10 AM to 01 PM)",
  },
  {
    title:
      "Causal inference and data fusion: principles, challenges, and applications",
    lecturers: [
      "Alessandro Leite - INSA Rouen Normandie (France)",
      "Louis Hernandez - INSA Rouen Normandie (France)",
      "Matthieu Boussard - Craft AI (France)",
    ],
    abstract: [
      "Causal knowledge plays a crucial role in helping decision-makers forecast the potential impact of their actions, enabling more informed choices in high-stakes domains such as education, finance, medicine, social sciences, and artificial intelligence. However, deriving valid causal conclusions from data presents several challenges, particularly when data come from diverse experimental and observational studies conducted on different populations and under varying conditions. These discrepancies introduce issues such as selection bias, confounding, and missing data, which can significantly affect the validity and reliability of causal inferences.",
      "This tutorial will provide participants with a comprehensive introduction to the mathematical and practical foundations of causal reasoning in the context of multiple heterogeneous data sources. We will cover key methodologies for integrating and analyzing data collected under different settings, addressing selection bias and confounding adjustment challenges to design robust causal models.",
      "Through a combination of theoretical insights, practical demonstrations, and hands-on exercises, attendees will develop the skills needed to design robust causal models and apply these techniques to real-world problems. The tutorial will be particularly valuable for researchers, data scientists, and practitioners working in interdisciplinary fields who seek to improve the reliability of causal conclusions drawn from diverse data sources. By the end of the session, participants will have gained actionable strategies for leveraging causal inference to enhance decision-making and policy design in complex data environments.",
    ],
    time: "Morning (10 AM to 01 PM)",
  },
  {
    title: "Estimation of Noise Parameters in State Space Models",
    lecturers: [
      "Ondřej Straka - University of West Bohemia (Czech Republic)",
      "Jindřich Duník - University of West Bohemia (Czech Republic)",
    ],
    abstract: [
      "The tutorial introduces a more than six decades-long history as well as recent advances and state-of-the-art methods for estimating the properties of the stochastic part of the model. In particular, the estimation of state-space model noise means, covariance matrices, and other parameters are treated. The tutorial covers all major groups of noise statistics estimation methods, including correlation methods, maximum likelihood methods, covariance matching methods, and Bayesian methods. The methods are introduced in the unified framework highlighting their basic ideas, key properties, and assumptions. Algorithms of individual methods will be described and analyzed to provide a basic understanding of their nature and similarities. The performance of the methods will also be compared using a numerical illustration.",
    ],
    time: "Afternoon (02:30 PM to 05:30 PM)",
  },
  {
    title: "Poisson multi-Bernoulli mixtures for multiple target tracking",
    lecturers: [
      "Yuxuan Xia - Shanghai Jiaotong University (China)",
      "Yu Ge - Chalmers University of Technology (Sweden)",
    ],
    abstract: [
      "In this tutorial, the attendant will learn the foundations of the Poisson multi-Bernoulli mixture (PMBM) filter, a state-of-the-art multiple target tracking (MTT) algorithm that has been applied to data from lidars, radars, cameras, integrated search-and-track sensor management, 5G simultaneous localization and mapping (SLAM). In addition, the attendant will learn the relations of the PMBM filter with other MTT algorithms such as multi-Bernoulli mixture (MBM) filter, probability hypothesis density (PHD) filter, Poisson multi-Bernoulli (PMB) filter, δ-generalised labelled multi-Bernoulli (δ-GLMB) filter, multiple hypothesis tracking (MHT), and joint integrated probabilistic data association (JIPDA) filter. Finally, this tutorial will cover the extension of the PMBM filter to SLAM and sets of trajectories.",
    ],
    time: "Afternoon (02:30 PM to 05:30 PM)",
  },
  {
    title:
      "An Introduction to Track-to-Track Fusion and the Distributed Kalman Filter",
    lecturers: ["Felix Govaers - Fraunhofer (Germany)"],
    abstract: [
      'The increasing trend towards connected sensors ("internet of things" and "ubiquitous computing") derive a demand for powerful distributed estimation methodologies. In tracking applications, the "Distributed Kalman Filter" (DKF) provides an optimal solution under certain conditions. The optimal solution in terms of the estimation accuracy is also achieved by a centralized fusion algorithm which receives either all associated measurements or so-called "tracklets". However, this scheme needs the result of each update step for the optimal solution whereas the DKF works at arbitrary communication rates since the calculation is completely distributed. Two more recent methodologies are based on the "Accumulated State Densities" (ASD) which augment the states from multiple time instants. In practical applications, tracklet fusion based on the equivalent measurement often achieves reliable results even if full communication is not available. The limitations and robustness of the tracklet fusion will be discussed.',
      "At first, the tutorial will explain the origin of the challenges in distributed tracking. Then, possible solutions to them are derived and illuminated. In particular, algorithms will be provided for each presented solution. The list of topics includes: Short introduction to target tracking, Tracklet Fusion, Exact Fusion with cross-covariances, Naive Fusion, Federated Fusion, Decentralized Fusion (Consensus Kalman Filter), Distributed Kalman Filter (DKF), Debiasing for the DKF, Distributed ASD Fusion, Augmented State Tracklet Fusion.",
    ],
    time: "Morning (10 AM to 01 PM)",
  },
  // AFTERNOON
  {
    title:
      "Quantum Computing and Quantum Physics Inspired Algorithms: Introduction and Data Fusion Examples",
    lecturers: [
      "Felix Govaers - Fraunhofer (Germany)",
      "Wolfgang Koch - Fraunhofer (Germany)",
    ],
    abstract: [
      'Quantum algorithms for data fusion may become game changers as soon as quantum processing kernels embedded in hybrid processing architectures with classical processors will exist. While emerging quantum technologies directly apply quantum physics, quantum algorithms do not exploit quantum physical phenomena as such, but rather use the sophisticated framework of quantum physics to deal with "uncertainty". Although the link between mathematical statistics and quantum physics has long been known, the potential of physics-inspired algorithms for data fusion has just begun to be realized. While the implementation of quantum algorithms is to be considered on classical as well as on quantum computers, the latter are anticipated as well- adapted "analog computers" for unprecedentedly fast solving data fusion and resources management problems. While the development of quantum computers cannot be taken for granted, their potential is nonetheless real and has to be considered by the international information fusion community.',
    ],
    time: "Afternoon (02:30 PM to 05:30 PM)",
  },
  {
    title: "Deep Learning for Multimodal Data Fusion: Theory and Practice",
    lecturers: [
      "Claudio Miceli - Federal University of Rio de Janeiro (Brazil)" 
    ],
    abstract: [
      "In an increasingly data-driven world, fusing information from multiple sources has become a cornerstone of innovation across various domains. Data fusion refers to the process of integrating information from heterogeneous data sources to achieve insights that are richer and more comprehensive than those derived from any single source. This capability is crucial in applications such as autonomous systems, medical diagnostics, remote sensing, and industrial automation, where data is abundant and diverse.",
      "Deep Learning (DL), as a subset of artificial intelligence, has emerged as a powerful tool for data fusion tasks. Its ability to learn hierarchical feature representations and process complex, multimodal data has pushed the boundaries of traditional data fusion techniques. DL-based data fusion has demonstrated state-of-the-art performance in combining structured, unstructured, and temporal data to solve problems involving classification, detection, segmentation, and decision-making.",
      "Despite its potential, integrating data from multiple sources using DL poses challenges. These challenges include the alignment and synchronization of heterogeneous data, efficient feature extraction, and designing fusion architectures that can balance computational efficiency with predictive performance.",
      "In this tutorial, we explore the principles and methodologies of DL-based data fusion. We discuss the taxonomy of fusion strategies (early, middle, and late fusion) and their applications in various tasks, including autonomous navigation, healthcare, and remote sensing. Practical examples and case studies will illustrate these strategies, offering attendees insights into both theoretical and applied aspects of this transformative technology. By addressing open challenges and future research directions, we aim to inspire participants to advance the field of DL-based data fusion. By the end of this tutorial, participants will have a strong understanding of sensor fusion categories, DL architectures, and practical implementation strategies.",
    ],
    time: "Morning (10 AM to 01 PM)",
  },
  {
    title: "Selected topics in sequential Bayesian estimation",
    lecturers: ["Branko Ristic - RMIT University (Australia)"],
    abstract: [
      "The tutorial will cover four advanced topics of sequential Bayesian estimation:",
      "- Rao-Blackwellisation of particle filters: Particle filters are computationally expensive. In some applications it is possible to formulate an analytic optimal Bayesian solution for a subspace of the state space, and thus reduce the dimension of the state in which particle filtering is required. The concept will be demonstrated by examples.",
      "- Sensor control for a reactive target: Sensor control is active or plan-ahead sensing, where sensing and Bayesian estimation are conducted sequentially in a closed loop. Sensor control is typically formulated as partially observed Markov decision process (POMDP), where the reward is defined in the form of information gain. The main limitation of this paradigm is that it assumes that the target is non-reactive, that is, it does not change its behavior as a consequence of being observed. This tutorial will introduce game theory, as a mathematical framework for studying interactions between intelligent players, in the context of sensor control for a reactive target.",
      "- Formulation of target tracking in the framework of possibility theory: Traditional target tracking algorithms are formulated in the framework of Bayesian probability theory. The main limitation of the traditional approach is that probabilistic models of target dynamics and sensor measurements need top be known precisely. When probabilistic models are known only partially, possibility theory provides an alternative approach. The tutorial will formulate Bayesian-like possibilistic tracking algorithms and demonstrate their performance.",
      "- Bayesian simultaneous localisation and mapping: Simultaneous localisation and mapping (SLAM) can be formulated as a sequential Bayesian estimation problem, where a moving robot, equipped with a ranging sensor(s) and using odometry data, gradually creates a map of an unknown environment. The tutorial will explain the Bayesian SLAM algorithms (including the famous Gmapping algorithm) in the context of both feature-based and occupancy grid maps.",
    ],
    time: "Afternoon (02:30 PM to 05:30 PM)",
  },
  {
    title: "Information fusion using belief functions",
    lecturers: [
      "Frédéric Pichon - Université Artois (France)",
      "Anne-Laure Jousselme - CS Group (France)",
    ],
    abstract: [
      "Information fusion is one of the key applications of the theory of belief functions (aka evidence theory or Dempster-Shafer theory), as show the regular sessions on belief functions at the FUSION conference. This tutorial will provide an opportunity for students and researchers to learn about fundamental and advanced aspects of the multi-source (either sensors or humans) information fusion within the theory of belief functions. Rather than surveying the different combination rules, this tutorial will specifically address the problem of combining information from partially reliable sources, explaining how to properly use meta-knowledge about the sources reliability in the fusion process. A general approach to information fusion will be presented, allowing for various forms of the notion of reliability and reinforcing the relevance of belief function theory for information fusion. Means to tackle practical fusion problems will also be provided. When meta-knowledge about the source reliability is not available, the validity of assumptions on the source reliability can be evaluated thanks to the notion of consistency which provides an estimation of the credibility of information. One interpretation of the conflict (or lack of consistency) between sources is indeed that it is due to the unreliability of some of the sources involved in the reasoning. The second part of the tutorial will present a survey and recent advances on both unary and N-ary measures of uncertainty with belief functions. A general presentation of entropy measures will be provided, extending to cross-entropy, conflict and distance measures, highlighting links, similarities and differences between them. These measures enable us to quantify notions of informativeness, specificity, accuracy, to name a few. Each theoretical concept will be illustrated by running examples from several applications.",
    ],
    time: "Morning (10 AM to 01 PM)",
  },
  {
    title: "Multiagent and multiobject information fusion",
    lecturers: [
      "Luigi Chisci - Università di Firenze (Italy)",
      "Alfonso Farina - Leonardo Company (Italy)",
      "Lin Gao - University of Electronic Science and Technology of China",
    ],
    abstract: [
      "The course will provide an overview of advanced research in information fusion, specifically concerning the two topics of multiagent and multiobject information fusion. Multiagent information fusion deals with a network of agents with sensing, processing and communication capabilities that aim to cooperatively monitor a given system of interest. Multiobject estimation aims to detect an unknown number of objects present in a given area and estimate their states. Special attention will be devoted to the Kullback-Leibler average paradigm for fusion of possibly correlated information from multiple agents and on the random-finite-set paradigm for the statistical representation of multiple objects. Applications to distributed cooperative surveillance, monitoring and navigation tasks will be discussed.",
    ],
    time: "Afternoon (02:30 PM to 05:30 PM)",
  },
  {
    title:
      "Multitarget Tracking and Multisensor Information Fusion: Recently Developed Advanced Algorithms",
    lecturers: ["Yaakov Bar-Shalom - University of Connecticut (USA)"],
    abstract: [
      "This tutorial will provide to the participants several of the latest state-of-the-art advanced algorithms to estimate the states of multiple targets in clutter and multisensor information fusion. These form the basis of automated decision systems for advanced surveillance and targeting.",
      'Advanced algorithms, including the track-to-track fusion from heterogeneous sensors and the cross-covariance between different dimension state space estimators based on the "mapped process noise" between active and passive sensors are discussed. Optimal measurement extraction from optical sensors, together with their accuracies. The Maximum Likelihood Probabilistic Data Association algorithm for VLO targets is presented together with its application to real data, where it is shown to provide earlier track detection compared to the MHT.',
    ],
    time: "Morning (10 AM to 01 PM)",
  },
];
</script>

<style>
div.divider {
  width: 100%;
  height: 4px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  background-color: #efefef;
}
</style>
