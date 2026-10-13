import './ProjectCover.css'

// A project's visual: a real image or diagram when `cover` is set,
// otherwise a tile showing its headline number from `coverStat`.
const ProjectCover = ({ project, large = false }) => {
  const size = large ? ' project-cover-large' : ''

  if (project.cover) {
    return (
      <img
        className={`project-cover project-cover-img${size}`}
        src={`${import.meta.env.BASE_URL}${project.cover}`}
        alt={project.coverAlt || `${project.title} overview`}
        loading="lazy"
      />
    )
  }

  if (!project.coverStat) return null

  return (
    <div className={`project-cover project-cover-tile${size}`} role="img" aria-label={`${project.coverStat.value} ${project.coverStat.label}`}>
      <span className="project-cover-value">{project.coverStat.value}</span>
      <span className="project-cover-label">{project.coverStat.label}</span>
    </div>
  )
}

export default ProjectCover
