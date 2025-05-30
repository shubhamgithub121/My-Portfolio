// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  youtube,
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
  docker,
  instagram,
  shubham,

  turflo,
  unacademy,
  lensroom,
  gdsc,
  
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "Github",
    title: "Github",
    link: "https://github.com/shubhamgithub121",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
 
  
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Youtuber",
    icon: youtube,
  },
 
  {
    title: "GDSC Lead",
    icon: gdsc,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Fullstack Developer Intern",
    company_name: "Turflo",
    icon: turflo,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed and maintained full-stack web applications using React.js, Node.js, and related technologies.",
      "Worked closely with designers and backend teams to build scalable and user-friendly features.",
      "Integrated REST APIs and optimized frontend performance for responsiveness and speed.",
      "Collaborated in Agile sprints and contributed to code reviews for continuous improvement."
    ],
  },
 
  {
    title: "GDSC Lead",
    company_name: "Google Developer Student Clubs, DTU",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
       "Selected as the first GDSC Lead from DTU while in 3rd year — a rare and prestigious selection.",
    "Led the official Google Developer Student Club at DTU with a team of 270+ active members.",
    "Organized 20+ impactful technical events, workshops, and hackathons on Web, ML, and Cloud technologies.",
    "Facilitated DTU’s participation in the Google Solution Challenge and guided multiple teams through it.",
    "Built a strong core team culture focused on innovation, collaboration, and real-world impact.",
    "Collaborated with Google teams and industry experts to provide mentorship and exposure to students."
    ],
  },
   
  {
    title: "Frontend Developer Intern",
    company_name: "Lensroom",
    icon: lensroom,
    iconBg: "#383E56",
    date: "jan 2024 - Aug 2024",
    points: [
      "Worked on the company’s web platform to enhance UI/UX using React.js and Tailwind CSS.",
      "Integrated APIs and developed responsive components for mobile and desktop views.",
      "Collaborated with the design and backend teams to ensure seamless user experience."
    ],
  },
  {
    title: "Physics Educator",
    company_name: "Unacademy",
    icon: unacademy,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Taught Physics to JEE aspirants via structured online classes and live sessions.",
      "Created video lessons and practice materials that enhanced student understanding and engagement.",
      "Utilized digital tools to track student progress and provided personalized feedback."
    ],
  },

] as const;


// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "As the GDG President, Shubham brought unmatched energy and leadership. His ability to build a thriving tech community while staying grounded in innovation is truly rare.",
    name: "Nikita Gandhi",
    designation: "Regional Head",
    company: "GDG India",
    image: user1,
  },
  {
    testimonial:
      "Shubham isn’t just a developer—he’s a visionary. The website he built for our launch was not only pixel-perfect, but also optimized for speed and scalability.",
    name: "Ganesh",
    designation: "Regional Manager",
    company: "Google",
    image: user2,
  },
  {
    testimonial:
      "During his internship, Shubham consistently impressed us with his frontend expertise and quick problem-solving skills. His React components were clean, scalable, and production-ready.",
    name: "Daksh",
    designation: "CTO",
    company: "Turflo",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Tomato",
    description:
      "Tomato is a full-stack food delivery web app inspired by Zomato, built with React, Node.js, and MongoDB, featuring user authentication, restaurant listings, cart, and order management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://tomato-app2.vercel.app/",
  },
  {
    name: "Prithvi",
    description:
      "A plastic waste recycling platform built with HTML, CSS, and JavaScript, enabling users to schedule pickups and track their contributions toward a cleaner environment.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "javacript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://shubhamgithub121.github.io/GDSC/index.html",
  },
  {
    name: "3d-Animated website",
    description:
      "An interactive and visually striking portfolio built using HTML, CSS, and JavaScript. Features scroll-triggered animations, smooth transitions, and modern UI principles to ensure an engaging user experience across devices.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://candid-kitten-36fe92.netlify.app/",
  },
  {
    name: "AI Expense Tracker",
    description:
      "A smart personal finance management tool developed using React.js and Node.js with PostgreSQL for backend data storage. Users can add income, log categorized expenses, and view real-time balance updates through interactive graphs and stats.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://expense-tracker-brown-delta.vercel.app/"
  },
  {
    name: "OhMyCv",
    description:
      "AI-powered Resume Builder that generates personalized, professional resumes in seconds using modern design and intelligent content suggestions. Built with a focus on automation and user experience.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "vue.js",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/shubhamgithub121/AI-Resume-Builder",
    live_site_link: "https://ohmycv.app/editor/1748191478930",
  },
  {
    name: "GDG DTU Official Web Platform",
    description:
      "Built the GDG DTU official website using modern web technologies with a focus on performance, UI/UX, and scalability. Collaborated with a dynamic team under my leadership as GDSC President.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://youtube.com/@shubhamgoswami_?si=STRRWZA51QKykOt2",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shubham-goswami-44761725a/",
  },
  
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/shubhamgithub121",
  },

  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/shubhamm.123_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
] as const;
