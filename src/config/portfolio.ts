// Central configuration for the entire portfolio.
// Update this file to keep the site current — components never hardcode personal data.

export type ProjectFeature = string;

export interface Project {
  title: string;
  overview: string;
  tech: string[];
  problem: string;
  features: ProjectFeature[];
  challenges: string;
  learnings: string;
  github?: string;
  demo?: string;
  image?: string; // path or URL; if omitted, a typographic placeholder is shown
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  cgpa?: string; // hidden when empty
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CodingProfile {
  label: string;
  handle: string;
  url: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Achievement {
  title: string;
  description?: string;
  date?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface ExperienceItem {
  role: string;
  company?: string;
  period?: string;
  bullets: string[];
}

export const portfolio = {
  name: "Bandi Shivani",
  role: "Software Engineer",
  tagline: "Software Engineer | Full Stack Developer",
  intro:
    "Final-year Computer Science student at MNNIT Allahabad, passionate about building scalable full-stack applications, exploring backend systems, and solving real-world problems through software.",

  contact: {
    email: "bandishivani2k26@gmail.com",
    phone: "", // optional; hidden when empty
    location: "Prayagraj, India",
    github: "https://github.com/ShivaniReddy7733",
    linkedin: "https://www.linkedin.com/in/bshivanireddy7733/",
    leetcode: "https://leetcode.com/u/Shivanireddy45/",
  },

  resumeUrl: "/Bandi_Shivani_Resume.pdf",


  heroCard: {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Motilal Nehru National Institute of Technology (MNNIT) , Allahabad",
    graduation: "2026 Graduate",
    status: "Open to Full-Time Software Engineering Opportunities",
  },

  about: [
    "Final-year Computer Science student at MNNIT Allahabad.",
    "Passionate about full stack development with a strong interest in backend systems.",
    "Enjoy building AI-powered applications that solve real problems.",
    "Problem-solving mindset, and always learning modern technologies.",
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Motilal Nehru National Institute of Technology (MNNIT) , Allahabad",
      period: "2022 – 2026",
      // cgpa: "8.5", // uncomment when available
    },
  ] as EducationItem[],

  experience: {
    status: "Fresher",
    lines: [
      "Currently seeking Software Engineering opportunities.",
      "Built production-style full-stack applications using React, Node.js, MongoDB, PostgreSQL and AI APIs.",
      "Continuously improving Data Structures & Algorithms, core CS fundamentals and backend engineering skills.",
    ],
  } as { status: string; lines: string[] },

  skills: [
    { label: "Languages", items: ["JavaScript", "C++", "SQL"] },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
    { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { label: "Databases", items: ["MongoDB", "PostgreSQL"] },
    { label: "Authentication", items: ["JWT"] },
    { label: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Linux"] },
    { label: "Other", items: ["Gemini AI", "Stripe", "Nodemailer", "Multer"] },
  ] as SkillGroup[],

  projects: [
    {
      title: "CuisineCraze",
      overview:
        "A full-stack restaurant ordering platform with AI-powered assistance, secure authentication, online payments, and an admin dashboard for seamless food ordering and management.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Stripe"],
      problem:
        "Many restaurant ordering systems lack personalized assistance, secure online payments, and efficient order management, leading to a fragmented user experience.",
      features: [
        "Secure JWT Authentication",
        "AI-powered restaurant assistant using Gemini AI",
        "Stripe payment integration",
      ],
      challenges:
        "Integrating secure authentication, AI assistance, payment processing, and real-time order management into a seamless full-stack application.",
      learnings:
        "Built secure REST APIs, integrated third-party services like Stripe and Gemini AI, managed authentication using JWT, and designed scalable full-stack application architecture.",
      github: "https://github.com/ShivaniReddy7733/chota_Project",
      demo: "",
    },
    {
      title: "MockTalk",
      overview:
        "An AI-powered mock interview platform that generates personalized interview questions, evaluates responses, and provides detailed feedback to help users improve their interview performance.",
      tech: ["Next.js", "React", "PostgreSQL", "Drizzle ORM", "Gemini AI", "Clerk"],
      problem:
        "Preparing for technical interviews without personalized guidance and actionable feedback makes it difficult for candidates to identify weaknesses and improve effectively.",
      features: [
        "AI-generated interview questions using Gemini AI",
        "Secure authentication with Clerk",
        "AI-based evaluation and personalized feedback",
      ],
      challenges:
        "Integrating AI-driven question generation, response evaluation, secure authentication, and persistent interview data into a seamless user experience.",
      learnings:
        "Built AI-powered workflows, integrated Clerk authentication, managed PostgreSQL using Drizzle ORM, and developed scalable applications with Next.js and Gemini AI.",
      github: "https://github.com/ShivaniReddy7733/InterviewAi",
      demo: "",
    },
  ] as Project[],

  problemSolving: {
    profiles: [
      { label: "LeetCode", handle: "Shivanireddy45", url: "https://leetcode.com/u/Shivanireddy45/" },
      { label: "GitHub", handle: "ShivaniReddy7733", url: "https://github.com/ShivaniReddy7733" },
    ] as CodingProfile[],
    stats: [
      { label: "Problems Solved", value: "800+" },
      { label: "LeetCode Problems", value: "600+" },
      { label: "AlgoZenith Problems", value: "200+" },
    ] as Stat[],
    focus: [
      "Advanced Data Structures & Algorithms",
      "Full-Stack Web Development",
      "Software Engineering Interview Preparation",
    ],
  },

  achievements: [
    {
      title: "Top 10 – DevJam Technical Competition",
      description: "Built an innovative web-based product and secured a place among the top 10 teams.",
      date: "2024",
    },
    {
      title: "Top 10 – Operaomnia, Avishkar",
      description: "Secured a position among the top 10 teams in a technical competition.",
      date: "2024",
    },
    {
      title: "800+ DSA Problems Solved",
      description:
        "Solved 800+ Data Structures & Algorithms problems across LeetCode and AlgoZenith while preparing for software engineering interviews.",
      date: "2026",
    },
  ] as Achievement[],


  certifications: [] as Certification[], // section hides when empty

  footer: {
    tech: "Built with React, TypeScript & Tailwind CSS.",
    year: 2026,
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Problem Solving", href: "#problem-solving" },
  { label: "Contact", href: "#contact" },
] as const;
