import React from 'react'
import './footer.css'
import {FaTelegram, FaLinkedinIn, FaTwitterSquare, FaGithub} from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/ai'

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
        <li><a href='#certificate'>Certificate</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://t.me/lbmcode' target="_blank"><FaTelegram/></a>
        <a href='https://www.linkedin.com/in/leonard-mensah/' target="_blank"><FaLinkedinIn/></a>
        <a href='https://twitter.com/lbmcode' target="_blank"><FaTwitterSquare/></a>
        <a href='https://github.com/leomensah' target='_blank'><FaGithub/></a>
        <a href='https://www.youtube.com/channel/UCS_F1XDz9LoYvMxYZMjbMVg' target='_blank'><AiOutlineYoutube/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; lbmcode Inc. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer