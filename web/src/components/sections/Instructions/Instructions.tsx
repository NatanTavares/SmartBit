import React from 'react';
import HeaderSection from '../../HeaderSection/HeaderSection';
import Step from '../../Step/Step';

import rocketBackground from '../../../assets/rocket-background.png';

function Instructions() {
  return (
    <section className="instructions">
      <HeaderSection
        title="Como Funciona"
        content="Estamos com você desde a estruturação da ideia, até a entrega do produto final.
        E podemos continuar evoluindo juntos!"
      />

      <Step
        title="Planejamento da Ideia"
        description={`
          Fazemos um brainstorming para entender a ideia, o problema que 
          ela soluciona e qual o publico-alvo.
        `}
        left
      />

      <Step
        title="Descrição das Funcionalidades"
        description={`
          Listamos as principais funcionalidades e requisitos para criarmos o backlog.
        `}
        left={false}
      />

      <Step
        title="Desenvolvimento do Produto"
        description={`
          Transformamos sua ideia em um produto único e funcional!
        `}
        left
      />

      <img src={rocketBackground} alt=""/>
    </section>
  );
}

export default Instructions;