import React from 'react';
import Button from '../../Button/Button';

import './styles.css';

import Logo from '../../../assets/Logo.png';
import Human from '../../../assets/human-background.png';
import Shape from '../../../assets/shape-1.png';

function Header() {
  return (
    <section className="header">
      <header>
          <div className="logo">
            <img src={Logo} alt="smart bit logo" className="invert" />
          </div>

          <nav>
            <ul className="wrap-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Serviços</a>
                </li>
              <li>
                <a href="#">Como Funciona</a>
              </li>
              <li>
                <a href="#">Contate-Nos</a>
              </li>
            </ul>
          </nav>
      </header>

      <img src={Shape} id="shape-1" alt='' />
      <img src={Human} id="human-background" alt='' />

      <section className="description-section">
        <div className="content-description">
          <h1>Soluções inteligentes para grandes ideias</h1>
          <p>
            Nossa missão é promover inovação tecnológica e transformação digital
            de pessoas e empresas através dos nossos produtos e serviços.
          </p>
          <Button />
        </div>
      </section>
    </section>
  );
}

export default Header;
