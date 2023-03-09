import React from 'react'
import './footer.css'
import {FaTelegram, FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>LBMCODE</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://telegram.com'><FaTelegram/></a>
        <a href='https://linkedin.com'><FaLinkedinIn/></a>
        <a href='https://twitter.com'><FaTwitterSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; lbmcode Inc. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer