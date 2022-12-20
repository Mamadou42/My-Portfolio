import React from 'react'
import './works.css'
import profile from '../../assets/work1.jpg';

const Portfolio = () => {
  const linkWork = document.querySelectorAll('.work__item');
  function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
  }
  linkWork.forEach(l => l.addEventListener('click', activeWork));
  return (
    <section className="work section" id="work">
      <span className="section__subtitle">Mon Portfolio</span>
      <h2 className="section__title">Travails Récents</h2>

      <div className="work__filters">
        <span className="work__item active-work" data-filter=".web">Web</span>
      </div>

      <div className="work__container container grid">
        <div className="work__card mix web">
          <img src={profile} alt='Work' className="work__img" />

          <h3 className="work__title">Toutheme</h3>

          <a href="#" className='work__button'>
            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
          </a>
        </div>
        <div className="work__card mix">
          <img src={profile} alt='Work' className="work__img" />

          <h3 className="work__title">Dieundko</h3>

          <a href="#" className='work__button'>
            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
          </a>
        </div>
        <div className="work__card mix">
          <img src={profile} alt='Work' className="work__img" />

          <h3 className="work__title">Eyaid'n</h3>

          <a href="#" className='work__button'>
            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio