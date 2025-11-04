import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header animate-fade-in-up">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>
      </div>
      <div className="about-content">
        <div className="about-text animate-slide-in-left">
          <p>
            Hi there! I'm a passionate developer who loves creating meaningful 
            digital experiences. With a keen eye for detail and a love for clean code, 
            I strive to build applications that are both beautiful and functional.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open source projects, or enjoying a good cup of coffee 
            while brainstorming my next idea.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">2+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
