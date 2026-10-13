import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'
import { FiArrowUpRight, FiArrowRight, FiDownload } from 'react-icons/fi'
import { projects } from '../data/projects'
import { personal, experience, stats, coreStack } from '../data/profile'
import ProjectCover from '../components/ProjectCover'

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-20px' },
  transition: { duration: 0.3, ease: 'easeOut' },
}

// Wrap the given phrases in rounded highlight boxes (maroon text)
const renderHighlighted = (text, phrases = []) => {
  if (!phrases.length) return text
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  return text
    .split(new RegExp(`(${escaped.join('|')})`, 'g'))
    .map((part, i) => (phrases.includes(part) ? <span key={i} className="hl">{part}</span> : part))
}

const Home = () => {
  const featured = projects.slice(0, 3)
  const [photoFailed, setPhotoFailed] = useState(false)
  const [roleTitle, roleStack = ''] = personal.role.split(' · ')
  const stack = roleStack.split(',').map((t) => t.trim()).filter(Boolean)

  return (
    <div className="home">
      {/* ——— Hero ——— */}
      <section className="hero">
        <div className="section-container hero-grid">
          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {photoFailed ? (
              <div className="hero-photo-placeholder" role="img" aria-label="Ankush Chaudhary">
                AC
              </div>
            ) : (
              <img
                className="hero-photo-img"
                src={`${import.meta.env.BASE_URL}hero.png`}
                alt="Ankush Chaudhary"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </motion.div>

          <div className="hero-content panel">
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
            >
              Ankush<br /><span className="hero-name-accent">Chaudhary</span>
            </motion.h1>
            <motion.div
              className="hero-role-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
            >
              <p className="hero-role">{roleTitle}</p>
              {stack.length > 0 && (
                <div className="hero-chips">
                  {stack.map((t) => (
                    <span key={t} className="hl hl-chip">{t}</span>
                  ))}
                </div>
              )}
              <p className="hero-tagline">{renderHighlighted(personal.tagline, personal.taglineHighlights)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="hero-actions">
                <a href={`${import.meta.env.BASE_URL}${personal.resumePdf}`} className="btn btn-primary" download>
                  <FiDownload /> Résumé
                </a>
                <Link to="/contact" className="btn btn-secondary">Contact me</Link>
              </div>
              <div className="hero-links">
                <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <FiArrowUpRight /></a>
                <a href={`mailto:${personal.email}`}>Email <FiArrowUpRight /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— Numbers and core stack ——— */}
      <section className="proof">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((s) => (
              <motion.div key={s.value} className="stat-card" {...fadeUp}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="stack-strip" aria-label="Core stack">
            <span className="mono-label">Core stack</span>
            <ul className="stack-list">
              {coreStack.map((t) => (
                <li key={t} className="work-metric">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— 01 Selected work ——— */}
      <section className="work">
        <div className="section-container panel">
          <div className="section-head">
            <p className="mono-label"><span className="idx">01</span>Selected Work</p>
            <Link to="/projects" className="section-head-link">All projects <FiArrowRight /></Link>
          </div>
          {featured.map((p, i) => (
            <motion.div key={p.slug} {...fadeUp}>
              <Link to={`/projects/${p.slug}`} className="work-row">
                <span className="work-num mono-label">{String(i + 1).padStart(2, '0')}</span>
                <div className="work-main">
                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-oneliner">{p.oneLiner}</p>
                  {p.metrics?.length > 0 && (
                    <div className="work-metrics">
                      {p.metrics.map((m) => (
                        <span key={m} className="work-metric">{m}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="work-cover"><ProjectCover project={p} /></div>
                <span className="work-arrow"><FiArrowUpRight /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——— 02 Experience ledger ——— */}
      <section className="ledger">
        <div className="section-container">
          <div className="section-head">
            <p className="mono-label"><span className="idx">02</span>Experience</p>
            <Link to="/experience" className="section-head-link">Full history <FiArrowRight /></Link>
          </div>
          {experience.map((e) => (
            <motion.div key={e.company + e.period} className="ledger-row" {...fadeUp}>
              <span className="ledger-period mono-label">{e.period}</span>
              <div className="ledger-main">
                <h4 className="ledger-title">
                  {e.title} <span className="ledger-at">·</span> {e.company}
                </h4>
                <p className="ledger-summary">{e.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——— 03 Research ——— */}
      <section className="research-strip">
        <div className="section-container panel">
          <div className="section-head">
            <p className="mono-label"><span className="idx">03</span>Research</p>
            <Link to="/research" className="section-head-link">All research <FiArrowRight /></Link>
          </div>
          <motion.div {...fadeUp}>
            <a
              className="research-feature"
              href={`${import.meta.env.BASE_URL}Predicting Traffic Flows in Blacksburg.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h3 className="research-feature-title">Predicting Chaotic Traffic Flows in Smart Cities</h3>
                <p className="research-feature-sub">
                  Chaos-inspired LSTM forecasting on real-time traffic and weather data, with 87% accuracy
                  and sub-2s inference. Virginia Tech.
                </p>
              </div>
              <span className="mono-label research-feature-cta">Read the paper <FiArrowUpRight /></span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ——— Closing CTA ——— */}
      <section className="closing">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <h2 className="closing-title">Currently interviewing for software &amp; AI engineering roles.</h2>
            <div className="closing-actions">
              <a href={`mailto:${personal.email}`} className="btn btn-primary btn-large">Get in touch</a>
              <a href={`${import.meta.env.BASE_URL}${personal.resumePdf}`} className="btn btn-large" download>
                <FiDownload /> Download résumé
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
