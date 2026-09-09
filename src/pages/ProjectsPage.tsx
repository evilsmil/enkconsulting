import { useState } from 'react'
import type { PageId } from '../data/navigation'
import { projectCategories, projects, type Project, type ProjectType } from '../data/projects'

type ProjectsPageProps = {
  onNavigate: (page: PageId) => void
}

const projectTypes: Array<{
  type: ProjectType
  title: string
  label: string
}> = [
  {
    type: 'Interne',
    title: 'Projets internes',
    label: 'Déployés chez nos clients',
  },
  {
    type: 'Public',
    title: 'Projets publics',
    label: 'Visibles au public',
  },
]

function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeType, setActiveType] = useState<ProjectType>('Interne')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const visibleProjects = projects.filter((project) => project.type === activeType)

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="section-kicker">Nos réalisations</p>
          <h1>Des projets numériques pensés pour le terrain et les résultats.</h1>
          <p>
            Découvrez les plateformes, sites vitrines et applications conçus par ENK Consulting pour
            digitaliser les processus internes, valoriser les entreprises et améliorer le suivi métier.
          </p>
        </div>
      </section>

      <section className="page-overview">
        <div className="container page-overview__inner">
          <div>
            <p className="section-kicker">Vue d’ensemble</p>
            <h2>Deux familles de réalisations, une même exigence de qualité</h2>
          </div>
          <p>
            Les projets internes sont réservés aux environnements privés de nos clients. Les projets
            publics sont accessibles en ligne et renforcent la visibilité des organisations.
          </p>
        </div>
        <div className="container project-type-switch" aria-label="Filtrer les réalisations">
          {projectTypes.map((item, index) => {
            const category = projectCategories[index]
            const count = projects.filter((project) => project.type === item.type).length

            return (
              <button
                className={`project-type-card ${activeType === item.type ? 'project-type-card--active' : ''}`}
                key={item.type}
                type="button"
                onClick={() => setActiveType(item.type)}
              >
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{category.text}</p>
                <em>{count} réalisation{count > 1 ? 's' : ''}</em>
              </button>
            )
          })}
        </div>
      </section>

      <section className="project-gallery">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">{activeType === 'Interne' ? 'Projets internes' : 'Projets publics'}</p>
              <h2>{activeType === 'Interne' ? 'Déployés chez nos clients' : 'Visibles au public'}</h2>
            </div>
            <p>
              Cliquez sur l’image ou sur « Lire la description » pour ouvrir la fiche complète du projet.
            </p>
          </div>

          <div className="projects-preview__grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <button
                  className="project-thumb"
                  type="button"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0, 127, 131, 0.88), rgba(255, 122, 0, 0.72)), url(${project.imageUrl})`,
                  }}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Voir l’image et les détails du projet ${project.title}`}
                >
                  <span>{project.client}</span>
                </button>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <button className="project-link" type="button" onClick={() => setSelectedProject(project)}>
                  Lire la description <span aria-hidden="true">&gt;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <div>
            <p className="section-kicker">Projet similaire</p>
            <h2>Vous voulez une réalisation adaptée à votre organisation ?</h2>
            <p>
              ENK Consulting peut analyser votre contexte, proposer une architecture claire et vous
              accompagner jusqu’à la mise en production.
            </p>
          </div>
          <button className="button button--light" type="button" onClick={() => onNavigate('contact')}>
            Demander une réalisation similaire
          </button>
        </div>
      </section>

      {selectedProject ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer la description du projet"
            >
              ×
            </button>
            <a
              className="project-modal__media"
              href={selectedProject.imageUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 127, 131, 0.82), rgba(255, 122, 0, 0.54)), url(${selectedProject.imageUrl})`,
              }}
            >
              <span>Voir l’image en grand</span>
            </a>
            <div className="project-modal__content">
              <span>{selectedProject.category}</span>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.summary}</p>
              <div className="modal-info-grid">
                <div>
                  <strong>Client</strong>
                  <p>{selectedProject.client}</p>
                </div>
                <div>
                  <strong>Contexte</strong>
                  <p>{selectedProject.context}</p>
                </div>
                <div>
                  <strong>Besoin</strong>
                  <p>{selectedProject.need}</p>
                </div>
                <div>
                  <strong>Solution</strong>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>
              <div className="modal-results">
                <strong>Résultats obtenus</strong>
                <ul>
                  {selectedProject.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
              {selectedProject.projectUrl ? (
                <a className="modal-external-link" href={selectedProject.projectUrl} target="_blank" rel="noreferrer">
                  Ouvrir le lien du projet
                </a>
              ) : null}
            </div>
          </article>
        </div>
      ) : null}
    </main>
  )
}

export default ProjectsPage
