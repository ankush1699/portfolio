import { useState } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'ML', 'CV', 'Security/ZK', 'Apps']
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="projects-page">
      <section className="projects-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Projects</h1>
            <p className="page-subtitle">
              Real systems with concrete outcomes—from ML models to secure authentication
            </p>
          </motion.div>
        </div>
      </section>

      <section className="projects-content">
        <div className="section-container">
          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
