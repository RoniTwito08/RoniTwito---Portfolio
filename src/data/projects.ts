import smarketingImg from "../assets/projects/smarketing/smarketing1.png";
import cwcImg from "../assets/projects/cwc/cwc1.png";
import moveoImg from "../assets/projects/moveo/moveo1.png";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
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
    imageUrl: smarketingImg,
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
    imageUrl: cwcImg,
  },
  {
    title: "Moveo-CodeBlock",
    tagline: "Real-time collaborative coding with mentor & students",
    description:
      "A multi-user coding platform with roles, live sync via Socket.IO, Monaco editor, and mentor tools.",
    tech: ["React", "TypeScript", "Socket.IO", "Monaco Editor", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/RoniTwito08/Moveo-CodeBlock",
    liveUrl: "",
    imageUrl: moveoImg,
  },
];
