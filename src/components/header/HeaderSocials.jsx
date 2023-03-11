import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {AiOutlineYoutube} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/leonard-mensah/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/leomensah' target='_blank'><FaGithub/></a>
        <a href='https://leetcode.com/leomensah/' target='_blank'><SiLeetcode/></a>
        <a href='https://www.youtube.com/channel/UCS_F1XDz9LoYvMxYZMjbMVg' target='_blank'><AiOutlineYoutube/></a>
    </div>
  )
}

export default HeaderSocials