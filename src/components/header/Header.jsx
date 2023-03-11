import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-pic.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'am</h2>
        <h1>Leonard Mensah</h1>
        <h3 className='text-light'>Software Engineer</h3>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header