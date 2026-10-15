import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé':
        return 'status-completed'
      case 'En cours':
        return 'status-in-progress'
      case 'Planifié':
        return 'status-planned'
      default:
        return ''
    }
  }

  return (
    <Link to={`/projects/${project.id}`}>
      <div className="project-card">
        <div className="project-header">
          <h3>{project.name}</h3>
          <span className={`project-status ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <span className="progress-text">{project.progress}%</span>
        </div>
        <div className="project-team">
          <strong>Équipe :</strong> {project.team.join(', ')}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
