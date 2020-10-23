import React from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import Step from '../../components/Step/Step';
import StepInverted from '../../components/StepInverted/StepInverted';

import rocketBackground from '../../assets/rocket-background.png';

import Circle1 from '../../assets/icons/circles/circ1.svg';
import Circle2 from '../../assets/icons/circles/circ2.svg';
import Circle3 from '../../assets/icons/circles/circ3.svg';

import './styles.css';

function Instructions() {
  return (
    <section className="instructions">
      <HeaderSection
        title="Como Funciona"
        content="Estamos com você desde a estruturação da ideia, até a entrega do produto final.
        E podemos continuar evoluindo juntos!"
      />
      <div className="content-zone">
        <div className="card-zone">
          <Step
            title="Planejamento da Ideia"
            description={`
              Fazemos um brainstorming para entender a ideia, o problema que 
              ela soluciona e qual o publico-alvo.
            `}
            shape={Circle1}
          />

          <StepInverted
            title="Descrição das Funcionalidades"
            description={`
              Listamos as principais funcionalidades e requisitos para criarmos o backlog.
            `}
            shape={Circle2}
          />

          <Step
            title="Desenvolvimento do Produto"
            description={`
              Transformamos sua ideia em um produto único e funcional!
            `}
            shape={Circle3}
          />
        </div>
        
        <div className="rocketBackgroundImg">
          <img 
            src={rocketBackground} 
            alt="Rocket image" 
            width="600px" 
            height="550px" 
          />
        </div>
      </div>
    </section>
  );
}

export default Instructions;