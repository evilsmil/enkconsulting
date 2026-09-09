import { companyDescription, companyExpertises, companyInfo } from '../data/company'

const legalItems = [
  ['Création', companyInfo.founded],
  ['NIU', companyInfo.niu],
  ['Registre de commerce', companyInfo.registry],
  ['Siège', companyInfo.location],
]

function AboutPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="section-kicker">À propos d’ENK Consulting</p>
          <h1>Une équipe IT pluridisciplinaire au service des projets numériques ambitieux.</h1>
          <p>
            ENK Consulting accompagne les PME, institutions, ONG, administrations et grandes
            entreprises dans leurs projets de transformation numérique, de sécurisation et
            d’exploitation du système d’information.
          </p>
        </div>
      </section>

      <section className="page-overview about-profile">
        <div className="container page-overview__inner">
          <div>
            <p className="section-kicker">Notre identité</p>
            <h2>{companyInfo.legalName}</h2>
          </div>
          <p>{companyDescription}</p>
        </div>
        <div className="container category-grid">
          {legalItems.map(([label, value]) => (
            <article className="category-card" key={label}>
              <h3>{label}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">Domaines d’intervention</p>
              <h2>Des compétences réunies pour livrer, sécuriser et accompagner.</h2>
            </div>
            <p>
              Notre approche combine conseil, ingénierie, déploiement, formation et support pour
              aider chaque organisation à avancer avec méthode.
            </p>
          </div>
          <div className="detail-stack">
            <article className="detail-card">
              <div className="detail-card__head">
                <span>Expertises</span>
                <h3>Ce que nous apportons à vos projets IT</h3>
                <p>
                  Une capacité à comprendre le besoin métier, cadrer la solution, développer ou
                  intégrer les bons outils, puis accompagner les équipes dans l’usage.
                </p>
              </div>
              <div className="detail-card__body">
                {companyExpertises.map((expertise) => (
                  <div key={expertise}>
                    <strong>ENK Consulting</strong>
                    <p>{expertise}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
