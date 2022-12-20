import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './home.css'
import CV from '../../assets/CV-Mamadou_Lo_Coly.pdf'
import profile from '../../assets/profile.jpg';

export default function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true
    })
    sr.reveal(`.home__data`)
    sr.reveal(`.home__handle`, { delay: 700 })
    sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })
  })

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Bonjour, Je suis</span>
          <h1 className="home__name">Mamadou Lo COLY</h1>
          <h1 className="home__education">FullStack Developer</h1>

          <div className="home__buttons">
            <a href={CV} download className="button button--ghost">
              Télécharger mon CV
            </a>
            <a href="#about" className="button">A Propos de moi</a>
          </div>
        </div>

        <div className="home__handle">
          <img src={profile} alt="Profile" className="home__img" />
        </div>

        <div className="home__social">
          <a href="" className="home__social-link">
            <i className='bx bxl-linkedin-square' ></i>
          </a>
          <a href="" className="home__social-link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="" className="home__social-link">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse"></i>
          <span className="home__scroll-name">Scroll down</span>
        </a>
      </div>
    </section>
  )
}
