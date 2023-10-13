import React from 'react'
import './about.css'
import minhaFoto from '../../assets/fototeste.jpeg'
import {LiaAwardSolid} from 'react-icons/lia'
import {HiOutlineUsers} from 'react-icons/hi'
import {FiFolder} from 'react-icons/fi'

const About = () => {
  return (
    <section id='sobre'>
      <h5>Conheça um pouco</h5>
      <h2>Sobre mim</h2>

      <div className="container __aboutContainer">
        <div className="__aboutMe">
          <div className="__aboutMeImg">
            <img src={minhaFoto} alt="Minha foto" />
          </div>
        </div>
        
        <div className="__aboutContent">
          <div className="__aboutCards">

            <article className="__aboutCard">
              <LiaAwardSolid className='__aboutIcon' />
              <h5>Experiência</h5>
              <small>Incríveis 0 anos trabalhando</small>
            </article>

            <article className="__aboutCard">
              <HiOutlineUsers className='__aboutIcon' />
              <h5>Clientes</h5>
              <small>Incríveis 0 no mundo inteiro</small>
            </article>

            <article className="__aboutCard">
              <FiFolder className='__aboutIcon' />
              <h5>Projetos</h5>
              <small>Incríveis 0 projetos concluídos</small>
            </article>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis obcaecati maiores, reprehenderit quisquam tempore minima consectetur suscipit cumque. Deleniti animi quam alias, labore ab assumenda quo ipsam magni sunt tempora!</p>

          <a href="#contato" id="contact" className="btn btn-primary">Fale comigo!</a>

        </div>
      </div>

    </section>
  )
}

export default About