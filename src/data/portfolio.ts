export const profile = {
  name: "Jilsina Parveen KV",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies.",
  about: `Passionate Full Stack Developer with hands-on experience building 10+ production websites across healthcare, education, and travel industries. I specialize in creating responsive, performant web applications using React, TypeScript, and modern tooling. Currently working at Think Forge Global, where I transform client visions into polished digital products.`,
  highlights: [
    "Built & deployed 10+ client websites",
    "Worked across healthcare, education & travel sectors",
    "Specialized in React & TypeScript ecosystems",
  ],
  email: "jilsinaparveen01@gmail.com",
  phone: "7306613005",
  linkedin: "https://www.linkedin.com/in/jilsina-parveen-k-v-368304315/",
  github: "https://github.com/jilsinaparveenkv",
  location: "Kerala, India",
};

export const skills = {
  Frontend: ["Next.js","React.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  Backend: ["Node.js", "API Integration", "Supabase"],
  "Tools & Ecosystem": ["Git / GitHub", "Figma", "Postman"],
};

import suryaKiranPhysioImg from "../public/images/projects/surya_kiran_physio.jpg";
import dayOffJourneysImg from "../public/images/projects/day_off_journeys.jpg";
import formFieldEduImg from "../public/images/projects/form_&_field_edu.jpg";
import newSevanaMedicalsImg from "../public/images/projects/new_sevana_medicals.jpg";
import chamayamImg from "../public/images/projects/chamayam.jpg";
import echoHearingAidImg from "../public/images/projects/echo_hearing_aid.jpg";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  category: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Surya Kiran Physio",
    description: "Healthcare platform for a physiotherapy clinic — appointment booking, service showcase, and patient resources.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.suryakiranphysio.com/",
    category: "Healthcare",
    imageUrl: suryaKiranPhysioImg,
  },
  {
    title: "Day Off Journeys",
    description: "Travel agency website with curated tour packages, booking flows, and destination highlights.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.dayoffjourneys.com/",
    category: "Travel",
    imageUrl: dayOffJourneysImg,
  },
  {
    title: "Form & Field Edu",
    description: "Educational institution website featuring programs, admissions info, and campus resources.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.formandfieldedu.in/",
    category: "Education",
    imageUrl: formFieldEduImg,
  },
  {
    title: "New Sevana Medicals",
    description: "E-commerce product catalog for a medical store with search and category-based browsing.",
    tech: ["React", "Supabase", "TypeScript"],
    liveUrl: "https://new-sevana-medicals.vercel.app/products",
    category: "Healthcare",
    imageUrl: newSevanaMedicalsImg,
  },
  {
    title: "Chamayam",
    description: "Cultural event showcase website with schedules, galleries, and registration features.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://chamayam-mtj6.vercel.app/",
    category: "Events",
    imageUrl: chamayamImg,
  },
  {
    title: "Echo Hearing Aid",
    description: "Healthcare product website for hearing aid solutions — services, products, and consultation booking.",
    tech: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://www.echohearingaid.com/",
    category: "Healthcare",
    imageUrl: echoHearingAidImg,
  },
];

export const experience = [
  {
    company: "Think Forge Global",
    role: "Full Stack Developer",
    location: "Kerala, India",
    period: "Present",
    responsibilities: [
      "Developed and deployed 20+ client websites across multiple industries",
      "Built responsive, performant UIs using React & TypeScript",
      "Integrated REST APIs and third-party services",
      "Designed reusable UI component libraries for faster delivery",
      "Managed client communication and project timelines",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "APJ Abdul Kalam Technological University",
    period: "Aug 2023 – May 2025",
    gpa: "7.58",
  },
  {
    degree: "BSc Mathematics",
    institution: "University of Calicut",
    period: "Jul 2020 – May 2023",
  },
];
