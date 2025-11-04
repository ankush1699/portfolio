import { motion } from 'framer-motion'
import './Research.css'
import TagPill from '../components/TagPill'
import { FiExternalLink, FiFileText } from 'react-icons/fi'

const Research = () => {
  const publications = [
    {
      title: 'Intelligence Bureau Communication Application Using Blockchain',
      journal: 'IJIRSET',
      date: 'April 2020',
      authors: 'Ankush Chaudhary et al.',
      summary: 'Secure P2P communications using SHA-256 and blockchain technology for enhanced security and transparency.',
      link: '#',
      pdf: '#'
    }
  ]

  const researchNotes = [
    {
      title: 'Task-Vector Composition for Multitask BERT',
      summary: 'Achieved 87% accuracy on SST-2 sentiment analysis and 74% F1 score on NER tasks using task-vector composition techniques. Explored efficient parameter sharing strategies for multitask learning.',
      metrics: ['SST-2: 87%', 'NER F1: 74%'],
      tags: ['NLP', 'BERT', 'Multitask Learning']
    },
    {
      title: 'Chaos-inspired LSTM for Traffic Forecasting',
      summary: 'Developed a chaos-inspired LSTM architecture for improved traffic flow prediction. Leveraged chaos theory principles to enhance temporal modeling capabilities.',
      tags: ['Time Series', 'LSTM', 'Traffic Forecasting']
    },
    {
      title: 'ZK Password Auth Architecture & Tradeoffs',
      summary: 'Explored zero-knowledge proof architectures for password authentication, analyzing tradeoffs between proof generation time, verification speed, and security guarantees. Detailed circuit design and optimization strategies.',
      tags: ['Zero-Knowledge Proofs', 'Security', 'Cryptography']
    }
  ]

  return (
    <div className="research-page">
      <section className="research-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Research</h1>
            <p className="page-subtitle">
              Publications, research notes, and technical explorations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="research-content">
        <div className="section-container">
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
                    {pub.link && (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">
                        <FiExternalLink /> View Publication
                      </a>
                    )}
                    {pub.pdf && (
                      <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="pub-link">
                        <FiFileText /> PDF
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
                  transition={{ delay: (index + publications.length) * 0.1 }}
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
