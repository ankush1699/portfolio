import { useEffect, useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'Git', level: 85 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress"
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transition: `width 1.5s ease-out ${index * 0.1}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
