import type { PageId } from '../data/navigation'
import { serviceCategories } from '../data/services'

type ServicesPageProps = {
  onNavigate: (page: PageId) => void
}

function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="section-kicker">Catalogue ENK Consulting</p>
          <h1>Services numériques pour conseiller, construire, sécuriser et exploiter.</h1>
          <p>
            Notre catalogue couvre le cycle de vie complet du numérique : audit, développement,
            IA, infrastructure, cybersécurité, data, infogérance et formation.
          </p>
        </div>
      </section>

      <section className="catalogue">
        <div className="container">
          <div className="catalogue__grid">
            {serviceCategories.map((service) => (
              <article className="featured-service catalogue-service" key={service.code}>
                <span className={`feature-icon feature-icon--${service.icon}`} aria-hidden="true"></span>
                <span className="catalogue-service__code">{service.code}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <button type="button" onClick={() => onNavigate('contact')}>
                  En savoir plus <span aria-hidden="true">&gt;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
