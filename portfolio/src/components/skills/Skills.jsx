import React from 'react'
import './skills.css'

const Experience = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">Mes Compétences</span>
      <h2 className="section__title">Mon Expérience</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend Developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__level">Intermédiaire</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Tailwind CSS</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">Backend Developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Node JS</h3>
                  <span className="skills__level">Avancé</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Intermédiaire</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">GraphQL</h3>
                  <span className="skills__level">Intermédiaire</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__level">Intermédiaire</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Intermédiaire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience