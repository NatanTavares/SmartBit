import React from 'react';

import Button from '../Button/Button';

import './styles.css';

function SectionHeader() {
  return (
    <section className="section-header">
      <header>
        <img src="../../../assets/smartbit-logo.png" alt="SMARTBIT" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
              </li>
            <li>
              <a href="#">Como funciona</a>
            </li>
            <li>
              <a href="#">Contate-Nos</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="description-section">
        <h1>Soluções inteligentes para grandes ideias</h1>
        <p>
          Nossa missão é promover inovação tecnológica e transformação digital 
          de pessoas e empresas através dos nossos produtos e serviços.
        </p>
        <Button />
      </section>
    </section>
  );
}

export default SectionHeader;
