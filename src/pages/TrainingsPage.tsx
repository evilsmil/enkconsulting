import { useState } from 'react'
import { completedTrainings, trainingCategories, trainings, type Training } from '../data/trainings'

function TrainingsPage() {
  const [activeCategory, setActiveCategory] = useState(trainingCategories[0].title)
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null)
  const visibleTrainings = trainings.filter((training) => training.category === activeCategory)

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="section-kicker">Nos formations</p>
          <h1>Des parcours pratiques pour renforcer les compétences numériques.</h1>
          <p>
            ENK Consulting conçoit des formations adaptées aux dirigeants, équipes IT et utilisateurs
            métiers, avec une approche orientée cas pratiques, autonomie et transfert de compétences.
          </p>
        </div>
      </section>

      <section className="page-overview">
        <div className="container page-overview__inner">
          <div>
            <p className="section-kicker">Vue d’ensemble</p>
            <h2>Choisissez un domaine, puis ouvrez la fiche formation</h2>
          </div>
          <p>
            Les formations ENK Consulting peuvent être organisées en présentiel, à distance ou en
            format intra-entreprise, selon le niveau des équipes et les objectifs opérationnels.
          </p>
        </div>
        <div className="container training-tabs" aria-label="Filtrer les formations">
          {trainingCategories.map((category) => (
            <button
              className={`training-tab ${activeCategory === category.title ? 'training-tab--active' : ''}`}
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(category.title)}
            >
              <strong>{category.title}</strong>
              <span>{category.text}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">Fiches formations</p>
              <h2>{activeCategory}</h2>
            </div>
            <p>
              Cliquez sur une formation pour consulter ses objectifs, son public, son programme, sa durée
              et son format.
            </p>
          </div>
          <div className="training-detail-grid">
            {visibleTrainings.map((training) => (
              <article className="training-detail-card training-summary-card" key={training.title}>
                <span>{training.category}</span>
                <h3>{training.title}</h3>
                <p>{training.summary}</p>
                <div className="training-meta">
                  <strong>Durée : {training.duration}</strong>
                  <strong>Format : {training.format}</strong>
                </div>
                <button className="project-link" type="button" onClick={() => setSelectedTraining(training)}>
                  Voir la description <span aria-hidden="true">&gt;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="completed-trainings">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Références formation</p>
            <h2>Quelques formations déjà réalisées</h2>
          </div>
          <div className="completed-trainings__grid">
            {completedTrainings.map((training) => (
              <article className="completed-training-card" key={training.title}>
                <span>{training.client}</span>
                <h3>{training.title}</h3>
                <p>{training.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="training-request">
        <div className="container training-request__inner">
          <div>
            <p className="section-kicker">Inscription & devis</p>
            <h2>Demander une formation adaptée à vos équipes</h2>
            <p>
              Donnez-nous quelques informations sur votre besoin. Nous vous proposerons un format,
              un programme et une durée adaptés à votre niveau de maturité.
            </p>
          </div>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="form-row">
              <label>
                Nom complet
                <input type="text" name="name" placeholder="Votre nom" />
              </label>
              <label>
                Organisation
                <input type="text" name="organization" placeholder="Nom de l’entreprise" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Adresse e-mail
                <input type="email" name="email" placeholder="vous@entreprise.com" />
              </label>
              <label>
                Téléphone
                <input type="tel" name="phone" placeholder="+237 ..." />
              </label>
            </div>
            <label>
              Formation souhaitée
              <select name="training" defaultValue="">
                <option value="" disabled>
                  Choisir une formation
                </option>
                {trainings.map((training) => (
                  <option key={training.title}>{training.title}</option>
                ))}
              </select>
            </label>
            <label>
              Besoin ou niveau des participants
              <textarea name="message" placeholder="Décrivez le profil des participants et vos objectifs"></textarea>
            </label>
            <button className="button button--secondary" type="submit">
              Demander un devis
            </button>
          </form>
        </div>
      </section>

      {selectedTraining ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedTraining(null)}>
          <article
            className="training-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="training-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedTraining(null)}
              aria-label="Fermer la description de la formation"
            >
              ×
            </button>
            <div className="project-modal__content">
              <span>{selectedTraining.category}</span>
              <h2 id="training-modal-title">{selectedTraining.title}</h2>
              <p>{selectedTraining.summary}</p>
              <div className="training-modal__meta">
                <strong>Durée : {selectedTraining.duration}</strong>
                <strong>Format : {selectedTraining.format}</strong>
              </div>
              <div className="modal-info-grid">
                <div>
                  <strong>Objectifs</strong>
                  <ul>
                    {selectedTraining.objectives.map((objective) => (
                      <li key={objective}>{objective}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Cible</strong>
                  <p>{selectedTraining.audience}</p>
                </div>
                <div className="modal-info-grid__wide">
                  <strong>Programme</strong>
                  <ul>
                    {selectedTraining.program.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </main>
  )
}

export default TrainingsPage
