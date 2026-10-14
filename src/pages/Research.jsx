import { motion } from 'framer-motion'
import './Research.css'
import TagPill from '../components/TagPill'
import { FiFileText, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { researchPapers } from '../data/research'

const paperHref = (paper) =>
  paper.paperUrl || `${import.meta.env.BASE_URL}${encodeURIComponent(paper.localPdf)}`

const Research = () => {
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
        'Fine-tuning BERT separately on sentiment (SST-2) and named entity recognition (CoNLL-2003), taking a task vector from each, and merging them into one 110M-parameter model. The merged model trades some accuracy for being one model: 87% accuracy on SST-2 against 92% for the single-task model, and 74% F1 on CoNLL-2003 against 89%. The notebooks cover fine-tuning, merging and evaluation.',
      tags: ['NLP', 'BERT', 'PyTorch', 'Multitask Learning'],
    },
    {
      title: 'Cost-Gated LLM Agent Pipelines',
      summary:
        'Design notes from the automated job search pipeline: early-exit scoring gates, content-addressed caching, and tiered model routing (Claude Haiku 4.5 first, with Groq and then local Ollama as fallbacks, and Claude Sonnet 4.6 for the final text) to keep a tailored application near 9 cents.',
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
          {/* Featured research papers */}
          {researchPapers.map((paper, i) => (
            <motion.article
              key={paper.id}
              className="research-featured"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
            >
              <p className="mono-label research-featured-venue">
                {paper.venue} · {paper.date}
              </p>
              <h2 className="research-featured-title">{paper.title}</h2>
              <p className="research-featured-summary">{paper.summary}</p>
              <div className="note-metrics">
                {paper.metrics.map((m) => (
                  <span key={m} className="metric-tag">{m}</span>
                ))}
              </div>
              <div className="note-tags">
                {paper.tags.map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
              <div className="research-featured-links">
                <a href={paperHref(paper)} target="_blank" rel="noopener noreferrer" className="mono-label research-featured-cta">
                  Read the paper <FiArrowUpRight />
                </a>
                {paper.codeUrl && (
                  <a href={paper.codeUrl} target="_blank" rel="noopener noreferrer" className="mono-label research-featured-cta">
                    <FiGithub /> Code on GitHub
                  </a>
                )}
              </div>
            </motion.article>
          ))}

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
