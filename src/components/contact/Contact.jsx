import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q06gap4', 'template_izcmmwd', form.current, 'b8yprgTxm57PBv1xq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contato'>
      <h5>Meu contato</h5>
      <h2>Fale comigo</h2>
      <div className="container __contactContainer">

        <div className="__contactOptions">

          <article className="__contactOption">
            <AiOutlineMail className='__contactOptionIcon'/>
            <h4>Email</h4>
            <h5>vitoroollii@gmail.com</h5>
            <a href="mailto:vitoroollii@gmail.com" target='_blank' rel='noreferrer'>Me mande uma mensagem</a>
          </article>

          <article className="__contactOption">
            <BsLinkedin className='__contactOptionIcon'/>
            <h4>Linkedin</h4>
            <h5>Vitor Vitorino</h5>
            <a href="https://www.linkedin.com/in/vitor-vitorino-b94833258/" target='_blank' rel='noreferrer'>Me mande uma mensagem</a>
          </article>

          <article className="__contactOption">
            <BsWhatsapp className='__contactOptionIcon'/>
            <h4>WhatsApp</h4>
            <h5>(84)99928-9207</h5>
            <a href="https://api.whatsapp.com/send?phone=5584999289207" target='_blank' rel='noreferrer'>Me mande uma mensagem</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome' required />
          <input type="text" name='email' placeholder='Seu email' required />
          <textarea name="message" id="" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>

      </div>
    </section>
  )
}

export default Contact