// Données mockées des projets de l'entreprise
export const projectsData = [
  {
    id: 1,
    name: "Refonte du site web",
    description: "Modernisation complète du site web de l'entreprise avec React et un nouveau design.",
    status: "En cours",
    progress: 75,
    team: ["Sophie Martin", "Marie Lefebvre", "Emma Petit"],
    startDate: "2024-01-15",
    endDate: "2024-03-30"
  },
  {
    id: 2,
    name: "Application mobile interne",
    description: "Développement d'une application mobile pour les employés avec React Native.",
    status: "En cours",
    progress: 45,
    team: ["Hugo Garnier", "Lucas Bernard"],
    startDate: "2024-02-01",
    endDate: "2024-05-15"
  },
  {
    id: 3,
    name: "Migration vers le cloud",
    description: "Migration de l'infrastructure vers AWS avec Kubernetes.",
    status: "Planifié",
    progress: 10,
    team: ["Antoine Rousseau", "Nathan Lambert"],
    startDate: "2024-04-01",
    endDate: "2024-07-30"
  },
  {
    id: 4,
    name: "Dashboard Analytics",
    description: "Création d'un tableau de bord pour visualiser les KPIs de l'entreprise.",
    status: "Terminé",
    progress: 100,
    team: ["Léa Dupont", "Sophie Martin"],
    startDate: "2023-11-01",
    endDate: "2024-01-15"
  },
  {
    id: 5,
    name: "API REST v2",
    description: "Refonte complète de l'API backend avec de nouvelles fonctionnalités.",
    status: "En cours",
    progress: 60,
    team: ["Lucas Bernard", "Nathan Lambert"],
    startDate: "2024-01-20",
    endDate: "2024-04-20"
  },
  {
    id: 6,
    name: "Automatisation CI/CD",
    description: "Mise en place d'un pipeline de déploiement automatisé.",
    status: "Terminé",
    progress: 100,
    team: ["Antoine Rousseau"],
    startDate: "2023-10-01",
    endDate: "2023-12-15"
  }
]

// Fonction utilitaire pour obtenir les projets par statut
export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status)
}
// Fonction utilitaire pour récupérer un projet par son ID
export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === parseInt(id))
}
