import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  suven,
  docker,
  skola,
  django,
  java,
  python,
  meta,
  starbucks,
  colabera,
  tesla,
  shopify,
  estate,
  handsign,
  faceex,
  sync,
  carrent,
  jobit,
  tripguide,
  threejs,
  anigal,
  login_page
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine-L Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Jr. Associate",
    company_name: "The CodingCult",
    icon: colabera,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: ["Implemented a team, task and project management system, enabling 40% faster task assignment and improving the efficiency of time tracking by 35%.",
      "Designed an intuitive user interface with role-based access, increased user engagement by 30%",
      "improved progress tracking accuracy by 25%, and optimized resource allocation efficiency by 20%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "SYNC Intern",
    icon: sync,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Constructed 4 web applications utilizing the robust Django framework.",
      "Engineered a Python-powered solution for server-side logic and database manipulation, streamlining data retrieval processes and enhancing system efficiency by 50%.",
      "Revamped user interfaces with meticulous HTML, CSS, and JavaScript enhancements, leading to a 30% drop-in bounce rates and a 20% boost in average session durations, improving user experience.",

    ],
  },
  {
    title: "Web Developer",
    company_name: "Suven Consultancy PVT. LTD.",
    icon: suven,
    iconBg: "#E6DEDD",
    date: "July 2022 - Aug 2022",
    points: [
      "Developed and implemented 4 web applications using Django framework.",
      "Employed Python for server-side logic and data access, resulting in a 25% decrease in data processing time.",
      "Engineered an API connection to centralize data storage in a SQL database, reducing data retrieval time by 40% and improving system performance for 1000+ daily users.",
      "Utilized Django features to streamline ORM (Object-Relational Mapping), routing, views, and develop RESTful APIs, resulting in a 30% reduction in development time.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Motivated Master's student with a strong foundation in academics, eager to apply knowledge and skills to impactful real-world projects.",
    name: "Chandigarh University",
    designation: "Master",
    company: "Computer Application",
    image: "MCA",
    date: "2024-26"
  },
  {
    testimonial:
      "Dedicated and passionate Bachelor's student eager to leverage academic knowledge and skills in real-world projects.",
    name: "COER University",
    designation: "Bachelor",
    company: "Computer Application",
    image: "BCA",
    date: "2021-24"
  },
  {
    testimonial:
      "Aspiring 12th-grade student passionate about technology and eager to apply my skills in innovative projects.",
    name: "Shivdale School",
    designation: "Sudent",
    company: "PCM + Computer Science",
    image: "12th",
    date: "2019-20"
  },
  {
    testimonial:
      "Dedicated 10th-grade student excited about learning new technologies and ready to take on creative challenges.",
    name: "Bal Bharti BHEL",
    designation: "Student",
    company: "CORE Subjects + Info. Technology",
    image: "10th",
    date: "2017-18"
  },
];

const projects = [
  {
    name: "Elearning Platform",
    description:
      "Built an E-Learning platform using Python and Django, empowering digital education. Users registered, accessed course materials, took online assessments, and generate certificate. Demonstrated expertise in web development.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: skola,
    source_code_link: "https://github.com/SuyashSharma1710/E_Learning_PROJECT/",
  },
  {
    name: "Anigal Photo Gallery App",
    description:
      "Anigal photo gallery app, built exclusively for landscape display. It leverages React, Vite, Tailwind CSS, and Framer Motion to create an interactive and visually engaging gallery experience.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: anigal,
    source_code_link: "https://github.com/SuyashSharma1710/Anigal-React",
  },
  {
    name: "Estate Agency",
    description:
      "Web application that enables users to search for nearby properties for sale, view estimated price ranges for property, and locate available land based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://github.com/SuyashSharma1710/estate-agency",
  },
  {
    name: "Hand Sign Recog",
    description:
      "Hand Gesture Recognition is a project focused on developing a computer vision system that can accurately detect and interpret human hand sign language in real-time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: handsign,
    source_code_link: "https://github.com/SuyashSharma1710/Hand_Gesture_Recognition",
  },
  {
    name: "Facial Expression Recog",
    description:
      "Facial Expression Recognition (FER) is a computer vision task aimed at identifying and categorizing emotional expressions depicted on a human face.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "notebook",
        color: "pink-text-gradient",
      },
    ],
    image: faceex,
    source_code_link: "https://github.com/SuyashSharma1710/face_expression_recognition_in_jupyter",
  },
  {
    name: "Glassmorphosis Login Page",
    description:
      "A Glassmorphism Login Page features a frosted glass effect, giving it a modern sleek look and validation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: login_page,
    source_code_link: "https://github.com/SuyashSharma1710/login-page-validated",
  },
];

export { services, technologies, experiences, testimonials, projects };
