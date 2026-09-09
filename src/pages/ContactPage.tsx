import ContactForm from '../components/ContactForm'
import { companyInfo } from '../data/company'

function ContactPage() {
  return (
    <main className="page">
      

      <section className="contact-panel contact-panel--page">
        <div className="container contact-panel__inner">
          <div className="contact-panel__copy">
            <p className="section-kicker">Formulaire de contact</p>
            <h2>Envoyez-nous votre demande</h2>
            <p>
              Décrivez votre besoin en quelques lignes. Nous vous répondrons avec une première
              orientation claire sur le service, le format d’accompagnement et les prochaines étapes.
            </p>
            <div className="contact-panel__details">
              <span>{companyInfo.email}</span>
              <span>{companyInfo.phone}</span>
              <span>Localisation : {companyInfo.location}</span>
              <a href={companyInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn : ENK Consulting SARL
              </a>
              <span>Conseil IT, projets numériques, formations et support</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
