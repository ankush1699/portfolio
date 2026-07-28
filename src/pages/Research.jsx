import { motion } from 'framer-motion'
import './Research.css'
import TagPill from '../components/TagPill'
import { FiFileText, FiArrowUpRight } from 'react-icons/fi'

const Research = () => {
  const featured = {
    title: 'Predicting Chaotic Traffic Flows in Smart Cities',
    venue: 'Graduate research, Virginia Tech',
    date: 'Dec 2024',
    summary:
      'Chaos-inspired LSTM architecture for traffic flow forecasting on real-time traffic and weather data. Combines chaos-theory treatment of nonlinear dynamics with deep sequence modeling — 87% prediction accuracy with sub-2-second inference for congestion forecasting.',
    metrics: ['Accuracy: 87%', 'Inference: <2s'],
    tags: ['LSTM', 'Chaos Theory', 'Time Series', 'Smart Cities'],
    pdf: `${import.meta.env.BASE_URL}Predicting Traffic Flows in Blacksburg.pdf`,
  }

  const publications = [
    {
      title: 'Intelligence Bureau Communication Application Using Blockchain',
      journal: 'IJIRSET',
      date: 'April 2020',
      authors: 'Ankush Chaudhary et al.',
      summary:
        'Secure P2P communications using SHA-256 and blockchain technology for enhanced security and transparency.',
      pdf: 'https://www.ijirset.com/upload/2020/april/151_Intelligence_NC.PDF',
    },
  ]

  const researchNotes = [
    {
      title: 'Task-Vector Composition for Multitask BERT',
      summary:
        'One 110M-parameter BERT serving both sentiment and NER via task-vector composition — 87% accuracy on SST-2, 74% F1 on CoNLL-2003. Explored efficient parameter sharing for multitask learning.',
      metrics: ['SST-2: 87%', 'NER F1: 74%'],
      tags: ['NLP', 'BERT', 'Multitask Learning'],
    },
    {
      title: 'Cost-Gated LLM Agent Pipelines',
      summary:
        'Design notes from the autonomous job-search agent: early-exit scoring gates, content-addressed caching, and tiered model routing (free-tier scoring, frontier-model prose) to cut per-task LLM cost ~60% without quality loss where it matters.',
      tags: ['LLM Agents', 'LangGraph', 'Cost Optimization'],
    },
    {
      title: 'ZK Password Auth Architecture & Tradeoffs',
      summary:
        'Zero-knowledge proof architectures for password authentication: tradeoffs between proof generation time, verification speed, and security guarantees. Circuit design and optimization strategies in Circom.',
      tags: ['Zero-Knowledge Proofs', 'Security', 'Cryptography'],
    },
  ]

  return (
    <div className="research-page">
      <section className="research-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mono-label"><span className="idx">03</span>Research</p>
            <h1 className="page-title">Papers &amp; notes</h1>
          </motion.div>
        </div>
      </section>

      <section className="research-content">
        <div className="section-container">
          {/* Featured: VT graduate research */}
          <motion.a
            className="research-featured"
            href={featured.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="mono-label research-featured-venue">
              {featured.venue} · {featured.date}
            </p>
            <h2 className="research-featured-title">{featured.title}</h2>
            <p className="research-featured-summary">{featured.summary}</p>
            <div className="note-metrics">
              {featured.metrics.map((m) => (
                <span key={m} className="metric-tag">{m}</span>
              ))}
            </div>
            <span className="mono-label research-featured-cta">
              Read the paper <FiArrowUpRight />
            </span>
          </motion.a>

          <div className="research-section">
            <h2 className="section-title-small">Publications</h2>
            <div className="publications-list">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="publication-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="publication-header">
                    <h3 className="publication-title">{pub.title}</h3>
                    <div className="publication-meta">
                      <span className="publication-journal">{pub.journal}</span>
                      <span className="publication-date">{pub.date}</span>
                    </div>
                  </div>
                  <p className="publication-authors">{pub.authors}</p>
                  <p className="publication-summary">{pub.summary}</p>
                  <div className="publication-links">
                    {pub.pdf && (
                      <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="pub-link">
                        <FiFileText /> View PDF
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="research-section">
            <h2 className="section-title-small">Research Notes</h2>
            <div className="notes-list">
              {researchNotes.map((note, index) => (
                <motion.div
                  key={index}
                  className="note-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <h3 className="note-title">{note.title}</h3>
                  <p className="note-summary">{note.summary}</p>
                  {note.metrics && (
                    <div className="note-metrics">
                      {note.metrics.map((metric, idx) => (
                        <span key={idx} className="metric-tag">{metric}</span>
                      ))}
                    </div>
                  )}
                  <div className="note-tags">
                    {note.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research
