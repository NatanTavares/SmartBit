import React from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';

import Logo from '../../assets/Logo-menu.png';

import './styles.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="logo-on-footer">
          <img src={Logo} alt="Smartbit" width={220} />
        </div>
        
        <div className="services-footer">
          <h3>Nossos Serviços</h3>
          <p><MdKeyboardArrowRight />Criação de Sites</p>
          <p><MdKeyboardArrowRight />Devops</p>
          <p><MdKeyboardArrowRight />Criação de Apps</p>
          <p><MdKeyboardArrowRight />SEO</p>
          <p><MdKeyboardArrowRight />Criação de Sistemas</p>
          <p><MdKeyboardArrowRight />MVP</p>
        </div>
        
        <div className="menu-footer">
          <h3>Menu rápido</h3>
          <p><MdKeyboardArrowRight />Home</p>
          <p><MdKeyboardArrowRight />Serviços</p>
          <p><MdKeyboardArrowRight />Como Funciona</p>
          <p><MdKeyboardArrowRight />Contate-nos</p>
        </div>

        <div className="contact-footer">
          <h3>Informações de contato</h3>
          <p>Utilize o telefone ou o email abaixo para entrar em contato conosco.</p>
          <p>(71) 9****-****</p>
          <p>hello@email.digital</p>
        </div>
      </footer>
      
      <div className="copy">
        © 2020 SmartBit.
      </div>
    </>
  );
}

export default Footer;
