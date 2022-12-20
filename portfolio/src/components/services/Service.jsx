import React from 'react'
import './service.css'

const Service = () => {
  window.addEventListener('scroll', function(e) {
    const modalViews = document.querySelectorAll('.services__modal'),
          modalBtns = document.querySelectorAll('.services__button'),
          modalClose = document.querySelectorAll('.services__modal-close');
    let modal = function(modalClick) {
      modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((mb, i) => {
      mb.addEventListener('click', () => {
        modal(i)
      })
    })

    modalClose.forEach((mc) => {
      mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
          mv.classList.remove('active-modal')
        })
      })
    })
  })
  return (
    <section className="services section">
      <span className="section__subtitle">Mes Services</span>
      <h2 className="section__title">Qu'est ce que j'offre</h2>

      <div className="services__container container grid">
        <div className="services__card">
          <h3 className="services__title">Analyste</h3>

          <span className="services__button">
            Voir Plus <i className="bx bx-right-arrow-alt"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="bx bx-x services__modal-close"></i>

              <h3 className="services__modal-title">Analyste</h3>
              <p className="services__modal-description">
                Transcription des besoins client en solution informatique écrite avec un
                langage informatique.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Je développe des interfaces Utilisateurs
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                  Je positionne la marque de votre entreprise
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Analyse les besoins client puis proposition d'une solution
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Choix de la technologie adapté au projet et développement de la solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__card">
          <h3 className="services__title">Conception </h3>

          <span className="services__button">
            Voir Plus <i className="bx bx-right-arrow-alt"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="bx bx-x services__modal-close"></i>

              <h3 className="services__modal-title">Conception</h3>
              <p className="services__modal-description">
                Transcription des besoins client en solution informatique écrite avec un
                langage informatique.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Je développe des interfaces Utilisateurs
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                  Je positionne la marque de votre entreprise
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Analyse les besoins client puis proposition d'une solution
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Choix de la technologie adapté au projet et développement de la solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__card">
          <h3 className="services__title">Developpement <br/> </h3>

          <span className="services__button">
            Voir Plus <i className="bx bx-right-arrow-alt"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="bx bx-x services__modal-close"></i>

              <h3 className="services__modal-title">Programmation</h3>
              <p className="services__modal-description">
                Transcription des besoins client en solution informatique écrite avec un
                langage informatique.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Je développe des interfaces Utilisateurs
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                  Je positionne la marque de votre entreprise
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Analyse les besoins client puis proposition d'une solution
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icons"></i>
                  <p className="services__modal-info">
                    Choix de la technologie adapté au projet et développement de la solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service