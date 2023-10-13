import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJquery} from 'react-icons/bi'
import {IoLogoJavascript} from 'react-icons/io'
import {RiBootstrapLine} from 'react-icons/ri'
import {FaReact, FaPython} from 'react-icons/fa'


const Experience = () => {
  return (
    <section id='experiencia'>

      <h5>Minhas habilidades</h5>
      <h2>Minha experiência</h2>

      <div className="container __experienceContainer">
        <div className="__frontExperience">
          <h3>Desenvolvimento Frontend</h3>
          <div className="__experienceContent">
            
            <article className="__experienceDetails">
              <AiOutlineHtml5 className='__experienceDetailsIcons' />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Proficiente</small>
              </div>
            </article>

            <article className="__experienceDetails">
              <BiLogoCss3 className='__experienceDetailsIcons' />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="__experienceDetails">
              <IoLogoJavascript className='__experienceDetailsIcons' />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="__experienceDetails">
              <RiBootstrapLine className='__experienceDetailsIcons' />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Iniciante/Intermediário</small>
              </div>
            </article>

            <article className="__experienceDetails">
              <BiLogoJquery className='__experienceDetailsIcons' />
              <div>
              <h4>jQuery</h4>
              <small className="text-light">Iniciante</small>
              </div>
            </article>

            <article className="__experienceDetails">
              <FaReact className='__experienceDetailsIcons' />
              <div>
              <h4>React</h4>
              <small className="text-light">Iniciante</small>
              </div>
            </article>

          </div>
        </div>

        <div className="__backendExperience">
        <h3>Desenvolvimento Backend</h3>
          <div className="__experienceContent">
            
          <article className="__experienceDetails">
              <FaPython className='__experienceDetailsIcons' />
              <div>
              <h4>Python</h4>
              <small className="text-light">Iniciante</small>
              </div>
            </article>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience