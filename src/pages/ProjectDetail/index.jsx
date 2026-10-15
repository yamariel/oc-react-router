import { useParams, useNavigate } from 'react-router-dom'
import { getProjectById } from '../../data/projects'
import './ProjectDetail.css'

function ProjectDetail() {
  // Récupération de l'ID depuis l'URL
  const { id } = useParams()
  const navigate = useNavigate()

  const project = getProjectById(parseInt(id))

  if (!project) {
    return (
      <div className="page">
        <div className="project-not-found">
          <h1>Projet non trouvé 🙈</h1>
          <p>Le projet demandé n'existe pas.</p>
        </div>
      </div>
    )
  }

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
    <div className="page">
      <button onClick={() => navigate('/projects')} className="back-button">
        ← Retour à la liste
      </button>

      <div className="project-detail">
        <div className="project-detail-header">
          <div>
            <h1>{project.name}</h1>
            <span className={`project-detail-status ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="project-detail-content">
          <section className="project-detail-section">
            <h2>Description</h2>
            <p>{project.description}</p>
          </section>

          <section className="project-detail-section">
            <h2>Progression</h2>
            <div className="project-progress-detail">
              <div className="progress-bar-detail">
                <div
                  className="progress-fill-detail"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="progress-text-detail">{project.progress}%</span>
            </div>
          </section>

          <section className="project-detail-section">
            <h2>Équipe</h2>
            <div className="project-team-detail">
              {project.team.map((member) => (
                <span key={member} className="team-member-badge">
                  {member}
                </span>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <h2>Dates</h2>
            <div className="project-dates">
              <div className="date-item">
                <strong>Début :</strong> {new Date(project.startDate).toLocaleDateString('fr-FR')}
              </div>
              <div className="date-item">
                <strong>Fin :</strong> {new Date(project.endDate).toLocaleDateString('fr-FR')}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail