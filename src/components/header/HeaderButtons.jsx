import React from 'react'
import image from '../../assets/maxresdefault (1).jpg'

const HeaderButtons = () => {
  return (
    <div className="__headerButtons">
        <a href={image} download className="btn">Meu currículo</a>
        <a href="#contato" className="btn btn-primary">Fale comigo!</a>
    </div>
  )
}

export default HeaderButtons