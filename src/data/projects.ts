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
    tagline: "AI-powered landing pages + automated Google Ads",
    description:
      "A SaaS platform that generates landing pages and launches Google Ads campaigns based on business data and keyword analysis.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Google Ads API", "AI"],
    githubUrl: "https://github.com/RoniTwito08/Smarketing-final",
    liveUrl: "",
    imageUrl: smarketingImg1,
    images: [smarketingImg1, smarketingImg2, smarketingImg3, smarketingImg4],
    featured: true,
  },
  {
    title: "CWC – Content With Coffee",
    tagline: "Instagram-like social network for coffee lovers",
    description:
      "Users can create posts, like content, and share coffee experiences in a community-focused feed.",
    tech: ["React", "TypeScript", "Node.js", "Express","Socket.IO","Gemini API", "MongoDB","AI","image generator AI"],
    githubUrl: "https://github.com/RoniTwito08/CWC---content-with-coffee",
    liveUrl: "",
    imageUrl: cwcImg1,
    images: [cwcImg1, cwcImg2, cwcImg3, cwcImg4],
  },
  {
    title: "Moveo-CodeBlock",
    tagline: "Real-time collaborative coding with mentor & students",
    description:
      "A multi-user coding platform with roles, live sync via Socket.IO, Monaco editor, and mentor tools.",
    tech: ["React", "TypeScript", "Socket.IO", "Monaco Editor", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/RoniTwito08/Moveo-CodeBlock",
    liveUrl: "",
    imageUrl: moveoImg1,
    images: [moveoImg1, moveoImg2, moveoImg3],
  },
  {
    title: "JobTrackr",
    tagline: "Full-stack job application tracker for organized job search",
    description:
      "A centralized platform for job seekers to organize, manage, and monitor job applications with real-time status tracking, search functionality, and insightful analytics.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth", "Axios", "CSS Modules"],
    githubUrl: "",
    liveUrl: "https://thejobtrackr.netlify.app",
    imageUrl: jobtrackerImg1,
    images: [jobtrackerImg1, jobtrackerImg2, jobtrackerImg3, jobtrackerImg4],
    featured: true,
  },
];
