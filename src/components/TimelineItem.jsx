import { motion } from 'framer-motion'
import './TimelineItem.css'
import TagPill from './TagPill'

const TimelineItem = ({ item, index = 0, isLast = false }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3 className="timeline-title">{item.title}</h3>
          <span className="timeline-period">{item.period}</span>
        </div>
        <div className="timeline-company">{item.company}</div>
        {item.location && (
          <div className="timeline-location">{item.location}</div>
        )}
        <ul className="timeline-description">
          {item.description?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        {item.tech && item.tech.length > 0 && (
          <div className="timeline-tech">
            {item.tech.map((tech) => (
              <TagPill key={tech}>{tech}</TagPill>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default TimelineItem
