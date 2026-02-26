import { motion } from 'framer-motion'
import './Resume.css'
import { FiDownload } from 'react-icons/fi'

const RESUME_URL = 'https://www.icloud.com/iclouddrive/043pkLFh2vKhNrKsHIIspurHA#Ankush_Chaudhary_Software_Engineer_Resume'

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
              View or download my resume from iCloud
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
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FiDownload /> View / Download Resume
              </a>
            </div>

            <div className="resume-fallback">
              <p>Opens in iCloud. You can view or download the PDF from there.</p>
              <p>Direct link: <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Ankush Chaudhary, Software Engineer Resume</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resume
