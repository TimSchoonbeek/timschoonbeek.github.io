export const siteConfig = {
  name: "Tim J. Schoonbeek",
  title: "PhD Student in Computer Vision & Machine Learning",
  description: "Portfolio website of Tim J. Schoonbeek - PhD Student in Computer Vision & Machine Learning",
  accentColor: "#1d4ed8",
  social: {
    email: "t.j.schoonbeek@gmail.com",
    linkedin: "https://www.linkedin.com/in/timschoonbeek",
    github: "https://github.com/TimSchoonbeek",
    scholar: "https://scholar.google.com/citations?user=h_YDH0YAAAAJ",
  },
  aboutMe:
    "I am Tim Schoonbeek, a PhD candidate at ASML and Eindhoven University of Technology (graduating Nov 2025), where I develop multimodal AI for computer vision and augmented reality in industrial settings. My work spans scalable video understanding, defect detection, and human–AI collaboration, with multiple patents and publications and experience at industrial research divisions (Microsoft, ASML, Honda). I am passionate about turning cutting-edge research into real-world impact. Outside the lab, I am usually on (or tinkering with) a motorcycle, or learning Portuguese.",
  skills: ["Computer Vision", "Machine Learning", "AI for Manufacturing", "Augmented Reality", "Human-Computer Interaction", "Video Understanding", "Semi-Supervised Learning", "Domain Adaptation", "Imbalanced Classification", "Foundation Models"],
  publications: [
    {
      title: "Supervised Representation Learning towards Generalizable Assembly State Recognition",
      authors: "<strong>Tim J. Schoonbeek</strong>, Goutham Balachandran, Hans Onvlee, Tim Houben, Shao-Hsuan Hung, Jacek Kustra, Peter H.N. de With, Fons van der Sommen",
      venue: "IEEE Robotics and Automation Letters (RA-L) and ICRA 2025",
      description: "We propose a supervised representation learning approach for generalizable assembly state recognition in manufacturing environments. Our method learns robust features that can generalize across different assembly scenarios and conditions.",
      link: "/state_rec.html",
      tags: ["Computer Vision", "Representation Learning", "Assembly Recognition"],
      image: "/publications/state_reg_teaser.png"
    },
    {
      title: "Find the Assembly Mistakes: Error Segmentation for Industrial Applications",
      authors: "Dan Lehman*, <strong>Tim J. Schoonbeek</strong>*, Shao-Hsuan Hung, Jacek Kustra, Peter H.N. de With, Fons van der Sommen (*equal contribution)",
      venue: "ECCV 2024 (Vision-based InduStrial InspectiON)",
      description: "We present a novel approach for automatically detecting and segmenting assembly errors in industrial settings. Our method can identify various types of mistakes during manufacturing processes, improving quality control.",
      link: "/error_seg.html",
      tags: ["Error Detection", "Segmentation", "Industrial AI"],
      image: "/publications/error_seg_architecture.png"
    },
    {
      title: "IndustReal: A Dataset for Procedure Step Recognition Handling Execution Errors in Egocentric Videos in an Industrial-Like Setting",
      authors: "<strong>Tim J. Schoonbeek</strong>, Tim Houben, Hans Onvlee, Peter H.N. de With, Fons van der Sommen",
      venue: "WACV 2024",
      description: "We introduce IndustReal, a comprehensive dataset for procedure step recognition in egocentric videos. We also present the new Procedure Step Recognition (PSR) task and evaluation metrics.",
      link: "/industreal.html",
      tags: ["Dataset", "Egocentric Vision", "Procedure Recognition"],
      image: "/publications/industreal.png"
    },
    {
      title: "Beyond Action Recognition: Extracting Meaningful Information from Procedure Recordings",
      authors: "<strong>Tim J. Schoonbeek</strong>, Hans Onvlee, Pierluigi Frisco, Peter H.N. de With, Fons van der Sommen",
      venue: "IEEE VR 2023 (short paper)",
      description: "We explore methods to extract meaningful procedural information beyond simple action recognition from video recordings. Our approach provides richer understanding of complex manufacturing and maintenance procedures.",
      link: "/beyondAR.html",
      tags: ["Procedure Analysis", "Video Understanding", "Augmented Reality"],
      image: "/publications/beyondAR.png"
    },
    {
      title: "Augmented Reality for Automatically Generating Robust Manufacturing and Maintenance Logs",
      authors: "<strong>Tim J. Schoonbeek</strong>, Pierluigi Frisco, Hans Onvlee, Peter H.N. de With, Fons van der Sommen",
      venue: "London Imaging Meeting 2022 (oral presentation)",
      description: "We present a proof-of-concept augmented reality system that automatically generates standardized logs for manufacturing and maintenance procedures. The system reduces manual logging overhead while improving consistency and searchability.",
      link: "/automaticlogging.html",
      tags: ["Augmented Reality", "Automatic Logging", "Manufacturing"],
      image: "/publications/automaticlogging.png"
    },
    {
      title: "Learning to Predict Collision Risk from Simulated Video Data",
      authors: "<strong>Tim J. Schoonbeek</strong>, Fabrizio J. Piva, Hamid R. Abdolhay, Gijs Dubbelman",
      venue: "IEEE IV 2022 (single track oral presentation)",
      description: "We develop a machine learning approach to predict collision risk from simulated video data. Our method demonstrates effective sim-to-real transfer for autonomous driving safety applications.",
      link: "/risknet.html",
      tags: ["Collision Prediction", "Autonomous Driving", "Sim-to-Real"],
      image: "/publications/risknet.png"
    },
  ],
  experience: [
    {
      company: "ASML Research, Eindhoven",
      title: "PhD Researcher",
      dateRange: "Sept. 2021 - Nov. 2025",
      logo: "/logos/asml_square.png",
      bullets: [
        "PhD project on automatic extraction of relevant and meaningful information from procedural actions within an industrial setting",
        "Filed patents, published peer-reviewed articles, and contributed to the ASML Technology Conference, the world's largest developer event",
        "Held lectures on efficient video recognition and supervised three graduate students' thesis projects",
      ],
    },
    {
      company: "Microsoft Research, Redmond",
      title: "Research Intern",
      dateRange: "June 2025 - Sept. 2025",
      logo: "/logos/microsoft_square.png",
      bullets: [
        "Research group: Interactive Multimodal AI Systems",
        "Developing real-time multimodal systems with LLM-powered perception to create benchmarks for situated intelligence for task assistance",
        "Building models of social cues (turn-taking, engagement, attention) from large datasets while collaborating with cross-disciplinary teams",
      ],
    },
    {
      company: "Honda Research Institute Europe GmbH, Frankfurt",
      title: "Internship",
      dateRange: "Mar. 2020 - July 2020",
      logo: "/logos/hri_square.png",
      bullets: [
        "Interaction-Aware Trajectory Prediction Using Graph Neural Networks",
        "Researched spatio-temporal graph neural networks for trajectory prediction of surrounding vehicles in highway driving scenarios",
      ],
    },
    {
      company: "Automotive Technology InMotion, Helmond",
      title: "Race Engineer - Part-time (Student Team)",
      dateRange: "Sept. 2018 - Sept. 2019",
      logo: "/logos/inmotion_square.png",
      bullets: [
        "Performed and optimized drive cycle simulations for an electric endurance racing car",
      ],
    },
  ],
  education: [
    {
      school: "Eindhoven University of Technology, Eindhoven",
      degree: "PhD",
      dateRange: "Sept. 2021 - Nov. 2025",
      logo: "/logos/tue_square.png",
      achievements: [
        "Title: Advanced Augmented Reality Solutions for AI-based Servitization",
        "Electrical Engineering Faculty",
        "Doctoral project funded by ASML on industrial procedure understanding using computer vision and machine learning algorithms",
      ],
    },
    {
      school: "University of Cambridge, Cambridge",
      degree: "Visiting Researcher",
      dateRange: "Oct. 2024 - April 2025",
      logo: "/logos/cambridge_square.png",
      achievements: [
        "Conducted research on enhancing human-robot interaction, focusing on AI systems to assist industrial operators in procedure execution",
        "Designed computer vision algorithms for quality inspection and AR support systems; conducted user studies with AR glasses",
        "Reached the finals (top 2.5%) in the OxBridge AI Startup Challenge, a competition between students from Cambridge and Oxford",
      ],
    },
    {
      school: "International Summer School, Matera",
      degree: "Extended Reality and Artificial Intelligence",
      dateRange: "July 2023",
      logo: "/logos/tue_square.png",
      achievements: [
        "Completed courses on the intersection of AI & extended reality (XR) from Prof. Rita Cucchiara and Prof. Joaquim Jorge, amongst others",
        "Pro-actively took up the role as a link between the programmers and designers in a multidisciplinary project, besides my technical roles",
        "Won the best project award for our work on an XR app for engagement with cultural heritage",
      ],
    },
    {
      school: "Eindhoven University of Technology, Eindhoven",
      degree: "M.Sc. in Automotive Engineering",
      dateRange: "Feb. 2019 - May 2021",
      logo: "/logos/tue_square.png",
      achievements: [
        "Specialization: Mobile Perception Systems",
        "Earned the cum laude honours distinction for a 4.0 GPA (8.5/10)",
        "Master thesis 'Learning to Predict Collision Risk from Simulated Optical Flow' awarded a 9.0/10.0",
        "Published paper, singled out among the top 5% of submissions for oral presentation at the 2022 IEEE Intelligent Vehicles Symposium",
      ],
    },
    {
      school: "Eindhoven University of Technology, Eindhoven",
      degree: "B.Sc. in Electrical Engineering",
      dateRange: "Sept. 2015 - Feb. 2019",
      logo: "/logos/tue_square.png",
      achievements: [
        "Automotive Track",
        "Bachelor thesis on depth estimation from disparity and segmented images awarded a 8.5/10",
      ],
    },
  ],
};
