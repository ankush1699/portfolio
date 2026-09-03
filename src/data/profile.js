// Single source of truth for site content.
// Kept in sync with AI_Resume_Agent/Ankush_Master_Data.json — edit there first,
// mirror here. Pages must not hardcode experience/project copy.

export const personal = {
  name: 'Ankush Chaudhary',
  role: 'Full-Stack Engineer · AI/ML Engineer',
  tagline:
    'Four years building production software at enterprise scale. Now I design the autonomous LLM pipelines that extend it. M.S. Computer Engineering, Virginia Tech.',
  location: 'Chicago, IL',
  email: 'ankushchaudhary.ac99@gmail.com',
  github: 'https://github.com/ankush1699/',
  linkedin: 'https://www.linkedin.com/in/ankushchaudhary01/',
  availability: 'Open to full-time SWE / AI engineering roles · F-1 OPT, available now',
  resumePdf: 'Ankush_Chaudhary_SWE_Resume.pdf',
}

export const experience = [
  {
    title: 'AI Fellow',
    company: 'Handshake AI',
    period: 'Oct 2025 to Nov 2025',
    location: 'Remote',
    summary:
      'Selected for an internal AI safety initiative focused on identifying and documenting how large language models fail under adversarial conditions.',
    bullets: [
      'Wrote high precision adversarial prompts designed to probe the reasoning boundaries of large language models, successfully eliciting confidently incorrect answers on difficult data structures, algorithms, and computational mathematics problems.',
      'Stress tested model performance on multi step algorithmic reasoning tasks, including graph traversal, dynamic programming, and mathematical proof construction, to expose systematic patterns in how the model reasoned incorrectly.',
      'Documented every failure case as a structured prompt and response analysis, contributing to a red teaming knowledge base used to guide reliability improvements in technical reasoning tasks.',
    ],
    tech: ['LLM Red-Teaming', 'AI Safety', 'Python'],
  },
  {
    title: 'Lead Software Engineering Intern',
    company: 'Shifting Waters Leadership Institute',
    period: 'Jul 2025 to Sep 2025',
    location: 'Richmond, VA · Remote',
    summary:
      'Sole technical owner of the organization’s web platform, working directly with the CEO from initial requirements through production deployment.',
    bullets: [
      'Led requirements gathering directly with the CEO, designed the UI/UX in Figma, and handled full stack development and production deployment, while mentoring one junior engineer to independent contribution.',
      'Built a responsive, mobile-first website that met WCAG accessibility standards and SEO best practices and integrated Google Analytics tracking, shipping a production-ready platform within a three-month engagement.',
      'Automated the ingestion of web form submissions into structured databases for executive reporting, eliminating manual data entry for program staff and speeding up how the team could report on ongoing programs.',
    ],
    tech: ['Figma', 'Web Platform', 'Accessibility', 'Analytics'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    period: 'Nov 2020 to Jul 2024',
    location: 'Pune, India',
    summary:
      'Owned the frontend of a UK financial services platform serving 10,000+ users, and earned 8 TCS awards over four years for delivering scalable, production-ready software.',
    bullets: [
      'Built and shipped a production Angular and Ionic hybrid mobile application for a regulated UK financial services client, taking full end-to-end ownership of the frontend for a product used by 10,000+ active users.',
      'Integrated 30+ RESTful API endpoints using JWT-based authentication, implementing route guards, HTTP interceptors, and session management to keep access secure across every part of the application.',
      'Automated CI/CD pipelines in GitLab across development and staging environments, cutting deployment cycles by 40 percent and removing manual steps from the release process.',
      'Designed a reusable full-stack application framework covering project structure, authentication scaffolding, and base UI components, which was adopted by two additional client teams and cut new-project setup time by 35 percent.',
      'Engineered Spring Boot microservices with end-to-end API design to support the platform’s backend, while leading a frontend team of four engineers through the project’s final year of delivery.',
    ],
    tech: ['Angular', 'Ionic', 'TypeScript', 'Java', 'Spring Boot', 'GitLab CI'],
  },
]

export const education = [
  {
    degree: 'M.S. Computer Engineering',
    school: 'Virginia Tech',
    period: 'Aug 2024 to May 2026',
    detail: 'GPA 3.78/4.0 · Reinforcement Learning, Deep Learning, Computer Vision, Information Security, Large-Scale Software Development',
  },
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'SGB Amravati University',
    period: 'Aug 2017 to Aug 2020',
    detail: 'CGPA 8.89/10.0',
  },
]

export const skills = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C++'],
  'Frontend & Mobile': ['Angular', 'Ionic', 'React', 'HTML5', 'CSS3'],
  Backend: ['Spring Boot', 'Node.js', 'Flask', 'REST APIs', 'Microservices', 'JWT Auth'],
  'AI / ML': ['LangGraph', 'LangChain', 'Anthropic API', 'RAG', 'PyTorch', 'TensorFlow', 'BERT'],
  'Cloud & DevOps': ['AWS', 'Docker', 'GitLab CI', 'GitHub Actions', 'Jenkins'],
  Data: ['MySQL', 'MongoDB'],
}
