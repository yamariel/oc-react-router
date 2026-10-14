import { useParams } from 'react-router-dom'
import { getEmployeeById } from '../../data/employees'
import './EmployeeDetail.css'

// Note pour l'étudiant : Dans le chapitre 2, vous utiliserez useParams()
// pour récupérer l'ID depuis l'URL. Pour l'instant, on affiche l'employé avec l'id 1.
function EmployeeDetail() {
  // Dans le chapitre 2, cette ligne sera remplacée par :
  const { id } = useParams()

  const employee = getEmployeeById(parseInt(id))

  if (!employee) {
    return (
      <div className="page">
        <div className="employee-not-found">
          <h1>Employé non trouvé 🙈</h1>
          <p>L'employé demandé n'existe pas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="employee-detail">
        <div className="employee-detail-header">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="employee-detail-avatar"
          />
          <div className="employee-detail-info">
            <h1>{employee.name}</h1>
            <p className="employee-detail-position">{employee.position}</p>
            <p className="employee-detail-department">{employee.department}</p>
          </div>
        </div>

        <div className="employee-detail-content">
          <section className="employee-detail-section">
            <h2>Biographie</h2>
            <p>{employee.bio}</p>
          </section>

          <section className="employee-detail-section">
            <h2>Contact</h2>
            <div className="employee-contact">
              <div className="contact-item">
                <strong>Email :</strong> {employee.email}
              </div>
              <div className="contact-item">
                <strong>Téléphone :</strong> {employee.phone}
              </div>
            </div>
          </section>

          <section className="employee-detail-section">
            <h2>Compétences</h2>
            <div className="employee-skills">
              {employee.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetail
