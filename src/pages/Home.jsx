import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'
import { FiArrowUpRight, FiArrowRight, FiDownload } from 'react-icons/fi'
import { projects } from '../data/projects'
import { personal, experience } from '../data/profile'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const Home = () => {
  const featured = projects.slice(0, 3)

  return (
    <div className="home">
      {/* ——— Hero ——— */}
      <section className="hero">
        <div className="section-container">
          <motion.p
            className="mono-label hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {personal.location} · {personal.availability}
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
          >
            Ankush<br />Chaudhary
          </motion.h1>
          <motion.div
            className="hero-role-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
          >
            <p className="hero-role">{personal.role}</p>
            <p className="hero-tagline">{personal.tagline}</p>
          </motion.div>
          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <FiArrowUpRight /></a>
            <a href={`mailto:${personal.email}`}>Email <FiArrowUpRight /></a>
            <a href={`${import.meta.env.BASE_URL}${personal.resumePdf}`} download>Résumé <FiDownload /></a>
          </motion.div>
        </div>
      </section>

      {/* ——— 01 Selected work ——— */}
      <section className="work">
        <div className="section-container">
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
        <div className="section-container">
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
                  Chaos-inspired LSTM forecasting on real-time traffic and weather data — 87% accuracy,
                  sub-2s inference. Virginia Tech.
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
