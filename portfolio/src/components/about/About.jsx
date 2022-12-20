import React from 'react'
import './about.css'
import profile from '../../assets/profile.jpg';

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">Mon Intro</span>
      <h2 className="section__title">A Propos de Moi</h2>

      <div className="about__container container grid">
        <img className="about__img" src={profile} />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award about__icon"></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">4 ans de travail</span>
            </div>
            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon"></i>
              <h3 className="about__title">Terminé</h3>
              <span className="about__subtitle">4+ Projets</span>
            </div>
            <div className="about__box">
              <i className="bx bx-support about__icon"></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">Online 24/7</span>
            </div>
          </div>

          <p className="about__description">
            FullStack Developer, J'ai créer plusieurs sites web avec UI/UX interfaces Utilisateurs.
            J'ai plusieurs d'expériences et beaucoup de client sont satisfaits de notre collaboration.
          </p>

          <a href="#contact" className="button">Contactez-moi</a>
        </div>
      </div>
    </section>
  )
}

export default About