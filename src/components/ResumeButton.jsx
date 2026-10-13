import { FiDownload } from 'react-icons/fi'
import { personal } from '../data/profile'

// Download button for the résumé.
// While `personal.resumePdf` is null (see src/data/profile.js) it shows a clearly
// marked "coming soon" placeholder instead of a link.
const ResumeButton = ({ className = 'btn', children = 'Résumé' }) => {
  if (!personal.resumePdf) {
    return (
      <span
        className={`${className} btn-disabled`}
        aria-disabled="true"
        title="The final résumé PDF is not ready yet"
      >
        Résumé coming soon
      </span>
    )
  }

  return (
    <a href={`${import.meta.env.BASE_URL}${personal.resumePdf}`} className={className} download>
      <FiDownload /> {children}
    </a>
  )
}

export default ResumeButton
