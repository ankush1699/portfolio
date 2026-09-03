import { motion } from 'framer-motion'
import './Resume.css'
import { FiDownload } from 'react-icons/fi'
import { personal } from '../data/profile'

const RESUME_URL = `${import.meta.env.BASE_URL}${personal.resumePdf}`

const Resume = () => {
  return (
    <div className="resume-page">
      <section className="resume-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Resume</h1>
            <p className="page-subtitle">
              View or download my resume
            </p>
          </motion.div>
        </div>
      </section>

      <section className="resume-content">
        <div className="section-container">
          <motion.div
            className="resume-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="resume-actions">
              <a href={RESUME_URL} download className="btn btn-primary">
                <FiDownload /> Download Resume
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View in new tab
              </a>
            </div>

            <div className="resume-viewer">
              <iframe src={RESUME_URL} title="Resume PDF" className="resume-iframe" />
            </div>

            <div className="resume-fallback">
              <p>If the PDF does not load, <a href={RESUME_URL} download>download it here</a>.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resume
