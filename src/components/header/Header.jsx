import React, { useEffect, useRef } from 'react';
import './header.css';
import HeaderButtons from './HeaderButtons';
import profilePicture from '../../assets/profile_picture.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const animateText = () => {
      let iterations = 0;

      const interval = setInterval(() => {
        h1Ref.current.innerText = h1Ref.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return h1Ref.current.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= h1Ref.current.dataset.value.length)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 50);
    };

    if (h1Ref.current) {
      animateText();
    }
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Olá! Eu sou</h5>
        <h1 ref={h1Ref} data-value="Vitor Vitorino">Vitor Vitorino</h1>
        <h2 className='text-light'>Desenvolvedor Fullstack</h2>
        <HeaderButtons />
        <HeaderSocials />

        <div className="__minhaImg">
          <img src={profilePicture} alt="__minhaImg" />
        </div>

        <a href="#contato" className="__scrollDown">Rolar para baixo</a>
      </div>
    </header>
  );
}

export default Header;

