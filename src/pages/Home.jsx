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
  
  const highlights = {
    skills: ['C++', 'Python', 'TensorFlow', 'PyTorch', 'React', 'Spring Boot'],
    focus: ['Deep Learning', 'Computer Vision', 'NLP', 'System Design', 'ZK Proofs'],
    currently: ['Budget Management desktop app (PyQt6)', 'GTA (ECE 1004)']
  }

  const experiencePreview = [
    {
      title: 'GTA/Grader',
      company: 'ECE 1004',
      period: 'Current',
      location: 'Virginia Tech',
      description: [
        'Grading assignments and providing student support',
        'Teaching foundational ECE concepts'
      ]
    },
    {
      title: 'Lead Software Engineer Intern',
      company: 'SWLI',
      period: '2023',
      location: 'Remote',
      description: [
        'Led WordPress/Bubble site build and Figma prototypes',
        'Hostinger setup and Slack tracking systems',
        'Mentored teammate and proposed internal tooling for growth'
      ],
      tech: ['WordPress', 'Bubble', 'Figma']
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
              Ankush
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
              I design and build ML-powered systems: from GANs and NLP to secure auth with ZK proofs—plus reliable full-stack apps. Currently a grader for ECE1004 and MS candidate (GPA 3.73).
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
              <a href="/resume.pdf" className="btn btn-outline" download>
                <FiDownload /> Download Resume
              </a>
            </motion.div>
            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:ankushchaudhary1@vt.edu" aria-label="Email">
                <FiMail />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="section-container">
          <div className="highlights-grid">
            <div className="highlight-block">
              <h3 className="highlight-title">Core Skills</h3>
              <div className="highlight-items">
                {highlights.skills.map((skill) => (
                  <TagPill key={skill}>{skill}</TagPill>
                ))}
              </div>
            </div>
            <div className="highlight-block">
              <h3 className="highlight-title">Focus Areas</h3>
              <div className="highlight-items">
                {highlights.focus.map((area) => (
                  <TagPill key={area}>{area}</TagPill>
                ))}
              </div>
            </div>
            <div className="highlight-block">
              <h3 className="highlight-title">Currently</h3>
              <ul className="highlight-list">
                {highlights.currently.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
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
