import React, { useEffect, useState } from 'react'
import './header.css'

const Header = () => {
  const [themeButton, setThemeButton] = useState(null);
  const [darkTheme, setDarkTheme] = useState(null);
  const [lightTheme, setLightTheme] = useState(null);
  const [iconTheme, setIconTheme] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);

  window.addEventListener('scroll', function (e) {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
      header.classList.add('scroll-header')
    }
    else { header.classList.remove('scroll-header') }
  })

  useEffect(() => {
    /** ======= DARK AND LIGHT THEME ======== */
    setThemeButton(document.getElementById('theme-button'))
    setDarkTheme('dark-theme')
    setLightTheme('light-theme')
    setIconTheme('bx-sun')

    // Previously selected topic (if user selected)
    setSelectedTheme(localStorage.getItem('selected-theme'))
    setSelectedIcon(localStorage.getItem('selected-icon'))

  }, [setThemeButton, setDarkTheme, setIconTheme, setSelectedTheme, setSelectedIcon])

    // We obtain the current theme that the interface has by validating the light-theme class
    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

  // We validate the user previously choose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activate or deactivate the light
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }

  if (themeButton !== null) {
    themeButton.addEventListener('click', () => {
      // Add or Remove the light / icon theme
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)

      // We save the theme and add the current icon that the user choose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })
  }
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#logo" className="nav__logo"><i className='bx bx-qr' ></i> MLC Dev <i className='bx bx-code-alt'></i></a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Theme change button */}
        <i className="bx bx-moon change-theme" id="theme-button"></i>
      </nav>
    </header>
  )
}

export default Header