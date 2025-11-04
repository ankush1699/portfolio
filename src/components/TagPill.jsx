import './TagPill.css'

const TagPill = ({ children, variant = 'default' }) => {
  return (
    <span className={`tag-pill tag-pill-${variant}`}>
      {children}
    </span>
  )
}

export default TagPill
