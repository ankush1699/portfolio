// Single source of truth for site content.
// Kept in sync with AI_Resume_Agent/Ankush_Master_Data.json — edit there first,
// mirror here. Pages must not hardcode experience/project copy.

export const personal = {
  name: 'Ankush Chaudhary',
  role: 'Software Engineer — Full-Stack & AI Systems',
  tagline:
    'I ship production web systems and build LLM agent pipelines. 4+ years of enterprise engineering at TCS; M.S. Computer Engineering, Virginia Tech.',
  location: 'Chicago, IL',
  email: 'ankushchaudhary.ac99@gmail.com',
  github: 'https://github.com/ankush1699/',
  linkedin: 'https://www.linkedin.com/in/ankushchaudhary01/',
  availability: 'Open to full-time SWE / AI engineering roles · F-1 OPT, available now',
  resumePdf: 'Ankush_Chaudhary_Resume.pdf',
}

export const experience = [
  {
    title: 'AI Fellow',
    company: 'Handshake AI',
    period: 'Oct 2025 — Nov 2025',
    location: 'Remote',
    summary:
      'Selected for an internal AI safety initiative red-teaming large language models.',
    bullets: [
      'Authored adversarial prompts targeting model reasoning boundaries, eliciting confidently incorrect responses on high-difficulty DSA and computational mathematics problems.',
      'Stress-tested multi-step algorithmic reasoning — graph traversal, dynamic programming, proof construction — exposing systematic failure patterns.',
      'Documented failure cases with structured prompt-response analysis, feeding a red-teaming knowledge base that informed model reliability improvements.',
    ],
    tech: ['LLM Red-Teaming', 'AI Safety', 'Python'],
  },
  {
    title: 'Lead Software Engineering Intern',
    company: 'Shifting Waters Leadership Institute',
    period: 'Jul 2025 — Sep 2025',
    location: 'Richmond, VA · Remote',
    summary:
      'Sole technical owner of the organization’s web platform, working directly with the CEO.',
    bullets: [
      'Led requirements gathering, UI/UX design in Figma, full-stack development, and production deployment; mentored one junior engineer to independent contribution.',
      'Built a responsive, mobile-first site implementing WCAG accessibility, SEO best practices, and Google Analytics — production-ready within a 3-month engagement.',
      'Automated web-form data ingestion into structured databases for executive reporting, eliminating manual data entry for program staff.',
    ],
    tech: ['Figma', 'Web Platform', 'Accessibility', 'Analytics'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    period: 'Nov 2020 — Jul 2024',
    location: 'Pune, India',
    summary:
      'Owned the frontend of a UK financial-services platform serving 10K+ users; earned 8 TCS awards over 4 years.',
    bullets: [
      'Built and shipped a production Angular + Ionic hybrid mobile app for a regulated UK financial services client with full end-to-end frontend ownership.',
      'Integrated 30+ RESTful API endpoints with JWT auth flows — route guards, HTTP interceptors, session management.',
      'Automated GitLab CI/CD pipelines across dev and staging, accelerating deployment cycles by 40%.',
      'Designed a reusable full-stack application framework adopted by 2 additional client teams, cutting new-project setup time by 35%.',
      'Engineered Spring Boot microservices with end-to-end API design; led a frontend team of 4 through final-year delivery.',
    ],
    tech: ['Angular', 'Ionic', 'TypeScript', 'Java', 'Spring Boot', 'GitLab CI'],
  },
]

export const education = [
  {
    degree: 'M.S. Computer Engineering',
    school: 'Virginia Tech',
    period: 'Aug 2024 — May 2026',
    detail: 'GPA 3.78/4.0 · Reinforcement Learning, Deep Learning, Computer Vision, Information Security, Large-Scale Software Development',
  },
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'SGB Amravati University',
    period: 'Aug 2017 — Aug 2020',
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
