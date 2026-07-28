import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

// Formspree: create a form at https://formspree.io and set your form ID in .env as VITE_FORMSPREE_ID
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_URL) {
      setErrorMessage('Contact form is not configured. Please set VITE_FORMSPREE_ID in .env (get it from formspree.io).')
      setStatus('error')
      return
    }
    setStatus('sending')
    setErrorMessage('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please email me directly at ankushchaudhary.ac99@gmail.com')
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              I'd love to hear from you. Let's start a conversation about your next project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="contact-info-title">Let's Chat</h2>
              <p className="contact-info-description">
                I'm always interested in new projects, collaborations, and opportunities. 
                Feel free to reach out via email or connect on LinkedIn.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Email</h3>
                    <a href="mailto:ankushchaudhary.ac99@gmail.com">ankushchaudhary.ac99@gmail.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Phone</h3>
                    <a href="tel:+18157798718">+1 (815) 779-8718</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <FiMapPin />
                  </div>
                  <div className="contact-detail-content">
                    <h3>Location</h3>
                    <p>Chicago, IL</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === 'success' && (
                  <p className="form-message form-message-success">Thank you! I&apos;ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="form-message form-message-error">{errorMessage}</p>
                )}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : (<><FiSend /> Send Message</>)}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
