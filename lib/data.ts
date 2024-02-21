import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import thriftyTable from "@/public/thrifty-table.jpeg";
import eventDing from "@/public/event-ding.png";
import appify from "@/public/appify.png"
import tia from "@/public/tia.png"
import genomic from "@/public/genomic-variant-explorer.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Summer Intern",
    location: "Philips Healthcare",
    description:
      "Assisted in the development and execution of the product roadmap for the genomic variant viewer, focusing on enhancing the user experience in viewing and analyzing large genomic samples and optimizing clinical workflows. Conducted market research and competitive analysis to identify industry trends. Defined a lean MVP, documented acceptance criteria, and led agile delivery of the product. Developed high quality landing pages and front end features using ReactJS, Next, CSS, and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - September 2023",
  },
  {
    title: "Senior Analyst",
    location: "Accenture",
    description:
      "Led cross-functional team of designers and engineers to develop a clean, interactive, and responsive user interface for a data visualization tool capable of fetching and displaying millions of data points in a grid format. Collaborated with product owners to translate business objectives into actionable product requirements documented in a comprehensive Product Requirement Document, prioritizing features and functionalities based on business needs and user feedback, ensuring effective resource allocation and timely delivery",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2021 - Aug 2022",
  },
  {
    title: "Software Developer",
    location: "Accenture",
    description:
      "Participated in user requirements gathering, design, implementation plan and pushing code to production environment. Engaged in code fixes and feature additions under the direction of senior developers. Drafted a detailed plan to decommission and migrate the application, communicating to the project manager any issues that could affect other aspects of the project",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2018 - Nov 2021",
  },
] as const;

export const projectsData = [
  {
    title: "ThriftyTable",
    description:
      "Thrift Table is an app that connects food donors with food recipients in the United States to provide a platform for people and restaurants to donate excess food to those in need, thereby reducing food waste and eventually helping to alleviate hunger.An efficient and equitable system for distributing excess food, to reduce waste and eliminate hunger in the United States.",
    tags: ["Figma", "Bootstrap"],
    icons: [
      "logos:figma",
      "logos:bootstrap",
    ],
    imageUrl: thriftyTable,
    githubLink: "https://www.figma.com/proto/MLtISQbeYKhbebj4PjZx6i/Thrifty-Table?node-id=5-51&starting-point-node-id=5%3A51&mode=design&t=T0u8ibTERUeRAimr-1",
    demoLink: "https://www.figma.com/proto/MLtISQbeYKhbebj4PjZx6i/Thrifty-Table?node-id=5-51&starting-point-node-id=5%3A51&mode=design&t=T0u8ibTERUeRAimr-1",
  },
  {
    title: "Genomic Variant Explorer",
    description:
      "Improved the user experience for navigation and interaction thereby providing seamless access to huge genomic data. Bioinformaticians received substantial support in conducting genomic variant analysis, including searching, filtering, sorting, and formatting for identifying causal mutations.",
    tags: ["ReactJS", "NodeJS", "Python", "Ag-Grid", "CSS", "C"],
    icons: [
      "devicon:react",
      "logos:nodejs",
      "devicon:python",
      "logos:aggrid",
      "vscode-icons:file-type-css",
      "vscode-icons:file-type-c"
    ],
    imageUrl: genomic,
    urlLink: "", //post demo link here
    githubLink: "https://github.com/sharmakartik11/ag-grid-react-package-example",
  },
  {
    title: "EventDing",
    description:
      "Engineered a next-generation event hosting website allowing Northeastern University administrators and students to host and book events respectively.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "devicon:mongodb",
      "logos:express",
      "logos:nodejs",
      "devicon:react",
    ],
    imageUrl: eventDing,
    urlLink: "https://eventding.vercel.app",
    githubLink: "https://github.com/sharmakartik11/EventDing",
  },
  {
    title: "Appify",
    description:
      "React application that enables the user to create a layout of an end to end mobile application on platforms such as iOS and Android in minutes without the need to code.",
    tags: ["Java", "Flutter", "JavaScript", "ReactJS", "CSS"],
    icons: ["logos:java", "logos:flutter", "logos:javascript", "logos:react", "vscode-icons:file-type-css"],
    imageUrl: appify,
    githubLink: "https://github.com/sharmakartik11/appify-ui",
  },
  {
    title: "TIA - The Interviewing Assistant",
    description:
      "Designed and developed a React application for a production-ready dynamic chatbot with adaptive questions across five difficulty levels to automate the interview process on topics such as Python, SQL, ReactJS, and Java.",
    tags: ["JavaScript", "React", "Python", "CSS"],
    icons: ["logos:javascript", "logos:react", "logos:python", "vscode-icons:file-type-css"],
    imageUrl: tia,
    githubLink: "",
  },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.  AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  // {
  //   title: "Techprowl Computer Auction",
  //   description:
  //     "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
  //   tags: ["Python", "Flask", "Bootstrap", "SQLite"],
  //   icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
  //   imageUrl: techprowlImg,
  //   githubLink: "https://github.com/ben04rogers/computer-auction",
  //   urlLink: "https://techprowl.herokuapp.com",
  // },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "Figma",
    icon: "logos:figma",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "NextJS",
    icon: "devicon:nextjs",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Trello",
    icon: "devicon:trello",
  },
  {
    name: "Jira",
    icon: "devicon:jira",
  },
] as const;
