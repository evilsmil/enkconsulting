import enkLogo from '../assets/enk-logo.png'
import { companyInfo } from '../data/company'
import { navItems, type PageId } from '../data/navigation'
import { serviceCategories } from '../data/services'

type HeaderProps = {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

function Header({ activePage, onNavigate }: HeaderProps) {
  return (
    <div className="site-header">
      <header className="topbar" aria-label="Informations rapides">
        <div className="container topbar__inner">
          <div className="topbar__group">
            <span className="topbar__item">
              <span className="topbar__icon" aria-hidden="true">*</span>
              {companyInfo.location}
            </span>
            <span className="topbar__separator" aria-hidden="true">|</span>
            <span className="topbar__item">
              <span className="topbar__icon" aria-hidden="true">@</span>
              {companyInfo.email}
            </span>
            <span className="topbar__separator" aria-hidden="true">|</span>
            <span className="topbar__item">
              <span className="topbar__icon" aria-hidden="true">+</span>
              {companyInfo.phone}
            </span>
          </div>
          <div className="topbar__group topbar__group--right">
            <span className="topbar__item">
              <span className="topbar__icon" aria-hidden="true">o</span>
              Heures de bureau : 8:00 - 18:00
            </span>
            <a className="social-mini" href={companyInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </header>

      <nav className="navbar" aria-label="Navigation principale">
        <div className="container navbar__inner">
          <button
            className="brand"
            type="button"
            onClick={() => onNavigate('home')}
            aria-label="ENK Consulting accueil"
          >
            <img src={enkLogo} alt="ENK Consulting" />
          </button>

          <div className="navlinks">
            {navItems.map((item) => (
              item.id === 'services' ? (
                <div className="nav-dropdown" key={item.id}>
                  <button
                    className={activePage === item.id ? 'is-active' : ''}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                  >
                    {item.label}
                  </button>
                  <div className="services-menu" aria-label="Services ENK Consulting">
                    <div className="services-menu__grid">
                      {serviceCategories.map((service) => (
                        <button
                          className="services-menu__item"
                          type="button"
                          key={service.code}
                          onClick={() => onNavigate('services')}
                        >
                          <span>{service.code}</span>
                          <strong>{service.title}</strong>
                        </button>
                      ))}
                    </div>
                    <button
                      className="services-menu__all"
                      type="button"
                      onClick={() => onNavigate('services')}
                    >
                      Découvrir tous les services
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className={activePage === item.id ? 'is-active' : ''}
                  type="button"
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <button className="nav-question" type="button" onClick={() => onNavigate('contact')}>
            <span className="chat-icon" aria-hidden="true">
              <span></span>
              <span></span>
            </span>
            <span>
              <small>Vous avez des questions ?</small>
              <strong>Parlons-en</strong>
            </span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
