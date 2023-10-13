import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='__headerSocials'>
        <a href="https://github.com/vitorvitorino" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vitor-vitorino-b94833258/" target='_blank'><BsLinkedin /></a>
        <a href="https://www.instagram.com/vitor.ooli/" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials