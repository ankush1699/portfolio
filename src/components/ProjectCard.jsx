import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProjectCard.css'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import TagPill from './TagPill'

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <div className="project-overlay">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
              aria-label="View Demo"
            >
              <FiExternalLink />
            </a>
          )}
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
              aria-label="View Code"
            >
              <FiGithub />
            </a>
          )}
          <Link 
            to={`/projects/${project.slug}`}
            className="project-link project-link-text"
            aria-label="View Case Study"
          >
            View Case Study
          </Link>
        </div>
        {project.cover ? (
          <img src={project.cover} alt={project.title} />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-meta">
          {project.role && <span className="project-role">{project.role}</span>}
          {project.oneLiner && <p className="project-oneliner">{project.oneLiner}</p>}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.outcomes && project.outcomes.length > 0 && (
          <ul className="project-outcomes">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
        )}
        <div className="project-tech">
          {project.stack?.map((tech) => (
            <TagPill key={tech}>{tech}</TagPill>
          ))}
        </div>
        <Link to={`/projects/${project.slug}`} className="project-cta">
          View Case Study →
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
