import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import TagPill from '../components/TagPill'
import TimelineItem from '../components/TimelineItem'
import { projects } from '../data/projects'

const Home = () => {
  const featuredProjects = projects.slice(0, 3)

  const experiencePreview = [
    {
      title: 'GTA/Grader',
      company: '1004: Introduction to ECE Concepts',
      period: 'Aug 2025 to Dec 2025',
      location: 'Virginia Tech',
      description: [
        'Grading assignments and providing student support',
        'Teaching foundational ECE concepts'
      ]
    },
    {
      title: 'Lead Software Engineer Intern',
      company: 'Shifting Waters Leadership Institute (SWLI)',
      period: 'Jul 2025 to Sep 2025',
      location: 'Richmond, VA · Remote',
      description: [
        "Sole technical owner of organization's web platform: led requirements, UI/UX in Figma, development, and deployment; mentored one junior developer.",
        'Built responsive, mobile-first site with WordPress/Elementor Pro; WCAG accessibility, Google Analytics, and SEO. Automated form generation and Slack-based task workflows.'
      ],
      tech: ['WordPress', 'Elementor Pro', 'Figma', 'Slack']
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ankush Chaudhary
            </motion.h1>
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Software & Machine Intelligence @ Virginia Tech
            </motion.h2>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Full-stack engineer with 4+ years of experience building enterprise mobile and web applications. At Tata Consultancy Services, I developed and shipped a hybrid mobile application for a UK-based financial services client serving 10K+ users, built a reusable application framework adopted across multiple client projects, and led a frontend team of 4 engineers. My core stack is Angular, Ionic, TypeScript, and Spring Boot, and I&apos;m currently completing my M.S. in Computer Engineering at Virginia Tech (GPA 3.8, May 2026).
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
              <a href="https://www.icloud.com/iclouddrive/043pkLFh2vKhNrKsHIIspurHA#Ankush_Chaudhary_Software_Engineer_Resume" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiDownload /> Download Resume
              </a>
            </motion.div>
            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a href="https://github.com/ankush1699" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/ankushchaudhary01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:ankushchaudhary.ac99@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Real systems with concrete outcomes</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">Work & teaching highlights</p>
          </div>
          <div className="timeline">
            {experiencePreview.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === experiencePreview.length - 1}
              />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/experience" className="btn btn-secondary">
              View Full Experience <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Let's Build Something Together</h2>
            <p className="cta-description">
              I'm always interested in new projects and collaborations. 
              Let's start a conversation.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
