import React from 'react';

import meetImageBackground from '../../assets/meet-background.png';

function Contact() {
  return (
    <section>
      <div className="form-position">
        <div>
          <h2>Como podemos ajuda-lo?</h2>
          <p>Vamos bater um papo!</p>
        </div>
      </div>
      <div className="background-image">
        <img src={meetImageBackground} alt="Meet image background"/>
      </div>
    </section>
  );
}

export default Contact;
