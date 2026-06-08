import { motion } from 'framer-motion'
import './Experience.css'
import TimelineItem from '../components/TimelineItem'

const Experience = () => {
  const experience = [
    {
      title: 'GTA/Grader',
      company: '1004: Introduction to ECE Concepts',
      period: 'Aug 2025 to Dec 2025',
      location: 'Virginia Tech',
      description: [
        'Grading assignments and providing student support',
        'Teaching foundational ECE concepts',
        'Developing clear rubrics and assessment strategies'
      ]
    },
    {
      title: 'AI Fellow',
      company: 'Handshake AI',
      period: 'Oct 2025 to Nov 2025',
      location: 'Remote',
      description: [
        'Selected for an internal AI safety initiative focused on identifying and documenting failure modes in large language model responses under adversarial conditions.',
        'Engineered high-precision adversarial prompts targeting model reasoning boundaries, successfully eliciting incorrect or confidently wrong responses across complex DSA and computational mathematics problems.',
        'Stress-tested model performance on multi-step algorithmic reasoning including graph traversal, dynamic programming, and mathematical proof construction, exposing systematic failure patterns.',
        'Documented failure cases with structured prompt-response analysis, contributing to a red-teaming knowledge base that informed model reliability improvements in technical reasoning domains.'
      ],
      tech: ['LLM Red-Teaming', 'Adversarial Prompting', 'AI Safety', 'Python']
    },
    {
      title: 'Lead Software Engineer Intern',
      company: 'Shifting Waters Leadership Institute (SWLI)',
      period: 'Jul 2025 to Sep 2025',
      location: 'Richmond, VA · Remote',
      description: [
        "Sole technical owner of organization's web platform: led requirements gathering, technology selection, UI/UX design in Figma, development, and deployment while working directly with the CEO. Mentored one junior team member on development workflows.",
        'Built responsive, mobile-first website using WordPress and Elementor Pro, implementing WCAG accessibility standards, Google Analytics tracking, and SEO optimization.',
        'Automated program and service form generation into structured spreadsheets for executive reporting, and designed Slack-based task management workflows for the distributed team.'
      ],
      tech: ['WordPress', 'Elementor Pro', 'Figma', 'Slack', 'Web Development']
    },
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      period: 'Apr 2021 to Jul 2024',
      location: 'Pune, Maharashtra, India',
      description: [
        'Developed Angular/Ionic hybrid mobile application for a UK-based financial services client, building frontend modules, UI components, and API integrations for a product serving 10K+ users.',
        'Integrated 30+ RESTful API endpoints on the frontend, implementing token-based authentication flows including route guards, HTTP interceptors, and session management.',
        'Optimized backend API performance by adding conditional logic to serve only mobile-specific data and queries, eliminating redundant processing and significantly reducing response times.',
        'Architected reusable application framework (project structure, authentication, base UI components) adopted by 2 additional client projects, reducing initial development time for new engagements.',
        'Led frontend team of 4 during final year, conducting code reviews, pair programming sessions, and internal training that improved code quality and onboarding speed.',
        'Monitored production logs during releases and incidents, identifying and resolving issues to minimize service disruption.'
      ],
      tech: ['Angular', 'Ionic', 'TypeScript', 'REST APIs', 'JavaScript']
    },
    {
      title: 'Assistant System Engineer',
      company: 'Tata Consultancy Services',
      period: 'Nov 2020 to Mar 2021',
      location: 'Pune, Maharashtra, India',
      description: [
        'Developed and maintained Angular-based web application components for enterprise client, implementing responsive UI features and ensuring cross-browser compatibility.',
        'Collaborated with senior engineers to implement Spring Boot backend services and RESTful APIs, gaining hands-on experience with full-stack development workflows.',
        'Conducted unit testing with Jasmine and Karma to ensure code quality before production deployment.'
      ],
      tech: ['Angular', 'Spring Boot', 'Java', 'Jasmine', 'Karma']
    },
    {
      title: 'Python Developer',
      company: 'Obdurate Technologies',
      period: 'Jul 2019 to Aug 2019',
      location: 'Amravati, Maharashtra, India',
      description: [
        'Developed Python-based IoT control system integrated with Arduino sensors, automating device management workflows for prototype testing.',
        'Built lightweight REST APIs using Flask for real-time IoT device communication and sensor data handling.',
        'Assisted with sensor calibration, hardware-software integration, and troubleshooting connectivity between IoT devices and control systems.'
      ],
      tech: ['Python', 'Flask', 'Arduino', 'IoT']
    }
  ]

  return (
    <div className="experience-page">
      <section className="experience-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">
              Work and teaching highlights: building systems and mentoring teams
            </p>
          </motion.div>
        </div>
      </section>

      <section className="experience-content">
        <div className="section-container">
          <div className="timeline">
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
