export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    company: string;
    position: string;
    period: string;
    location: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    location: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    year: string;
    highlights?: string[];
  }[];
  certifications: string[];
  interests: string[];
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Harilal R",
    title: "Django Developer",
    email: "harilalh330@gmail.com",
    phone: "+91-8838591598",
    address: "4/126A, North Street, Vembanoor, Vembanoor (P.O), K.K. Dist",
    github: "https://github.com/codingkid000",
    linkedin: "https://linkedin.com/in/hari-lal-r-456694261",
    summary: "Django Developer with over 2 years of experience building scalable web applications using Django, REST APIs, PostgreSQL, and frontend technologies. Skilled in clean code practices, RESTful architecture, and integrating AI functionalities. Strong collaborator in agile environments.",
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "React"]
    },
    {
      category: "Frameworks",
      items: ["Django", "Django REST Framework"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"]
    },
    {
      category: "Tools",
      items: ["Git", "Postman", "VS Code"]
    },
    {
      category: "Others",
      items: ["RESTful APIs", "Authentication", "Deployment (Vercel,AWS,Render)"]
    }
  ],
  experience: [
    {
      company: "JCS Infotech",
      position: "Django Developer",
      period: "jun 2025– Present",
      location: "Nagercoil",
      responsibilities: [
        "Developing and maintaining robust Django-based web applications for internal and client-facing platforms.",
        "Implementing RESTful APIs and integrating third-party services.",
        "Collaborating with React frontend developers for seamless backend integration.",
        "Managing schema design, migrations, and performance optimization."
      ]
  },
    {
      company: "Spangles Infotech",
      position: "Python / Django Developer",
      // period: "Jan 2023– Apr 2025",
      period: "Jan 2023– May 2025",
      location: "Nagercoil",
      responsibilities: [
        "Developed user authentication, dashboards, and CRUD modules in Django.",
        "Built REST APIs for mobile and frontend integration.",
        "Collaborated with senior developers on scalable, secure services.",
        "Utilized Git, participated in code reviews, and followed agile practices."
      ]
    }
  ],
  education: [
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Vaikundar Polytechnic College",
      year: "2020",
      location: "Pillaiyarpuram"
    },
    {
      degree: "Higher Secondary (+2)- Maths Biology",
      institution: "St. Joseph Hr. Sec. School",
      year: "2017",
      location: "Assaripallam"
    }
  ],
  projects: [
    {
      title: "AI-Based Face Attendance System",
      description: "Recognizes student faces using webcam and marks attendance automatically.",
      technologies: ["Python", "Django", "face recognition", "OpenCV"],
      year: "2024",
      highlights: ["Handles face encoding from videos and real-time recognition."]
    },
    {
      title: "Student Management System",
      description: "Built a role-based admin-staff-student system with dashboards and attendance.",
      technologies: ["Django", "React", "PostgreSQL", "REST API"],
      year: "2023"
    },
    {
      title: "Billing Software",
      description: "Created a Django-based invoicing and billing system for small businesses.",
      technologies: ["Django", "PostgreSQL", "REST API"],
      year: "2024",
      highlights: ["Supports GST billing, reports, and client management."]
    },
    {
      title: "Sign Language Recognition System",
      description: "Implemented real-time Indian Sign Language (ISL) recognition using hand landmarks and transformer model.",
      technologies: ["Python", "MediaPipe", "Transformers", "Django"],
      year: "2025",
      highlights: ["Built a Django web app to process video and output text."]
    },
    {
      title: "Brain Tumor Detection System",
      description: "Developed a medical imaging application to detect brain tumors using CNN models.",
      technologies: ["Python", "Django", "TensorFlow", "OpenCV"],
      highlights: ["Integrated model into Django frontend with upload and diagnosis features."]
    },
    {
      title: "Construction Management Software",
      description: "Built a web app for managing workers, site tasks, and materials in real time.",
      technologies: ["Django", "PostgreSQL", "React"],
      highlights: ["Includes budgeting, expense tracking, and report generation."]
    },
    {
      title: "Real Estate Website",
      description: "Designed a static property listing platform with modern UI.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      highlights: ["Implemented property inquiry form and Google Maps integration."]
    }
  ],
  certifications: ["Python Full Stack– One Team Solutions, Trivandrum"],
  interests: ["Open-source contribution", "Backend architecture", "AI-powered applications"]
};

export default resumeData;