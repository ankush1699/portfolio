import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProjectDetail.css'
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import TagPill from '../components/TagPill'
import { getProjectBySlug } from '../data/projects'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="project-detail-page">
      <section className="project-detail-header">
        <div className="section-container">
          <Link to="/projects" className="back-link">
            <FiArrowLeft /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.role && (
              <span className="project-role-badge">{project.role}</span>
            )}
            <h1 className="project-detail-title">{project.title}</h1>
            {project.oneLiner && (
              <p className="project-detail-oneliner">{project.oneLiner}</p>
            )}
            
            <div className="project-detail-meta">
              <div className="project-links">
                {project.repo && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <FiExternalLink /> Demo
                  </a>
                )}
              </div>
              {project.metrics && project.metrics.length > 0 && (
                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="metric-badge">{metric}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="project-tech-stack">
              {project.stack?.map((tech) => (
                <TagPill key={tech}>{tech}</TagPill>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="section-container">
          <div className="project-content-grid">
            <div className="project-main-content">
              {project.problem && (
                <motion.div
                  className="content-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2>Problem</h2>
                  <p>{project.problem}</p>
                </motion.div>
              )}

              {project.approach && (
                <motion.div
                  className="content-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2>Approach</h2>
                  <p>{project.approach}</p>
                </motion.div>
              )}

              {project.results && (
                <motion.div
                  className="content-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2>Results</h2>
                  <p>{project.results}</p>
                  {project.outcomes && project.outcomes.length > 0 && (
                    <ul className="outcomes-list">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}

              {project.improvements && project.improvements.length > 0 && (
                <motion.div
                  className="content-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2>What I'd Improve Next</h2>
                  <ul className="improvements-list">
                    {project.improvements.map((improvement, idx) => (
                      <li key={idx}>{improvement}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
