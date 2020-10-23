import React from 'react';

import meetImageBackground from '../../assets/meet-background.png';

import './styles.css';

function Contact() {
  return (
    <section className="contact">
      <div className="form-position">
        <div className="form-header">
          <h2>Como podemos ajuda-lo?</h2>
          <p>Vamos bater um papo!</p>
        </div>

        <form>
          <div className="inputs-form">
            <input type="text" id="name_user" placeholder="Nome*" />
            <input type="email" id="email_user" placeholder="Email*" />
          </div>

          <div className="bottom-form">
            <textarea id="message" placeholder="Messagem" cols={30} rows={5} />
            <button type="submit">Envie agora</button>
          </div>
        </form>
      </div>
      <div className="background-image">
        <img src={meetImageBackground} alt="Meet image background" width="570" height="430" />
      </div>
    </section>
  );
}

export default Contact;
