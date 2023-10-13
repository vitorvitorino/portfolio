import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'


const template = [
  {
    id: 1,
    image: Img1,
    title: 'Redesign Responsivo da Loja Online "Moda Urbana"',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 1,
    image: Img2,
    title: 'Plataforma Interativa para Aprendizado de Idiomas "LinguaWeb""',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 1,
    image: Img3,
    title: 'Portal "EcoTurismo""',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 1,
    image: Img4,
    title: 'Dashboard de Análise de Desempenho para E-commerce "VendaVis"',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 1,
    image: Img5,
    title: 'Otimização de UX para o Aplicativo "FitTrack"',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 1,
    image: Img6,
    title: 'Aplicativo Web "Chef em Casa"',
    github: 'https://github.com',
    demo: '#'
  },
]


const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>Meus projetos</h5>
      <h2>Portfolio</h2>

      <div className="container __portfolioContainer">
        {
         template.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="__portfolioItem">
          <div className="__portfolioItemImg">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="__portfolioItemButton">
            <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
            </div>
        </article>
          )
         }) 
        }  

      </div>
    </section>
  )
}

export default Portfolio