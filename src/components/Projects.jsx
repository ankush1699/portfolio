import './Projects.css'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A beautiful web application built with React and modern design principles.',
      tech: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Project Two',
      description: 'An innovative mobile-responsive website with smooth animations.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Project Three',
      description: 'A full-stack application featuring real-time updates and modern UI.',
      tech: ['React', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="project-card animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="project-image">
              <div className="project-overlay">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FiExternalLink />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
