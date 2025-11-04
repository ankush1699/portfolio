import { motion } from 'framer-motion'
import './Experience.css'
import TimelineItem from '../components/TimelineItem'

const Experience = () => {
  const experience = [
    {
      title: 'GTA/Grader',
      company: 'ECE 1004',
      period: 'Current',
      location: 'Virginia Tech',
      description: [
        'Grading assignments and providing student support',
        'Teaching foundational ECE concepts',
        'Developing clear rubrics and assessment strategies'
      ]
    },
    {
      title: 'Lead Software Engineer Intern',
      company: 'SWLI',
      period: '2023',
      location: 'Remote',
      description: [
        'Led WordPress/Bubble site build and Figma prototypes',
        'Hostinger setup and Slack tracking systems',
        'Mentored teammate and proposed internal tooling for long-term growth',
        'Improved team workflows and communication processes'
      ],
      tech: ['WordPress', 'Bubble', 'Figma', 'Hostinger']
    },
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      period: '2021-2022',
      location: 'India',
      description: [
        'Shipped hybrid mobile app (MyPhoenixUK) with +30% user engagement',
        'Standardized Angular/Ionic architecture reducing dev time by 40%',
        'Achieved 85% test coverage and reduced crash rates by 50%',
        'Led code reviews and mentored junior developers'
      ],
      tech: ['Angular', 'Ionic', 'TypeScript', 'JavaScript', 'Jest']
    }
  ]

  return (
    <div className="experience-page">
      <section className="experience-header">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Experience</h1>
            <p className="page-subtitle">
              Work and teaching highlights—building systems and mentoring teams
            </p>
          </motion.div>
        </div>
      </section>

      <section className="experience-content">
        <div className="section-container">
          <div className="timeline">
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
