// logo
import REACT from "../assets/reacticon.svg";
import Stripe from "../assets/stripe-svgrepo-com.svg";
import SASS from "../assets/sassicon.svg";
import Redux from "../assets/redux-svgrepo-com.svg";
import MySQL from "../assets/mysql-official.svg";
import TAILWIND from "../assets/tailwindicon.svg";
import ExpressJS from "../assets/expressiconwhite.svg";

// github repo
import Bookshop from "../assets/repo1.png";
import Markethub from "../assets/repo2.png";
import SARP from "../assets/repo3.jpg";

// school
import School1 from "../assets/sc1.png";
import School2 from "../assets/sc2.jpg";
import School3 from "../assets/sc3.jpg";
import School4 from "../assets/sc4.jpg";

// icon
import { FaHome } from "react-icons/fa"; // Home
import { GoDatabase } from "react-icons/go"; // Skills
import { GoProject } from "react-icons/go"; // Projects
import { GoCpu } from "react-icons/go"; // Educations
import { LuContact2 } from "react-icons/lu"; // Contact

export const navLinks = [
  { en: "Home", hash: "#home", icon: FaHome },
  { en: "Skills", hash: "#skills", icon: GoDatabase },
  { en: "Projects", hash: "#projects", icon: GoProject },
  { en: "Educations", hash: "#educations", icon: GoCpu },
  { en: "Contact", hash: "#contact", icon: LuContact2 },
] as const;

export type SectionName = (typeof navLinks)[number]["en"];

export const dataProject = [
  {
    id: 0,
    title: "markethub-ecommerce",
    desc: "This project i making about e-commerce fullstack website using reactjs, tailwindcss, stripe for payments gateway and strapi for backend.",
    techStack: [
      {
        id: 0,
        title: "ReactJS",
        image: REACT,
        class: "react",
      },
      {
        id: 1,
        title: "SASS",
        image: SASS,
        class: "sass",
      },
      {
        id: 2,
        title: "Redux Toolkit",
        image: Redux,
        class: "redux",
      },
      {
        id: 3,
        title: "Stripe",
        image: Stripe,
        class: "stripe",
      },
      {
        id: 4,
        title: "MySQL",
        image: MySQL,
        class: "mysql",
      },
    ],
    repoId: "0",
    repoImage: Markethub,
    repoDemo: "https://youtu.be/h8T0DD2XnQQ?si=HlrfNdi2E2yYGoji",
    repoGithub: "https://github.com/jonas4236/markethub-ecommerce",
  },
  {
    id: 1,
    title: "SARP-Project",
    desc: "'SARP' (Student Attendance Reporting Project) is my project created to enable parents to check their children's attendance.",
    techStack: [
      {
        id: 0,
        title: "ReactJS",
        image: REACT,
        class: "react",
      },
      {
        id: 1,
        title: "TailwindCSS",
        image: TAILWIND,
        class: "tailwindcss",
      },
      {
        id: 2,
        title: "ExpressJS",
        image: ExpressJS,
        class: "expressjs",
      },
      {
        id: 4,
        title: "MySQL",
        image: MySQL,
        class: "mysql",
      },
    ],
    repoId: "1",
    repoImage: SARP,
    repoDemo: "",
    repoGithub: "https://github.com/jonas4236/markethub-ecommerce",
  },
  {
    id: 2,
    title: "fullstack-bookshop",
    desc: "'SARP' is my project created to enable parents to check their children's attendance.",
    techStack: [
      {
        id: 0,
        title: "ReactJS",
        image: REACT,
        class: "react",
      },
      {
        id: 1,
        title: "TailwindCSS",
        image: TAILWIND,
        class: "tailwindcss",
      },
      {
        id: 2,
        title: "SASS",
        image: SASS,
        class: "sass",
      },
      {
        id: 3,
        title: "Redux Toolkit",
        image: Redux,
        class: "redux",
      },
      {
        id: 4,
        title: "MySQL",
        image: MySQL,
        class: "mysql",
      },
      {
        id: 5,
        title: "Stripe",
        image: Stripe,
        class: "stripe",
      },
    ],
    repoId: "1",
    repoImage: Bookshop,
    repoDemo: "https://youtu.be/0vHPQHUox8E?si=lIZy1MbcUCnxjQ8N",
    repoGithub: "https://github.com/jonas4236/markethub-ecommerce",
  },
];

export const dataAbout = [
  {
    id: 0,
    title: "Kindergarten level",
    subtitle: "Wat Nam Phueng School",
    detail: "I graduated from kindergarten at Wat Nam Phueng School in 2009.",
    date: "Year 2009",
    icon: School1,
  },
  {
    id: 1,
    title: "Elementary level",
    subtitle: "Bang Rachan Kindergarten School",
    detail:
      "When i was 6 - 12 years old i study in bang rachan kindergarten school and i graduated at 2016",
    date: "Year 2016",
    icon: School2,
  },
  {
    id: 2,
    title: "Middle school level",
    subtitle: "Ban Nong Lee Witthayakhom School",
    detail:
      "I was study in ban nong lee witthayakhom school for 3 years and graduated with Cumulative GPA: 2.76",
    date: "Year 2019",
    icon: School3,
  },
  {
    id: 3,
    title: "High school level",
    subtitle: "SingBuri Technical College",
    detail:
      "I am currently studying Computer Software at SBTC in my 5th year, with Computer Technical Department. and currently doing an internship",
    date: "Year 2024",
    icon: School4,
  },
];
