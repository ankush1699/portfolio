import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Resume.css'
import { FiDownload } from 'react-icons/fi'
import { personal } from '../data/profile'

const Resume = () => {
  // While personal.resumePdf is null (src/data/profile.js), this page shows a notice instead of a PDF.
  const resumeUrl = personal.resumePdf ? `${import.meta.env.BASE_URL}${personal.resumePdf}` : null

  return (
    <div className="resume-page">
      <section className="resume-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="page-title">Resume</h1>
            <p className="page-subtitle">
              {resumeUrl ? 'View or download my resume' : 'Coming soon'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="resume-content">
        <div className="section-container">
          {resumeUrl ? (
            <motion.div
              className="resume-wrapper"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="resume-actions">
                <a href={resumeUrl} download className="btn btn-primary">
                  <FiDownload /> Download Resume
                </a>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  View in new tab
                </a>
              </div>

              <div className="resume-viewer">
                <iframe src={resumeUrl} title="Resume PDF" className="resume-iframe" />
              </div>

              <div className="resume-fallback">
                <p>If the PDF does not load, <a href={resumeUrl} download>download it here</a>.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="resume-placeholder"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h2 className="resume-placeholder-title">My resume is being updated</h2>
              <p>
                The final PDF will be posted here soon. In the meantime, you can read my experience and
                projects on this site, or reach out and I will send it to you directly.
              </p>
              <div className="resume-actions">
                <Link to="/contact" className="btn btn-primary">Contact me</Link>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Resume
