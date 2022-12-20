import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="section">
      <div className="section__subtitle">Entrer en contact</div>
      <h2 className="section__title">Contactez-moi</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Parlez-moi</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">momocoly42@gmail.com</span>

              <a href="mailto:momocoly42@gmail.com" target="_blank" rel="noreferrer" className="contact__button">
                Ecrivez-moi <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+221772259550</span>

              <a href="https://api.whatsapp.com/send?phone=772259550&text=Bonjour, plus d'informations" target="_blank" rel="noreferrer" className="contact__button">
                Ecrivez-moi <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-twitter contact__card-icon"></i>
              <h3 className="contact__card-title">Twitter</h3>
              <span className="contact__card-data">@momocoly42</span>

              <a href="https://twitter.com/momocoly42" target="_blank" rel="noreferrer" className="contact__button">
                Ecrivez-moi <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Ecrivez-moi votre projet</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Prénom & Nom</label>
              <input type="text" placeholder="Prenom & Nom" className="contact__form-input" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="text" placeholder='Entrez votre email' className="contact__form-input" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">Projet</label>
              <textarea name="" placeholder='Ecrivez votre projet' id="" cols="30" rows="10" className='contact__form-input'></textarea>
            </div>

            <button className="button">Envoyer Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact