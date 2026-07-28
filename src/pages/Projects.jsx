import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Projects.css'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'AI', 'ML', 'CV', 'Security/ZK', 'Apps']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="projects-page">
      <section className="projects-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mono-label"><span className="idx">01</span>Work</p>
            <h1 className="page-title">Projects</h1>
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

          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <Link to={`/projects/${p.slug}`} className="work-row">
                <span className="work-num mono-label">{String(i + 1).padStart(2, '0')}</span>
                <div className="work-main">
                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-oneliner">{p.oneLiner}</p>
                  <div className="work-metrics">
                    <span className="work-metric work-metric-cat">{p.category}</span>
                    {(p.metrics || []).map((m) => (
                      <span key={m} className="work-metric">{m}</span>
                    ))}
                  </div>
                </div>
                <span className="work-arrow"><FiArrowUpRight /></span>
              </Link>
            </motion.div>
          ))}

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
