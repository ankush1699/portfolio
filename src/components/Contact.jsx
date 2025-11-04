import { useState } from 'react'
import './Contact.css'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'd love to hear from you</p>
      </div>
      <div className="contact-content">
        <div className="contact-info animate-slide-in-left">
          <div className="info-item">
            <div className="info-icon">
              <FiMail />
            </div>
            <div className="info-details">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FiPhone />
            </div>
            <div className="info-details">
              <h3>Phone</h3>
              <p>+1 (234) 567-8900</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <FiMapPin />
            </div>
            <div className="info-details">
              <h3>Location</h3>
              <p>Your City, Country</p>
            </div>
          </div>
        </div>
        <form className="contact-form animate-slide-in-right" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
