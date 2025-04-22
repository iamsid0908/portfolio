import { Experience, Project, Skill, NavLink, SocialLink } from "../types";

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/iamsid0908",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siddharth-chandrakar007/",
    icon: "Linkedin",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/mightsid099",
    icon: "Code2",
  },
  {
    name: "Email",
    url: "mailto:siddharthchandrakar007@gmail.com",
    icon: "Mail",
  },
  {
    name: "Phone",
    url: "tel:+918797105614",
    icon: "Phone",
  },
];

export const personalInfo = {
  name: "Siddharth Chandrakar",
  title: "Software Engineer",
  email: "siddharthchandrakar007@gmail.com",
  phone: "+91 8797105614",
  bio: "I'm a passionate software engineer with experience in full-stack development. I enjoy building scalable applications and solving complex problems using modern technologies.",
  location: "India",
};

export const educationData = [
  {
    institution: "ITM GOI Gwalior",
    degree: "BTech, Computer Science",
    period: "Nov 2020 - June 2024",
    gpa: "7.8 CGPA",
    courses: [
      "Data Structures",
      "Algorithms and Analysis",
      "Operating Systems",
      "Modern Web Programming",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    company: "Decamint.ai",
    position: "Software Engineer",
    period: "Feb 2025 – Present",
    description: [
      "Built the beta version of decamint.ai from scratch, including both frontend and backend, using React, Node.js, TypeScript, and MongoDB.",
      "Deployed the application to Azure App Services and configured a custom domain for seamless user access.",
      "Closely collaborated with the founding team to iterate and deliver features based on user feedback and roadmap goals.",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Azure"],
    logo: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    company: "Katalis AI (Antler 24) – Singapore, Remote",
    position: "Software Engineer",
    period: "July 2024 – Oct 2024",
    description: [
      "Automated data processing across multiple Excel sheets to streamline the internal Ads Team workflow, reducing manual effort and improving efficiency.",
      "Developed a robust file management system supporting image uploads, metadata storage, and secure access control for efficient asset handling.",
    ],
    technologies: ["Go", "Echo", "GORM", "Redis"],
    logo: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    company: "Katalis AI - Singapore",
    position: "Software Engineer Intern",
    period: "Oct 2023 – July 2024",
    description: [
      "Developed and integrated an innovative image background editing feature using LLM models, enabling real-time modification within 30 seconds of upload for 1000+ users.",
      "Implemented Grafana dashboard for real-time API monitoring and visualization, improve system observability and performance tracking.",
    ],
    technologies: ["LLM Models", "Grafana", "API Development"],
    logo: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    company: "Lumara Jewels - Gurgoan",
    position: "Software Engineer Intern",
    period: "Oct 2023 July 2024",
    description: [
      "Developed and documented API contracts for an e-commerce platform, ensuring seamless integration based on Figma designs; advanced project timelines by delivering work two weeks ahead of schedule.",
      "Create the Google auth system using firebase authentication.",
    ],
    technologies: ["API Development", "Figma", "Firebase Authentication"],
    logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const projectsData: Project[] = [
  {
    title: "Zoro - E-commerce Platform",
    description:
      "An e-commerce platform with all the functionalities like authentication & authorization, add to cart and others.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image:
      "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/iamsid0908/ecombackend",
  },
  {
    title: "Wordle Game",
    description:
      "A highly engaging and popular wordle game that challenges the player to guess a secret word within a limited number of attempts. It also has a PWA feature.",
    technologies: ["HTML", "CSS", "JavaScript", "PWA"],
    image:
      "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/yourusername/wordle-game",
    liveLink: "https://creative-lokum-073d5d.netlify.app/",
  },
  {
    title: "BookFinder",
    description:
      "A platform where users can read the summary of books and store it in the wishlist. It's the user's personal book library.",
    technologies: ["Go", "Echo", "React", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liveLink: "https://book-finder0908sid.netlify.app/",
  },
];

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "Go", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "C", level: 70, category: "languages" },
  { name: "HTML/CSS", level: 90, category: "languages" },
  { name: "SQL", level: 80, category: "languages" },

  // Frameworks/Technologies
  { name: "React", level: 85, category: "frameworks" },
  { name: "Node.js", level: 80, category: "frameworks" },
  { name: "Echo", level: 85, category: "frameworks" },
  { name: "Express", level: 80, category: "frameworks" },
  { name: "Tailwind", level: 85, category: "frameworks" },
  { name: "Linux", level: 75, category: "frameworks" },

  // Problem-Solving/Tools
  { name: "Data Structures & Algorithms", level: 85, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "CI/CD", level: 75, category: "tools" },
];
