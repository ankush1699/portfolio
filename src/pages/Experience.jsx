import { motion } from 'framer-motion'
import './Experience.css'
import { experience, education, skills } from '../data/profile'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const Experience = () => {
  return (
    <div className="experience-page">
      <section className="exp-header">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mono-label"><span className="idx">02</span>Experience</p>
            <h1 className="page-title">Where I&rsquo;ve worked</h1>
          </motion.div>
        </div>
      </section>

      <section className="exp-body">
        <div className="section-container">
          {experience.map((e) => (
            <motion.article key={e.company + e.period} className="exp-entry" {...fadeUp}>
              <div className="exp-meta">
                <p className="mono-label exp-period">{e.period}</p>
                <p className="exp-location">{e.location}</p>
              </div>
              <div className="exp-detail">
                <h3 className="exp-title">{e.title}</h3>
                <p className="exp-company">{e.company}</p>
                <div className="exp-tech">
                  {e.tech.map((t) => (
                    <span key={t} className="work-metric">{t}</span>
                  ))}
                </div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="exp-education">
        <div className="section-container">
          <p className="mono-label exp-section-label"><span className="idx">+</span>Education</p>
          {education.map((ed) => (
            <motion.div key={ed.degree} className="exp-entry exp-entry-compact" {...fadeUp}>
              <div className="exp-meta">
                <p className="mono-label exp-period">{ed.period}</p>
              </div>
              <div className="exp-detail">
                <h4 className="exp-title-sm">{ed.degree} · {ed.school}</h4>
                <p className="exp-edu-detail">{ed.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="exp-skills">
        <div className="section-container">
          <p className="mono-label exp-section-label"><span className="idx">+</span>Toolbox</p>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} className="skills-group" {...fadeUp}>
                <p className="mono-label skills-category">{category}</p>
                <p className="skills-items">{items.join(' · ')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
