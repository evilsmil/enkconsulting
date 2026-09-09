function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-row">
        <label>
          Nom complet
          <input type="text" name="name" placeholder="Votre nom" />
        </label>
        <label>
          Téléphone
          <input type="tel" name="phone" placeholder="+237 ..." />
        </label>
      </div>
      <label>
        Adresse e-mail
        <input type="email" name="email" placeholder="vous@entreprise.com" />
      </label>
      <label>
        Service recherché
        <select name="service" defaultValue="">
          <option value="" disabled>
            Choisir un service
          </option>
          <option>Cybersécurité</option>
          <option>Développement web et applications</option>
          <option>Cloud et infrastructure</option>
          <option>Data, BI et reporting</option>
          <option>Support et infogérance</option>
          <option>Conseil IT</option>
          <option>Formation</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Décrivez votre besoin en quelques lignes"></textarea>
      </label>
      <button className="button button--secondary" type="submit">
        Envoyer la demande
      </button>
    </form>
  )
}

export default ContactForm
