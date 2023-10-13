import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='__footerLogo'>Vitor Vitorino</a>

      <ul className='__permaLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Relatos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="__footerSocials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="__copyright">
        <small>&copy; Vitor Vitorino</small>
      </div>

    </footer>
  )
}

export default Footer