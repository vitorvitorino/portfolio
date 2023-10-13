import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>O que eu posso te oferecer</h5>
      <h2>Serviços</h2>

      <div className="container __servicesContainer">
        <article className="__service">
          <div className="__serviceHead">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="__serviceList">
            <li>
              <BiCheck className='__serviceListIcon' />
             <p>Lorem ipsum dolor sit amet consectetur elit.</p> 
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
             <p>Lorem ipsum dolor sit amet consectetur elit.</p> 
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="__service">
          <div className="__serviceHead">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className="__serviceList">
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="__service">
          <div className="__serviceHead">
            <h3>Criação de conteúdo</h3>
          </div>

          <ul className="__serviceList">
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
             <p>Lorem ipsum dolor sit amet consectetur elit.</p> 
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='__serviceListIcon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services