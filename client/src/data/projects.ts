import payroll from "../assets/images/projects/WAHPayroll-preview.webp";
import findYourFur from "../assets/images/projects/findyourfur-preview.webp";
import constellate from "../assets/images/projects/constellate-preview.webp";

type Project = {
  title: string;
  category: string;
  description: string;
  contribution?: string;
  technologies: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  demo?: string;
  demoLabel?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    title: "Constellate",
    category: "COLLABORATIVE STUDY ROOM",
    description:
      "A real-time collaborative study room with a synchronized Pomodoro timer and live presence, bringing shared focus into an online space.",
    contribution:
      "Built the React interface and Node.js backend, including synchronized Pomodoro timers, live presence, and persistent room data.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "Supabase",
      "PostgreSQL",
      "Redis",
    ],
    image: {
      src: constellate,
      alt: "Constellate entry page with create-room and join-room panels and a sign-in link",
      width: 1440,
      height: 900,
      caption: "Constellate / Live application entry page",
    },
    demo: "https://constellate-pi.vercel.app/",
    demoLabel: "View Live Demo",
  },
  {
    title: "WAH Payroll",
    category: "INTERNSHIP PROJECT",
    description:
      "An attendance and payroll management system for Wireless Access for Health.",
    contribution:
      "Developed attendance workflows and validation during my internship, including daily attendance records, time-in and time-out functionality, and bulk saving.",
    technologies: ["React", "Express", "MySQL"],
    image: {
      src: payroll,
      alt: "WAH Payroll sign-in page from the existing project screenshot",
      width: 1200,
      height: 568,
      caption: "WAH Payroll / Sign-in page",
    },
    demo: "https://payroll.wah.ph/login",
    demoLabel: "View sign-in page",
  },
  {
    title: "Pet Adoption",
    category: "FINDYOURFUR / WEB PROGRAMMING CASE STUDY",
    description:
      "A pet adoption web application for browsing and filtering pets, submitting listings and adoption requests, and reviewing them through admin approval workflows.",
    contribution:
      "Worked on this web programming case study using HTML, CSS, JavaScript, and plain PHP.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB"],
    image: {
      src: findYourFur,
      alt: "FindYourFur homepage from the existing project screenshot",
      width: 1200,
      height: 575,
      caption: "FindYourFur / Homepage",
    },
    demo: "https://findyourfur.great-site.net",
    demoLabel: "View project",
  },
];
