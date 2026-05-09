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

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  images?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Smarketing",
    tagline: "AI-powered SaaS for landing pages & Google Ads automation",
    description:
      "A full-stack SaaS platform that generates custom landing pages and launches automated Google Ads campaigns from business data and keyword analysis. Pitched on a Shark Tank-style investment show, validating real-world market demand.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Google Ads API", "AI"],
    githubUrl: "https://github.com/RoniTwito08/Smarketing-final",
    imageUrl: smarketingImg1,
    images: [smarketingImg1, smarketingImg2, smarketingImg3, smarketingImg4],
    featured: true,
  },
  {
    title: "DevMentor AI",
    tagline: "AI-powered technical interview preparation platform",
    description:
      "An interview prep platform that simulates real technical interviews using AI. Users choose topics and difficulty levels for personalized sessions covering theory and coding questions, with session history, scores, and progress tracking.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AI", "REST API"],
    imageUrl: devmentorImg1,
    images: [devmentorImg1, devmentorImg2, devmentorImg3, devmentorImg4, devmentorImg5],
    featured: true,
  },
  {
    title: "JobTrackr",
    tagline: "Full-stack job application tracker with auth & analytics",
    description:
      "A production-deployed platform for organizing job applications with JWT + Google OAuth authentication, real-time status tracking, search and filtering, and a visual analytics dashboard. Live at thejobtrackr.netlify.app.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth"],
    liveUrl: "https://thejobtrackr.netlify.app",
    imageUrl: jobtrackerImg1,
    images: [jobtrackerImg1, jobtrackerImg2, jobtrackerImg3, jobtrackerImg4],
    featured: true,
  },
  {
    title: "CWC – Content With Coffee",
    tagline: "Full-stack social network for coffee enthusiasts",
    description:
      "A feature-rich social platform with real-time messaging via Socket.IO, AI-generated image content using the Gemini API, and a community-driven feed with posts, likes, and user interactions.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "Gemini API", "MongoDB"],
    githubUrl: "https://github.com/RoniTwito08/CWC---content-with-coffee",
    imageUrl: cwcImg1,
    images: [cwcImg1, cwcImg2, cwcImg3, cwcImg4],
  },
  {
    title: "Moveo CodeBlock",
    tagline: "Real-time collaborative coding with mentor & student roles",
    description:
      "A multi-room coding environment where mentors and students collaborate in real time via Socket.IO. Features Monaco Editor integration, live code synchronization, and room-based session management.",
    tech: ["React", "TypeScript", "Socket.IO", "Monaco Editor", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/RoniTwito08/Moveo-CodeBlock",
    imageUrl: moveoImg1,
    images: [moveoImg1, moveoImg2, moveoImg3],
  },
];
