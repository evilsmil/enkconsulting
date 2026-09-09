import enkIcon from '../assets/enk-icon.png'
import enkLogo from '../assets/enk-logo.png'
import heroIllustration from '../assets/hero-illustration.png'
import ContactForm from '../components/ContactForm'
import CtaIllustration from '../components/CtaIllustration'
import SupportIllustration from '../components/SupportIllustration'
import { companyDescription, companyExpertises, companyInfo } from '../data/company'
import { projects } from '../data/projects'
import { featuredServices, packages, processSteps } from '../data/services'
import type { PageId } from '../data/navigation'

type HomePageProps = {
  onNavigate: (page: PageId) => void
}

const supportCapabilities = [
  'Assistance et dépannage à distance',
  'Mises à jour, correctifs et maintenance',
  'Gestion des incidents de sécurité',
  'Supervision des serveurs, réseaux et sauvegardes',
  'Migration et intégration cloud',
  'Support applicatif et accompagnement utilisateur',
  'Formation personnalisée des équipes',
]

const performanceIndicators = [
  ['10', 'pôles d’expertise'],
  ['24/7', 'supervision possible'],
  ['100%', 'services sur mesure'],
  ['360', 'conseil, build et run'],
]

const testimonials = [
  {
    quote:
      'ENK Consulting nous a aidés à clarifier nos priorités numériques et à transformer nos besoins en solutions concrètes.',
    author: 'Direction générale',
    organization: 'PME de services',
  },
  {
    quote:
      'L’accompagnement a été structuré, réactif et très pédagogique. Notre équipe a gagné en autonomie.',
    author: 'Responsable opérations',
    organization: 'Organisation locale',
  },
  {
    quote:
      'Nous avons apprécié la capacité d’ENK à comprendre nos contraintes terrain et à proposer une solution simple à exploiter.',
    author: 'Coordination projet',
    organization: 'Institution partenaire',
  },
]

const featuredProjects = projects.filter((project) =>
  ['signatures-electroniques-upowa', 'exploitation-piscicole-aquafloo', 'site-vitrine-aquafloo'].includes(project.id),
)

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <section className="hero" id="accueil">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__kicker">Partenaire de confiance pour votre</p>
            <h1>
              Transformation digitale &
              <span>Opérations informatiques</span>
            </h1>
            <p className="hero__lead">
              ENK Consulting accompagne les entreprises dans le conseil, l’ingénierie,
              la cybersécurité, l’IA, le cloud et l’exploitation de solutions numériques fiables.
            </p>
            <div className="hero__actions">
              <button className="button button--primary" type="button" onClick={() => onNavigate('services')}>
                Découvrir les services
              </button>
              <button className="button button--outline" type="button" onClick={() => onNavigate('projects')}>
                Découvrir les projets
              </button>
              <button className="button button--outline" type="button" onClick={() => onNavigate('trainings')}>
                Découvrir les formations
              </button>
            </div>
            <div className="hero__socials" aria-label="Réseaux sociaux">
              <span aria-hidden="true"></span>
              <a href={companyInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div className="hero__illustration">
            <img src={heroIllustration} alt="Illustration de transformation numérique et cloud" />
          </div>
        </div>
      </section>

      <section className="solutions" id="a-propos">
        <div className="container solutions__inner">
          <div className="solutions__copy">
            <h2>Des solutions informatiques personnalisées pour votre entreprise</h2>
            <h3>Renforcez votre organisation grâce à des services numériques sur mesure.</h3>
            <p>
              Gardez une longueur d’avance dans un environnement numérique en constante évolution.
              ENK Consulting conçoit, intègre et exploite des solutions adaptées à vos besoins :
              conseil IT, développement logiciel, cloud, cybersécurité, data, IA, support et
              formation. Notre objectif est simple : transformer vos priorités métier en solutions
              fiables, sécurisées et utiles au quotidien.
            </p>
          </div>
          <div className="solutions__cards" aria-label="Solutions principales">
            <article className="solution-card solution-card--featured">
              <span className="solution-icon solution-icon--monitor" aria-hidden="true"></span>
              <h3>Conseil en informatique</h3>
              <p>Audit, stratégie IT, architecture cible et accompagnement de vos projets numériques.</p>
            </article>
            <article className="solution-card">
              <span className="solution-icon solution-icon--shield" aria-hidden="true"></span>
              <h3>Audit & Cybersécurité</h3>
              <p>Protégez vos données, vos infrastructures et vos applications contre les risques cyber.</p>
            </article>
            <article className="solution-card">
              <span className="solution-icon solution-icon--cloud" aria-hidden="true"></span>
              <h3>Cloud Computing</h3>
              <p>Gagnez en performance grâce au cloud, à l’hébergement, aux sauvegardes et au PRA.</p>
            </article>
            <article className="solution-card">
              <span className="solution-icon solution-icon--outsourcing" aria-hidden="true"></span>
              <h3>Externalisation</h3>
              <p>Confiez votre support, votre supervision et votre maintenance à une équipe dédiée.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="featured-services" id="services">
        <div className="services-shape" aria-hidden="true"></div>
        <div className="container">
          <div className="featured-services__heading">
            <h2>Ce que nous offrons</h2>
            <p>Nos services</p>
          </div>
          <div className="featured-services__grid">
            {featuredServices.map((service) => (
              <article className="featured-service" key={service.title}>
                <span className={`feature-icon feature-icon--${service.icon}`} aria-hidden="true"></span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <button type="button" onClick={() => onNavigate('services')}>
                  En savoir plus <span aria-hidden="true">&gt;</span>
                </button>
              </article>
            ))}
          </div>
          <button className="discover-services" type="button" onClick={() => onNavigate('services')}>
            <span>Découvrir tous les services</span>
            <strong aria-hidden="true">&gt;</strong>
          </button>
        </div>
      </section>

      <section className="method" id="methode">
        <div className="container method__inner">
          <div className="section-heading section-heading--left">
            <h2>Pourquoi nous choisir ?</h2>
            <p>Comment nous travaillons</p>
          </div>
          <div className="steps">
            {processSteps.map((step) => (
              <article className="step" key={step.number}>
                <strong>{step.number}</strong>
                <span className={`step-icon step-icon--${step.icon}`} aria-hidden="true"></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="offers" id="offres">
        <div className="container offers__grid">
          <div>
            <p className="section-kicker">Offres packagées</p>
            <h2>Des formats lisibles pour acheter vite et déployer proprement.</h2>
            <p>
              Les expertises ENK peuvent être livrées au forfait, en audit-conseil, en assistance
              technique, en services managés, en abonnement ou en parcours de formation.
            </p>
          </div>
          <div className="packages">
            {packages.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-company" id="qui-sommes-nous">
        <div className="container about-company__inner">
          <div className="about-company__copy">
            <p className="section-kicker">Qui sommes-nous ?</p>
            <h2>À propos de nous</h2>
            <p>
              <strong>{companyInfo.legalName}</strong> est une entreprise de services informatiques
              basée à Yaoundé. Depuis {companyInfo.founded}, nous accompagnons les organisations
              dans la conception, la sécurisation et l’exploitation de leurs systèmes d’information.
            </p>
            <ul>
              {companyExpertises.slice(0, 4).map((expertise) => (
                <li key={expertise}>{expertise}</li>
              ))}
            </ul>
            <p>
              {companyDescription}
            </p>
            <button className="button button--primary" type="button" onClick={() => onNavigate('contact')}>
              Parler à un consultant <span aria-hidden="true">&gt;</span>
            </button>
          </div>
          <div className="about-company__visual" aria-hidden="true">
            <div className="about-company__cube"></div>
            <div className="about-company__panel about-company__panel--primary"></div>
            <div className="about-company__panel about-company__panel--secondary"></div>
            <div className="about-company__panel about-company__panel--accent"></div>
          </div>
        </div>
      </section>

      <section className="support">
        <div className="container support__inner">
          <div className="support__copy">
            <h2>Assistance 24/7</h2>
            <p>
              Notre équipe vous accompagne pour maintenir vos outils disponibles, sécurisés et
              performants. ENK Consulting peut intervenir sur vos incidents, vos infrastructures,
              vos applications et vos sauvegardes avec une organisation claire et des engagements mesurables.
            </p>
            <ul className="support-list">
              {supportCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="support__actions">
              <button className="button button--secondary" type="button" onClick={() => onNavigate('services')}>
                Commander un service
              </button>
              <button className="button button--ghost" type="button" onClick={() => onNavigate('contact')}>
                Demander du support
              </button>
            </div>
          </div>
          <SupportIllustration />
        </div>
      </section>

      <section className="metrics" aria-label="Indicateurs ENK Consulting">
        <div className="container metrics__grid">
          {performanceIndicators.map(([value, label], index) => (
            <article className="metric-card" key={label}>
              <span className={`metric-icon metric-icon--${index + 1}`} aria-hidden="true"></span>
              <h3>{label}</h3>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="partners">
        <div className="partners__intro">
          <div className="container">
            <h2>Nos partenaires</h2>
            <p>
              Nous construisons un écosystème de collaboration avec des acteurs qui partagent notre
              exigence de qualité, d’innovation et de fiabilité.
            </p>
          </div>
        </div>
        <div className="partners__logos">
          <div className="container partners__logos-inner">
            <div className="partner-logo">
              <img src={enkLogo} alt="Partenaire ENK Consulting" />
            </div>
            <div className="partner-logo partner-logo--icon">
              <img src={enkIcon} alt="Partenaire ENK Consulting" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Ils nous font confiance</p>
            <h2>Ce que disent nos clients</h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.author}>
                <p>“{testimonial.quote}”</p>
                <div>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.organization}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-preview">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Réalisations</p>
            <h2>Quelques projets déjà réalisés</h2>
          </div>
          <div className="projects-preview__grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <button
                  className="project-thumb"
                  type="button"
                  style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 127, 131, 0.88), rgba(255, 122, 0, 0.72)), url(${project.imageUrl})` }}
                  onClick={() => onNavigate('projects')}
                  aria-label={`Découvrir le projet ${project.title}`}
                >
                  <span>{project.client}</span>
                </button>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <button type="button" onClick={() => onNavigate('projects')}>
                  En savoir plus <span aria-hidden="true">&gt;</span>
                </button>
              </article>
            ))}
          </div>
          <button className="discover-services" type="button" onClick={() => onNavigate('projects')}>
            <span>Découvrir plus de réalisations</span>
            <strong aria-hidden="true">&gt;</strong>
          </button>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div className="final-cta__copy">
            <p className="section-kicker">Passons à l’action</p>
            <h2>Vous avez un projet numérique à sécuriser, développer ou structurer ?</h2>
            <p>
              Présentez-nous votre besoin : nous vous aidons à cadrer la solution, les priorités
              et le bon niveau d’accompagnement.
            </p>
            <button className="button button--light" type="button" onClick={() => onNavigate('contact')}>
              Parler à ENK Consulting
            </button>
          </div>
          <CtaIllustration />
        </div>
      </section>

      <section className="contact-panel" id="contact-rapide">
        <div className="container contact-panel__inner">
          <div className="contact-panel__copy">
            <p className="section-kicker">Contact rapide</p>
            <h2>Parlez-nous de votre besoin</h2>
            <p>
              Un projet web, cloud, data, cybersécurité ou support IT ? Laissez vos informations
              et notre équipe vous recontactera pour clarifier le besoin.
            </p>
            <div className="contact-panel__details">
              <span>{companyInfo.email}</span>
              <span>{companyInfo.phone}</span>
              <span>Localisation : {companyInfo.location}</span>
              <a href={companyInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn : ENK Consulting SARL
              </a>
              <span>Réponse prioritaire aux demandes professionnelles</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default HomePage
