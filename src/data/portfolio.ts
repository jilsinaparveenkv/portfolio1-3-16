export const profile = {
  name: "Jilsina Parveen K V",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies.",
  about: `Passionate Full Stack Developer with hands-on experience building 20+ production websites across healthcare, education, and travel industries. I specialize in creating responsive, performant web applications using React, TypeScript, and modern tooling. Currently working at Think Forge Global, where I transform client visions into polished digital products.`,
  highlights: [
    "Built & deployed 20+ client websites",
    "Worked across healthcare, education & travel sectors",
    "Specialized in React & TypeScript ecosystems",
  ],
  email: "jilsinaparveen001@gmail.com",
  phone: "7306613078",
  linkedin: "https://linkedin.com/in/jilsinaparveen",
  github: "https://github.com/jilsinaparveen",
  location: "Kerala, India",
};

export const skills = {
  Frontend: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  Backend: ["Node.js", "API Integration", "Supabase"],
  "Tools & Ecosystem": ["Git / GitHub", "Figma", "Postman"],
};

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "Surya Kiran Physio",
    description: "Healthcare platform for a physiotherapy clinic — appointment booking, service showcase, and patient resources.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.suryakiranphysio.com/",
    category: "Healthcare",
  },
  {
    title: "Day Off Journeys",
    description: "Travel agency website with curated tour packages, booking flows, and destination highlights.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.dayoffjourneys.com/",
    category: "Travel",
  },
  {
    title: "Form & Field Edu",
    description: "Educational institution website featuring programs, admissions info, and campus resources.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.formandfieldedu.in/",
    category: "Education",
  },
  {
    title: "New Sevana Medicals",
    description: "E-commerce product catalog for a medical store with search and category-based browsing.",
    tech: ["React", "Supabase", "TypeScript"],
    liveUrl: "https://new-sevana-medicals.vercel.app/products",
    category: "Healthcare",
  },
  {
    title: "Chamayam",
    description: "Cultural event showcase website with schedules, galleries, and registration features.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://chamayam-mtj6.vercel.app/",
    category: "Events",
  },
  {
    title: "Echo Hearing Aid",
    description: "Healthcare product website for hearing aid solutions — services, products, and consultation booking.",
    tech: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://www.echohearingaid.com/",
    category: "Healthcare",
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
