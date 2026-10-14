// Header and footer logo: the name is an image, the role line under it is live text.
const Logo = ({ className = '' }) => (
  <span className={`logo-lockup ${className}`}>
    <img
      src={`${import.meta.env.BASE_URL}logo-name-on-dark.png`}
      alt="Ankush Chaudhary"
      className="logo-lockup-name"
    />
    <span className="logo-lockup-role">Full Stack Software Engineer (AI)</span>
  </span>
)

export default Logo
