export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  role: string;
  company: string;
  highlights: string[];
  current?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl?: string;
}

export const personalInfo = {
  name: "Anish M",
  role: "Full Stack Developer & AI Builder",
  email: "anish2410461@ssn.edu.in",
  phone: "+91 9894680436",
  location: "Chennai, India",
  college: "SSN College of Engineering",
  github: "https://github.com/anish2410461",
  linkedin: "https://www.linkedin.com/in/anish-m-b5385b386/",
  resumeUrl: "/images/Anish M -Resume.pdf",
};

export const projects: Project[] = [
  {
    id: "01",
    title: "PromptPolish",
    tagline: "AI Prompt Optimization SaaS",
    description: "Transforms weak, ambiguous prompts into structured, high-quality AI instructions using reasoning-based optimization and clarity scoring.",
    image: "/images/promptpolish.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Anthropic API", "Vercel"],
    links: { github: "https://github.com/anish2410461", live: "https://prompt-polishfree-4mgj.vercel.app/" },
    featured: true
  },
  {
    id: "02",
    title: "YouTube Clone",
    tagline: "Responsive Frontend Architecture",
    description: "Pixel-accurate YouTube interface clone with responsive grid layouts, API integration patterns, and modern CSS architecture principles.",
    image: "/images/ytclone.png",
    tech: ["HTML", "CSS", "JavaScript", "YouTube API"],
    links: { github: "https://github.com/anish2410461", live: "https://youtube-clone-ashen-two.vercel.app/" }
  },
  {
    id: "03",
    title: "Stylish",
    tagline: "Premium E-Commerce UI",
    description: "Modern e-commerce landing experience focused on conversion-optimized layouts, micro-interaction design, and performance-first CSS.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    links: { github: "https://github.com/anish2410461", live: "https://stylishs.netlify.app/" }
  },
  {
    id: "04",
    title: "Music Playlist Manager",
    tagline: "OOP Data Structures in Java",
    description: "Playlist management system implementing advanced OOP patterns, linked-list architecture, and efficient algorithmic data handling.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
    tech: ["Java", "OOP", "Data Structures"],
    links: { github: "https://github.com/anish2410461" }
  },
  {
    id: "05",
    title: "SwiftCart",
    tagline: "Full-Stack E-Commerce Platform",
    description: "Full-stack e-commerce web application enabling users to browse products, manage shopping carts, and securely authenticate accounts. Built with a focus on responsive design, user experience, and scalable architecture.",
    image: "/images/swiftcart.png",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Vercel"],
    links: { github: "https://github.com/anish2410461", live: "https://swiftcard-frontend.vercel.app/login" }
  },
  {
    id: "06",
    title: "TaskZen",
    tagline: "AI-Powered Project Management Platform",
    description: "Full-stack project management platform with Kanban boards, team collaboration, role-based access control, real-time notifications, and AI-driven productivity insights for efficient workflow management.",
    image: "/images/taskzen.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "AI Integration", "Render"],
    links: { github: "https://github.com/anish2410461", live: "https://taskzen-frontend.onrender.com/" }
  }
];

export const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["Python", "Java", "C", "C++"] },
  { title: "Frontend", skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS/TS", "Typescript"] },
  { title: "Backend", skills: ["Spring Boot ", "Node.js", "Express", "REST APIs", "Python/Flask"] },
  { title: "Database", skills: ["MySQL", "Oracle SQL", "MongoDB"] },
  { title: "Core CS", skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Jupyter Notebook", "Intellij"] }
];

export const timeline: TimelineEntry[] = [
  {
    id: "t1",
    year: "2024 – 2028",
    role: "B.E. Computer Science Engineering",
    company: "SSN College of Engineering, Chennai",
    highlights: [
      "Currently maintaining an 8.31 CGPA",
      "Focused on Full-Stack Development and AI implementations",
      "Actively practicing DSA with 65+ problems solved on LeetCode",
      "Building scalable applications like PromptPolish",
      "Contributing to open source and project-based learning"
    ],
    current: true
  },
  {
    id: "t2",
    year: "2024",
    role: "Class XII",
    company: "Sri Vijay Vidyalaya Matric Hr. Sec. School",
    highlights: ["Scored 96% in Higher Secondary Examinations"]
  },
  {
    id: "t3",
    year: "2022",
    role: "Class X",
    company: "Sri Vijay Vidyalaya Matric Hr. Sec. School",
    highlights: ["Scored 93% in Secondary School Examinations"]
  }
];

export const certifications: Certification[] = [
  {
    id: "c1",
    name: "Full-Stack Web Development",
    issuer: "Jyesta & E-Cell IIT Roorkee",
    year: "2026",
    description: "Completed a certified Full-Stack Web Development training program conducted by Jyesta Corporate Entity in collaboration with E-Cell IIT Roorkee. Acquired hands-on experience in front-end development, back-end programming, database integration, and full-stack application development through practical learning and project-based training.",
    imageUrl: "/images/jyesta_fullstack_certificate.png"
  },
  {
    id: "c6",
    name: "Generative AI Engineering",
    issuer: "GUVI & HCL Technologies",
    year: "2026",
    description: "Participated in GUVI and HCL's 3-day workshop on Generative AI Engineering, gaining practical knowledge of LLMs, Prompt Engineering, Retrieval-Augmented Generation (RAG), vector databases, and AI application deployment. Explored industry-standard approaches for developing and deploying AI-powered solutions.",
    imageUrl: "/images/HCL GUVI Certification - z78Ul750112B3j3n5b (1).png"
  },
  {
    id: "c8",
    name: "Data Analysis with Python",
    issuer: "IBM SkillsBuild",
    year: "2026",
    description: "Completed IBM SkillsBuild's Data Analysis with Python course, gaining practical experience in data cleaning, analysis, visualization, and statistical interpretation using Python, Pandas, and NumPy. Developed skills to transform raw data into actionable insights through data-driven analysis.",
    imageUrl: "/images/IBM DA0101EN Certificate _ IBM SkillsBuild.pdf"
  },
  {
    id: "c9",
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    year: "2026",
    description: "Completed the Artificial Intelligence course from Infosys Springboard, gaining knowledge of AI fundamentals, machine learning concepts, NLP, computer vision, and the practical applications of intelligent systems in solving real-world problems.",
    imageUrl: "/images/Screenshot 2026-06-15 122046.png"
  },
  {
    id: "c10",
    name: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. | Forage",
    year: "2026",
    description: "Completed the JPMorgan Chase & Co. Software Engineering Job Simulation on Forage, gaining hands-on experience in project setup, Kafka integration, H2 database management, REST API development, and backend application engineering through real-world software development tasks.",
    imageUrl: "/images/jb.png"
  },
  {
    id: "c11",
    name: "Prompt Engineering",
    issuer: "Infosys Springboard",
    year: "2026",
    description: "Completed the Prompt Engineering course from Infosys Springboard, gaining expertise in designing effective prompts, optimizing AI interactions, and leveraging Generative AI and Large Language Models (LLMs) for real-world applications.",
    imageUrl: "/images/prompt.png"
  },
  {
    id: "c12",
    name: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    year: "2026",
    description: "Completed the Introduction to Data Science course from Infosys Springboard, gaining foundational knowledge in data analysis, visualization, statistics, machine learning concepts, and data-driven problem solving.",
    imageUrl: "/images/datascience.png"
  },
  {
    id: "c13",
    name: "7 Steps to Launch Your Career in Data Science",
    issuer: "GUVI & HCL Technologies",
    year: "2025",
    description: "Participated in GUVI and HCL's webinar on '7 Steps to Launch Your Career in Data Science in 2026', gaining insights into data science career pathways, industry expectations, project building, portfolio development, and strategies for securing opportunities in the field.",
    imageUrl: "/images/hcldata.png"
  },
  {
    id: "c14",
    name: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE | HP Foundation",
    year: "2025",
    description: "Completed HP LIFE's Introduction to Cybersecurity Awareness course, gaining knowledge of cybersecurity fundamentals, online threat identification, data protection, password security, phishing prevention, and safe digital practices.",
    imageUrl: "/images/cyber.png"
  },
  {
    id: "c15",
    name: "Build a Kanban App with Full Stack Development",
    issuer: "GUVI & HCL Technologies",
    year: "2025",
    description: "Participated in GUVI and HCL's workshop on Build a Kanban App with Full Stack Development, gaining hands-on experience in developing a task and project management application using frontend, backend, database, and API integration concepts.",
    imageUrl: "/images/hclkanban.png"
  },
  {
    id: "c16",
    name: "Privacy and Security in Online Social Media",
    issuer: "NPTEL Elite | IIIT Hyderabad",
    year: "2025",
    description: "Earned an Elite NPTEL Certification in Privacy and Security in Online Social Media, gaining knowledge of online privacy, cybersecurity threats, social network security, data protection, digital identity management, and ethical aspects of information security. Scored 65% over a 12-week course.",
    imageUrl: "/images/privacy and security.png"
  },
  {
    id: "c17",
    name: "Affective Computing",
    issuer: "NPTEL Elite | IIIT Delhi",
    year: "2026",
    description: "Earned an Elite NPTEL Certification in Affective Computing, gaining knowledge of emotion recognition, sentiment analysis, human-computer interaction, machine learning, and the development of AI systems capable of understanding and responding to human emotions. Scored 70% over a 12-week course.",
    imageUrl: "/images/affective.png"
  }
];
