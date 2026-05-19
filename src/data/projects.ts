import smarketingImg1 from "../assets/projects/smarketing/smarketing1.png";
import smarketingImg2 from "../assets/projects/smarketing/smarketing2.png";
import smarketingImg3 from "../assets/projects/smarketing/smarketing3.png";
import smarketingImg4 from "../assets/projects/smarketing/smarketing4.png";
import cwcImg1 from "../assets/projects/cwc/cwc1.png";
import cwcImg2 from "../assets/projects/cwc/cwc2.png";
import cwcImg3 from "../assets/projects/cwc/cwc3.png";
import cwcImg4 from "../assets/projects/cwc/cwc4.png";
import moveoImg1 from "../assets/projects/moveo/moveo1.png";
import moveoImg2 from "../assets/projects/moveo/moveo2.png";
import moveoImg3 from "../assets/projects/moveo/moveo3.png";
import jobtrackerImg1 from "../assets/projects/jobtrackr/jobtrackr1.png";
import jobtrackerImg2 from "../assets/projects/jobtrackr/jobtrackr2.png";
import jobtrackerImg3 from "../assets/projects/jobtrackr/jobtrackr3.png";
import jobtrackerImg4 from "../assets/projects/jobtrackr/jobtrackr4.png";
import devmentorImg1 from "../assets/projects/devmentor/devmentor1.png";
import devmentorImg2 from "../assets/projects/devmentor/devmentor2.png";
import devmentorImg3 from "../assets/projects/devmentor/devmentor3.png";
import devmentorImg4 from "../assets/projects/devmentor/devmentor4.png";
import devmentorImg5 from "../assets/projects/devmentor/devmentor5.png";
import dohotImg1 from "../assets/projects/Dohot/1.png";
import dohotImg2 from "../assets/projects/Dohot/2.png";
import dohotImg3 from "../assets/projects/Dohot/3.png";
import dohotImg4 from "../assets/projects/Dohot/4.png";
import dohotImg5 from "../assets/projects/Dohot/5.png";
import dohotImg6 from "../assets/projects/Dohot/6.png";
import dohotImg7 from "../assets/projects/Dohot/7.png";
import dohotImg8 from "../assets/projects/Dohot/8.png";
import dohotImg9 from "../assets/projects/Dohot/9.png";
import dohotImg10 from "../assets/projects/Dohot/10.png";
import dohotImg11 from "../assets/projects/Dohot/11.png";
import dohotImg12 from "../assets/projects/Dohot/12.png";

export type Project = {
  title: string;
  subtitle?: string;
  tagline: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  images?: string[];
  mobileImages?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Dohot",
    subtitle: "AI Powered Reporting Platform",
    tagline:
      "AI-powered mobile platform for creating professional technician reports, quotations, and PDF documents directly from the field.",
    description:
      "A full-stack mobile platform for technicians and service providers that enables fast, professional report generation from any location.",
    bullets: [
      "Developed a full-stack mobile platform for technicians and service providers",
      "Built dynamic multi-step report creation flows optimized for mobile devices",
      "Implemented AI-assisted text generation for professional report writing",
      "Generated branded PDF reports with signatures, images, and customer details",
      "Integrated Supabase for authentication, PostgreSQL database management, and cloud storage",
      "Designed a modern RTL Hebrew user experience focused on simplicity and speed",
      "Built scalable REST APIs using Node.js and Express",
      "Implemented secure authentication and cloud-based document management",
    ],
    tags: ["Mobile App", "AI-Powered"],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "AI APIs",
      "PDF Generation",
      "RTL Support",
    ],
    githubUrl: "https://github.com/RoniTwito08/Dohot",
    mobileImages: [
      dohotImg1,
      dohotImg2,
      dohotImg3,
      dohotImg4,
      dohotImg5,
      dohotImg6,
      dohotImg7,
      dohotImg8,
      dohotImg9,
      dohotImg10,
      dohotImg11,
      dohotImg12,
    ],
    featured: true,
  },
  {
    title: "Smarketing",
    subtitle: "AI Landing Pages & Google Ads Automation",
    tagline: "AI-powered SaaS for landing pages & Google Ads automation",
    description:
      "A full-stack SaaS platform that generates custom landing pages and launches automated Google Ads campaigns from business data and keyword analysis.",
    bullets: [
      "Built a full-stack SaaS platform automating landing page generation and ad campaigns",
      "Integrated Google Ads API for programmatic campaign creation and keyword targeting",
      "Implemented AI-driven content generation for personalized marketing copy",
      "Pitched the product on a national Shark Tank-style investment show",
      "Designed scalable REST APIs with Node.js and Express backed by MongoDB",
      "Developed a responsive React + TypeScript frontend with smooth onboarding flows",
    ],
    tags: ["SaaS", "AI-Powered", "TV Pitch"],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Ads API",
      "AI",
    ],
    githubUrl: "https://github.com/RoniTwito08/Smarketing-final",
    imageUrl: smarketingImg1,
    images: [smarketingImg1, smarketingImg2, smarketingImg3, smarketingImg4],
    featured: true,
  },
  {
    title: "DevMentor AI",
    subtitle: "AI-Powered Interview Simulation Platform",
    tagline: "AI-powered technical interview preparation platform",
    description:
      "An interview prep platform that simulates real technical interviews using AI. Users choose topics and difficulty levels for personalized sessions with session history and progress tracking.",
    bullets: [
      "Built an AI-powered platform simulating real technical interview sessions",
      "Designed dynamic topic and difficulty selection for fully personalized preparation",
      "Implemented session history, scoring system, and multi-session progress tracking",
      "Integrated AI APIs for generating theory questions and live coding challenges",
      "Developed a full-stack app with React, TypeScript, Node.js, Express, and MongoDB",
      "Built a clean REST API with JWT-based authentication and protected routes",
    ],
    tags: ["AI", "Education"],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
      "REST API",
    ],
    githubUrl: "https://github.com/RoniTwito08/DevMentor",
    imageUrl: devmentorImg1,
    images: [
      devmentorImg1,
      devmentorImg2,
      devmentorImg3,
      devmentorImg4,
      devmentorImg5,
    ],
    featured: true,
  },
  {
    title: "JobTrackr",
    subtitle: "Full-Stack Job Application Tracker",
    tagline: "Full-stack job application tracker with auth & analytics",
    description:
      "A production-deployed platform for organizing job applications with JWT + Google OAuth authentication, real-time status tracking, and a visual analytics dashboard.",
    bullets: [
      "Deployed a full-stack job tracking app live at thejobtrackr.netlify.app",
      "Implemented JWT-based authentication alongside Google OAuth login",
      "Built real-time application status tracking with search and advanced filtering",
      "Designed a visual analytics dashboard for actionable job search insights",
      "Architected scalable REST APIs with Node.js, Express, and MongoDB",
      "Developed a responsive React + TypeScript frontend with Vite for fast builds",
    ],
    tags: ["Web App", "Deployed"],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google OAuth",
    ],
    githubUrl: "https://github.com/RoniTwito08/jobTrackr",
    imageUrl: jobtrackerImg1,
    images: [jobtrackerImg1, jobtrackerImg2, jobtrackerImg3, jobtrackerImg4],
    featured: true,
  },
  {
    title: "CWC – Content With Coffee",
    subtitle: "Real-Time Social Network with AI Content",
    tagline: "Full-stack social network for coffee enthusiasts",
    description:
      "A feature-rich social platform with real-time messaging, AI-generated content, and a community-driven feed.",
    bullets: [
      "Built a full-stack social network with real-time messaging powered by Socket.IO",
      "Integrated Gemini API for AI-generated image content and creative post features",
      "Developed a community feed with posts, likes, and user interaction flows",
      "Implemented secure authentication and user profile management",
      "Designed a responsive React + TypeScript frontend with smooth real-time updates",
    ],
    tags: ["Social", "Real-time", "AI"],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "Gemini API",
      "MongoDB",
    ],
    githubUrl: "https://github.com/RoniTwito08/CWC---content-with-coffee",
    imageUrl: cwcImg1,
    images: [cwcImg1, cwcImg2, cwcImg3, cwcImg4],
  },
  {
    title: "Moveo CodeBlock",
    subtitle: "Collaborative Coding Environment",
    tagline: "Real-time collaborative coding with mentor & student roles",
    description:
      "A multi-room coding environment where mentors and students collaborate in real time via Socket.IO with Monaco Editor integration.",
    bullets: [
      "Built a multi-room collaborative coding environment with distinct mentor and student roles",
      "Integrated Monaco Editor for a professional in-browser code editing experience",
      "Implemented real-time bi-directional code synchronization via Socket.IO",
      "Designed room-based session management for organized collaboration workflows",
      "Developed a Node.js + Express backend with MongoDB for room and session persistence",
    ],
    tags: ["Dev Tool", "Real-time"],
    tech: [
      "React",
      "TypeScript",
      "Socket.IO",
      "Monaco Editor",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    githubUrl: "https://github.com/RoniTwito08/Moveo-CodeBlock",
    imageUrl: moveoImg1,
    images: [moveoImg1, moveoImg2, moveoImg3],
  },
];
