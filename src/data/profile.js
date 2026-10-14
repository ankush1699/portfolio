// Single source of truth for site content.
// Every fact here is one you confirmed yourself or one checked against your GitHub repos.
// If a number cannot be backed up, it does not belong in this file.

export const personal = {
  name: 'Ankush Chaudhary',
  role: 'Full-Stack Software Engineer (AI) · Java, Python, Spring Boot, Angular',
  tagline: 'I build software people can rely on. Now building AI tools in Python.',
  taglineHighlights: ['software people can rely on', 'AI tools in Python'],
  location: 'Chicago, IL',
  email: 'ankushchaudhary.ac99@gmail.com',
  github: 'https://github.com/ankush1699/',
  linkedin: 'https://www.linkedin.com/in/ankushchaudhary01/',
  // File in public/ that the Resume page and the home page buttons open and download.
  // Set it to null to show the "coming soon" placeholder instead.
  resumePdf: 'Ankush_Chaudhary_Resume.pdf',
}

export const experience = [
  {
    title: 'AI Fellow (part-time)',
    company: 'Handshake AI',
    period: 'Oct 2025 to Nov 2025',
    location: 'Remote',
    summary: 'Part-time fellowship red-teaming large language models.',
    bullets: [
      'Red-teamed large language models by writing prompts designed to make them fail on algorithm and math problems.',
      'Documented each failure with the prompt, the model’s answer and what was wrong.',
    ],
    tech: ['Prompt engineering', 'Adversarial testing'],
  },
  {
    title: 'Graduate Grader',
    company: 'Virginia Tech',
    period: 'Aug 2025 to Dec 2025',
    location: 'Blacksburg, VA',
    summary: 'Graded assignments and exams for an undergraduate course.',
    bullets: [
      'Graded assignments and exams for the undergraduate course Introduction to ECE Concepts.',
    ],
    tech: [],
  },
  {
    title: 'Lead Software Engineering Intern',
    company: 'Shifting Waters Leadership Institute',
    period: 'Jul 2025 to Sep 2025',
    location: 'Richmond, VA',
    summary: 'Only technical owner of the organization’s web platform.',
    bullets: [
      'Built the organization’s web platform on WordPress with custom HTML and CSS, designed in Figma, as its only technical owner.',
      'Set up Google Analytics and automated workflows with Make.com, such as sending web-form entries to spreadsheets.',
      'Reached Lighthouse scores of 91 for accessibility and 92 for SEO.',
    ],
    tech: ['WordPress', 'Custom CSS/HTML', 'Google Analytics', 'Make.com', 'Figma'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    period: 'Nov 2020 to Jul 2024',
    location: 'Pune, India · UK life-insurance client',
    summary:
      'Core frontend developer on a UK life-insurance mobile app with 10K+ active users, working from India for a UK client.',
    bullets: [
      'Shipped features for a UK client’s life-insurance mobile app, working from India as a core frontend developer (Angular, Ionic, TypeScript). The app has 10K+ active users in a regulated industry.',
      'Took over releases for about a month when the tech lead was away, led the team through releases and security audits, and kept that responsibility after the lead returned.',
      'Led a frontend team of 4 engineers through final-year delivery with code reviews, pair programming and onboarding docs.',
      'Designed a reusable full-stack framework (project layout, login setup and shared UI components) that 2 more client teams adopted.',
      'Wrote Java Spring Boot endpoints for the mobile app (JWT login tokens, MongoDB queries) and co-built the daily reporting endpoints behind an automated Excel report of 10 to 15 sheets for hundreds of users.',
      'Integrated 30+ REST APIs into the Angular app and tested them in Postman, with JWT login, route guards and session handling.',
      'Moved releases from manual steps to GitLab CI and Jenkins pipelines across development and staging.',
      'Recognized with 8 TCS awards, including Star of the Month, Star of the Quarter, Star Team and 5 On the Spot.',
    ],
    tech: ['Angular', 'Ionic', 'TypeScript', 'Spring Boot', 'Java', 'MongoDB', 'JWT', 'GitLab CI', 'Jenkins', 'Postman'],
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
    school: 'Prof. Ram Meghe Institute of Technology & Research, India (affiliated to SGB Amravati University)',
    period: 'Aug 2017 to Aug 2020',
    detail: 'CGPA 8.89/10.0',
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Frontend & Mobile': ['Angular', 'React', 'Ionic', 'HTML5', 'CSS3'],
  Backend: ['Spring Boot', 'Node.js', 'REST APIs', 'JWT Auth'],
  'AI / ML': ['LangGraph', 'LangChain', 'Anthropic API', 'Prompt Engineering', 'Hugging Face', 'PyTorch', 'BERT'],
  DevOps: ['Docker', 'GitLab CI', 'GitHub Actions', 'Jenkins'],
  Databases: ['MongoDB'],
  'Testing & Tools': ['Pytest', 'JUnit', 'Jest', 'Jasmine', 'Karma', 'Git', 'Postman', 'Figma'],
}

// Headline numbers for the home page. Each one comes from the experience entries above
// or the job pipeline's own README.
export const stats = [
  { value: '10K+', label: 'active users on the UK life-insurance mobile app I helped build as a core frontend developer' },
  { value: '30+', label: 'REST APIs I integrated into that app' },
  { value: '4', label: 'engineers on the frontend team I led in the final year' },
  { value: '~9¢', label: 'per tailored application in my job search pipeline' },
]

export const coreStack = [
  'Java', 'Python', 'TypeScript', 'Spring Boot', 'Angular', 'React',
  'Node.js', 'LangGraph', 'PyTorch', 'Docker', 'Ionic', 'MongoDB',
]
