import enkLogo from '../assets/enk-logo.png'
import { companyInfo } from '../data/company'
import type { PageId } from '../data/navigation'

type FooterProps = {
  onNavigate: (page: PageId) => void
}

const footerServices = [
  'Cybersécurité',
  'Cloud & infrastructure',
  'Développement web',
  'ERP & CRM',
  'Data & reporting',
  'Support & infogérance',
]

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__shape" aria-hidden="true"></div>
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={enkLogo} alt="ENK Consulting" />
          <p>
            Des services IT fiables pour sécuriser, moderniser et exploiter les solutions numériques
            des organisations depuis Yaoundé.
          </p>
          <div className="footer__socials" aria-label="Réseaux sociaux">
            <a href={companyInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h2>Services</h2>
          {footerServices.map((service) => (
            <button type="button" key={service} onClick={() => onNavigate('services')}>
              {service}
            </button>
          ))}
        </div>

        <div className="footer__column">
          <h2>Soutien</h2>
          <button type="button" onClick={() => onNavigate('contact')}>
            Nous contacter
          </button>
          <button type="button" onClick={() => onNavigate('about')}>
            À propos de nous
          </button>
          <button type="button" onClick={() => onNavigate('projects')}>
            Nos réalisations
          </button>
          <button type="button" onClick={() => onNavigate('trainings')}>
            Nos formations
          </button>
        </div>

        <div className="footer__contact">
          <h2>Prendre contact</h2>
          <p>
            <strong>Courriel :</strong>
            {companyInfo.email}
          </p>
          <p>
            <strong>Téléphone :</strong>
            {companyInfo.phone}
          </p>
          <p>
            <strong>Adresse :</strong>
            {companyInfo.location}
          </p>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>Copyright © 2026 ENK Consulting. Tous droits réservés.</span>
      </div>
    </footer>
  )
}

export default Footer
