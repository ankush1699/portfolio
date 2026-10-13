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
  availability: 'Open to full-time SWE / AI engineering roles · F-1 OPT, available now',
  // TODO(resume): PLACEHOLDER. No resume is linked until the final PDF is ready.
  // When it is: put the PDF in public/, then set this to its filename, for example
  //   resumePdf: 'Ankush_Chaudhary_SWE_Resume.pdf',
  // The Resume page and the buttons on the home page switch back on by themselves.
  resumePdf: null,
}

export const experience = [
  {
    title: 'AI Fellow (part-time)',
    company: 'Handshake AI',
    period: 'Oct 2025 to Nov 2025',
    location: 'Remote',
    summary: 'Part-time fellowship red-teaming large language models.',
    bullets: [
      'Wrote adversarial prompts aimed at the limits of the models’ reasoning, and got confidently wrong answers on hard data structure, algorithm and math problems.',
    ],
    tech: ['LLM red-teaming', 'Prompt writing', 'Adversarial testing'],
  },
  {
    title: 'Lead Software Engineering Intern',
    company: 'Shifting Waters Leadership Institute',
    period: 'Jul 2025 to Sep 2025',
    location: 'Richmond, VA · Remote',
    summary: 'Sole technical owner of the organization’s website, working directly with the CEO.',
    bullets: [
      'Was the only technical owner of the website. I gathered requirements with the CEO, designed it in Figma, and mentored one junior engineer.',
      'Built the site in WordPress with custom HTML and CSS, and added Google Analytics. Lighthouse scored it 91 for accessibility and 92 for SEO.',
      'Set up Make.com automation that sends form submissions to spreadsheets for executive reporting.',
    ],
    tech: ['WordPress', 'HTML and CSS', 'Google Analytics', 'Make.com', 'Figma'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    period: 'Nov 2020 to Jul 2024',
    location: 'Pune, India · UK life-insurance client',
    summary:
      'Core frontend developer on a UK life-insurance mobile app with 10K+ active users, working from India for a UK client.',
    bullets: [
      'Worked as a core frontend developer on a UK life-insurance mobile app built with Angular, Ionic and TypeScript. It had 10K+ active users.',
      'Took over release ownership when my tech lead was away for about a month, and kept that ownership afterward.',
      'Led a frontend team of 4 in the final year, running code reviews and pair programming and writing onboarding notes for new teammates.',
      'Designed a reusable full-stack framework (project structure, login setup and base UI components) that 2 more client teams adopted.',
      'Wrote Spring Boot REST endpoints in Java for the app, including JWT login and token handling and MongoDB queries.',
      'Integrated 30+ REST APIs into the Angular app, tested them in Postman, and handled login with route guards, HTTP interceptors and session management.',
      'Moved releases from manual steps to GitLab CI and Jenkins pipelines.',
      'Recognized with multiple Employee of the Month and Employee of the Quarter awards at TCS.',
    ],
    tech: ['Angular', 'Ionic', 'TypeScript', 'Java', 'Spring Boot', 'MongoDB', 'JWT', 'GitLab CI', 'Jenkins'],
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
    school: 'SGB Amravati University, India',
    period: 'Aug 2017 to Aug 2020',
    detail: 'CGPA 8.89/10.0',
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  'Frontend & Mobile': ['Angular', 'React', 'Ionic', 'HTML5', 'CSS3'],
  Backend: ['Spring Boot', 'Node.js', 'Flask', 'REST APIs', 'JWT Auth'],
  'AI / ML': ['LangGraph', 'LangChain', 'Anthropic API', 'Prompt Engineering', 'Hugging Face', 'PyTorch', 'BERT'],
  DevOps: ['Docker', 'GitLab CI', 'GitHub Actions', 'Jenkins'],
  Databases: ['MySQL', 'MongoDB'],
  'Testing & Tools': ['Pytest', 'JUnit', 'Jest', 'Jasmine', 'Karma', 'Git', 'Postman', 'Jira', 'Figma'],
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
  'Node.js', 'LangGraph', 'PyTorch', 'Docker', 'MySQL', 'MongoDB',
]
