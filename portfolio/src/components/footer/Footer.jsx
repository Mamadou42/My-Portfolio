import React, { useEffect, useState } from 'react'
import './footer.css'

const Footer = () => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    setSections(document.querySelectorAll('section[id]'))
  }, [setSections])

  function scrollActive() {
    const scrollY = window.pageYOffset
    if(sections !== null) {
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
  
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if(document.querySelector('.nav__menu a[href*=' + sectionId + ']') !== null)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
          if(document.querySelector('.nav__menu a[href*=' + sectionId + ']') !== null)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      })
    }
    
  }
  window.addEventListener('scroll', scrollActive)
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"><i className='bx bx-qr' ></i> MLC Dev <i className='bx bx-code-alt'></i></h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">A Propos</a>
          </li>
          <li>
            <a href="#work" className="footer__link">Réalisations</a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">Témoignages</a>
          </li>
        </ul>

        <ul className="footer__social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
        </ul>

        <span className="footer__copy">
          &#169; Mamadou Lo COLY. Tous droits réservés.
        </span>
      </div>
    </footer>
  )
}

export default Footer