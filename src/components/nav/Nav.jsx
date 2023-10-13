import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {MdOutlineLaptopChromebook} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><BiHome /></a>
      <a href="#sobre" onClick={() => setActiveNav('sobre')} className={activeNav === 'sobre' ? 'active' : ""}><BiUser /></a>
      <a href="#experiencia" onClick={() => setActiveNav('experiencia')} className={activeNav === 'experiencia' ? 'active' : ""}><BiBookBookmark /></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ""}><MdOutlineLaptopChromebook /></a>
      <a href="#contato" onClick={() => setActiveNav('contato')} className={activeNav === 'contato' ? 'active' : ""}><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav